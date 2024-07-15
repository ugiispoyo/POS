# Stage 1: Build Stage
FROM php:8.2-fpm AS build

# Set working directory
WORKDIR /app

# Install dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    libcurl4-openssl-dev \
    pkg-config \
    libssl-dev \
    nano \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Stage 2: Composer Stage
FROM composer:2 AS composer

# Set working directory
WORKDIR /app

# Copy composer files
COPY api/composer.json api/composer.lock ./

# Copy .env.example file
COPY api/.env.example .env

# Copy the rest of the application code
COPY api/ .

# Run composer install
RUN composer install --no-dev --optimize-autoloader --no-interaction --no-progress

# Generate application key
RUN php artisan key:generate

# Stage 3: Final Stage
FROM php:8.2-fpm

# Set working directory
WORKDIR /var/www

# Copy built application code from the build stage
COPY --from=build /app /var/www

# Copy composer dependencies from composer stage
COPY --from=composer /app /var/www

# Install nginx and supervisor
RUN apt-get update && apt-get install -y \
    nginx \
    supervisor \
    openssl \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy nginx config
COPY config/nginx/default.conf /etc/nginx/conf.d/default.conf

# Add custom PHP-FPM configuration
COPY config/www.conf /usr/local/etc/php-fpm.d/www.conf

# Ensure the storage/logs directory exists and has the right permissions
RUN mkdir -p /var/www/storage/logs && chown -R www-data:www-data /var/www/storage

# Create SSL certificate
# RUN mkdir -p /etc/nginx/ssl && \
#     openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/server.key -out /etc/nginx/ssl/server.crt -subj "/C=US/ST=State/L=City/O=Organization/OU=Department/CN=localhost"

# Check Nginx configuration
RUN nginx -t

# Set permissions
RUN chown -R www-data:www-data /var/www

# Expose ports
EXPOSE 80 443

# Start supervisor to run both php-fpm and nginx
CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]