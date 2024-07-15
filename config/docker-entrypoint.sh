#!/bin/sh
set -e

# Memastikan izin untuk folder storage dan bootstrap/cache
chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Menjalankan supervisord
exec "$@"
