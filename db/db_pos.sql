-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql:3306
-- Generation Time: Aug 14, 2024 at 02:50 PM
-- Server version: 9.0.0
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `checkouts`
--

CREATE TABLE `checkouts` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `items` json NOT NULL,
  `totalItems` int NOT NULL,
  `totalOriginalAmount` decimal(10,2) NOT NULL,
  `totalFixAmount` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `checkouts`
--

INSERT INTO `checkouts` (`id`, `items`, `totalItems`, `totalOriginalAmount`, `totalFixAmount`, `created_at`, `updated_at`) VALUES
('1901a2e1-f969-468a-8626-b12217878cb8', '\"[{\\\"id\\\":\\\"436147f4-8e8a-4d66-a7db-6e2b247c59ce\\\",\\\"name\\\":\\\"Ayam chili padi\\\",\\\"description\\\":\\\"Ayam dengan cabe pedas\\\",\\\"image\\\":\\\"photos/DsrXkeYfRxMZ3YK7XoT7gApRQAl7d5kKMcHZ2KBZ.jpg\\\",\\\"price\\\":\\\"15000.00\\\",\\\"priceAfterDiscount\\\":null,\\\"stock\\\":null,\\\"isDiscount\\\":\\\"2\\\",\\\"type\\\":\\\"makanan\\\",\\\"created_at\\\":\\\"2024-08-13T03:51:13.000000Z\\\",\\\"updated_at\\\":\\\"2024-08-13T03:51:13.000000Z\\\",\\\"total\\\":1},{\\\"id\\\":\\\"32819534-6154-4b91-9228-5fa9d5f1ac27\\\",\\\"name\\\":\\\"Telur asin juara\\\",\\\"description\\\":\\\"Telur asin asli brebes\\\",\\\"image\\\":\\\"photos/mc9yXKwhKhkaSbrcaSdpiBDSaDA9HykEEkx3dEjG.jpg\\\",\\\"price\\\":\\\"5000.00\\\",\\\"priceAfterDiscount\\\":null,\\\"stock\\\":null,\\\"isDiscount\\\":\\\"2\\\",\\\"type\\\":\\\"makanan\\\",\\\"created_at\\\":\\\"2024-08-13T03:49:54.000000Z\\\",\\\"updated_at\\\":\\\"2024-08-13T03:49:54.000000Z\\\",\\\"total\\\":1},{\\\"id\\\":\\\"eb25a4ff-62a8-45e2-8f53-923cf2d0ade3\\\",\\\"name\\\":\\\"Ayam geprek pedas\\\",\\\"description\\\":\\\"Ayam geprek\\\",\\\"image\\\":\\\"photos/lK14c4hAwdeWHz1d5bibkXzBpz74uIbScXplLjyb.jpg\\\",\\\"price\\\":\\\"20000.00\\\",\\\"priceAfterDiscount\\\":\\\"0.00\\\",\\\"stock\\\":null,\\\"isDiscount\\\":\\\"2\\\",\\\"type\\\":\\\"makanan\\\",\\\"created_at\\\":\\\"2024-07-18T04:29:10.000000Z\\\",\\\"updated_at\\\":\\\"2024-07-18T04:33:32.000000Z\\\",\\\"total\\\":1},{\\\"id\\\":\\\"8b1bbacd-bed8-418f-a7a1-7399085bb142\\\",\\\"name\\\":\\\"Ayam Rica-Rica\\\",\\\"description\\\":\\\"Ayam rica rica pedas (tidak termasuk nasi)\\\",\\\"image\\\":\\\"photos/lz5HbZ30KXdcwMhpEJnEvrAMm8SUQQLmOI58RMLX.jpg\\\",\\\"price\\\":\\\"15000.00\\\",\\\"priceAfterDiscount\\\":\\\"0.00\\\",\\\"stock\\\":null,\\\"isDiscount\\\":\\\"2\\\",\\\"type\\\":\\\"makanan\\\",\\\"created_at\\\":\\\"2024-07-16T14:11:58.000000Z\\\",\\\"updated_at\\\":\\\"2024-07-18T03:44:24.000000Z\\\",\\\"total\\\":1}]\"', 4, 55000.00, 55000.00, '2024-08-14 21:46:50', '2024-08-14 21:46:50'),
('e4fcc121-b1ec-4da4-8429-bf1884d7946f', '\"[{\\\"id\\\":\\\"436147f4-8e8a-4d66-a7db-6e2b247c59ce\\\",\\\"name\\\":\\\"Ayam chili padi\\\",\\\"description\\\":\\\"Ayam dengan cabe pedas\\\",\\\"image\\\":\\\"photos/DsrXkeYfRxMZ3YK7XoT7gApRQAl7d5kKMcHZ2KBZ.jpg\\\",\\\"price\\\":\\\"15000.00\\\",\\\"priceAfterDiscount\\\":null,\\\"stock\\\":null,\\\"isDiscount\\\":\\\"2\\\",\\\"type\\\":\\\"makanan\\\",\\\"created_at\\\":\\\"2024-08-13T03:51:13.000000Z\\\",\\\"updated_at\\\":\\\"2024-08-13T03:51:13.000000Z\\\",\\\"total\\\":1},{\\\"id\\\":\\\"32819534-6154-4b91-9228-5fa9d5f1ac27\\\",\\\"name\\\":\\\"Telur asin juara\\\",\\\"description\\\":\\\"Telur asin asli brebes\\\",\\\"image\\\":\\\"photos/mc9yXKwhKhkaSbrcaSdpiBDSaDA9HykEEkx3dEjG.jpg\\\",\\\"price\\\":\\\"5000.00\\\",\\\"priceAfterDiscount\\\":null,\\\"stock\\\":null,\\\"isDiscount\\\":\\\"2\\\",\\\"type\\\":\\\"makanan\\\",\\\"created_at\\\":\\\"2024-08-13T03:49:54.000000Z\\\",\\\"updated_at\\\":\\\"2024-08-13T03:49:54.000000Z\\\",\\\"total\\\":1},{\\\"id\\\":\\\"eb25a4ff-62a8-45e2-8f53-923cf2d0ade3\\\",\\\"name\\\":\\\"Ayam geprek pedas\\\",\\\"description\\\":\\\"Ayam geprek\\\",\\\"image\\\":\\\"photos/lK14c4hAwdeWHz1d5bibkXzBpz74uIbScXplLjyb.jpg\\\",\\\"price\\\":\\\"20000.00\\\",\\\"priceAfterDiscount\\\":\\\"0.00\\\",\\\"stock\\\":null,\\\"isDiscount\\\":\\\"2\\\",\\\"type\\\":\\\"makanan\\\",\\\"created_at\\\":\\\"2024-07-18T04:29:10.000000Z\\\",\\\"updated_at\\\":\\\"2024-07-18T04:33:32.000000Z\\\",\\\"total\\\":1},{\\\"id\\\":\\\"8b1bbacd-bed8-418f-a7a1-7399085bb142\\\",\\\"name\\\":\\\"Ayam Rica-Rica\\\",\\\"description\\\":\\\"Ayam rica rica pedas (tidak termasuk nasi)\\\",\\\"image\\\":\\\"photos/lz5HbZ30KXdcwMhpEJnEvrAMm8SUQQLmOI58RMLX.jpg\\\",\\\"price\\\":\\\"15000.00\\\",\\\"priceAfterDiscount\\\":\\\"0.00\\\",\\\"stock\\\":null,\\\"isDiscount\\\":\\\"2\\\",\\\"type\\\":\\\"makanan\\\",\\\"created_at\\\":\\\"2024-07-16T14:11:58.000000Z\\\",\\\"updated_at\\\":\\\"2024-07-18T03:44:24.000000Z\\\",\\\"total\\\":1}]\"', 4, 55000.00, 55000.00, '2024-08-14 14:44:10', '2024-08-14 14:44:10');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_07_10_172658_create_products_table', 1),
(5, '2024_07_10_174405_add_harga_diskon_to_products_table', 1),
(6, '2024_07_10_180704_create_personal_access_tokens_table', 1),
(7, '2024_08_14_141401_create_checkouts_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `priceAfterDiscount` decimal(10,2) DEFAULT NULL,
  `stock` int DEFAULT '0',
  `isDiscount` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '2',
  `type` enum('makanan','minuman') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `image`, `price`, `priceAfterDiscount`, `stock`, `isDiscount`, `type`, `created_at`, `updated_at`) VALUES
('0f8c6dbc-e83b-425d-9bc6-232c4dcf0c9e', 'Es Teh', 'Es teh', 'photos/cVpHflB20HgNuvoR94hLDtxeb3K2VIa0W6Rc5ASU.jpg', 5000.00, 3000.00, NULL, '1', 'minuman', '2024-07-16 14:08:26', '2024-07-16 14:08:26'),
('32819534-6154-4b91-9228-5fa9d5f1ac27', 'Telur asin juara', 'Telur asin asli brebes', 'photos/mc9yXKwhKhkaSbrcaSdpiBDSaDA9HykEEkx3dEjG.jpg', 5000.00, NULL, NULL, '2', 'makanan', '2024-08-13 03:49:54', '2024-08-13 03:49:54'),
('415ffe73-442a-4c37-b0f2-bd92386397b0', 'Es Jeruk', 'Es jeruk', 'photos/ATohwQufNCGHNjhubHRgm5OvImlXLdnUAPfwxMEr.jpg', 10000.00, 0.00, NULL, '2', 'minuman', '2024-07-16 10:50:58', '2024-07-16 14:07:56'),
('436147f4-8e8a-4d66-a7db-6e2b247c59ce', 'Ayam chili padi', 'Ayam dengan cabe pedas', 'photos/DsrXkeYfRxMZ3YK7XoT7gApRQAl7d5kKMcHZ2KBZ.jpg', 15000.00, NULL, NULL, '2', 'makanan', '2024-08-13 03:51:13', '2024-08-13 03:51:13'),
('694e5886-0c05-49c9-b638-3cbce1036171', 'Es Milo', 'Es milo', 'photos/kN4dtvnYkLcrLW4xaZPmFcOqDv9AuzCSi65wLHoZ.jpg', 15000.00, NULL, NULL, '2', 'minuman', '2024-07-16 14:11:05', '2024-07-16 14:11:05'),
('7fd59af8-09be-40e9-83a0-0991b45d76ea', 'Nasi putih', 'Nasi putih', 'photos/dLlvaam6HzvZxRJnjm4iOaHBxQOO4LtXZqoZee7z.jpg', 5000.00, NULL, NULL, '2', 'makanan', '2024-07-16 14:10:20', '2024-07-16 14:10:20'),
('8b1bbacd-bed8-418f-a7a1-7399085bb142', 'Ayam Rica-Rica', 'Ayam rica rica pedas (tidak termasuk nasi)', 'photos/lz5HbZ30KXdcwMhpEJnEvrAMm8SUQQLmOI58RMLX.jpg', 15000.00, 0.00, NULL, '2', 'makanan', '2024-07-16 14:11:58', '2024-07-18 03:44:24'),
('a4e8c389-f826-4abf-b9c7-58ce81fddbc2', 'Ayam geprek', 'Ayam geprek', 'photos/9L6tkhfIMd10dohM6MCTXRVHNm6gHxs2PauZLVr3.jpg', 20000.00, NULL, NULL, '2', 'makanan', '2024-07-16 14:09:12', '2024-07-16 14:09:12'),
('e5bd0224-70fd-4086-9057-e37ebd67433c', 'Nasgor Ayam', 'Nasi goreng ayam', 'photos/0vdNe2a8PCV7GSdDRnNSFDZuBYpIHP86y1Is2SrN.jpg', 20000.00, NULL, NULL, '2', 'makanan', '2024-07-16 14:09:54', '2024-07-16 14:09:54'),
('eb25a4ff-62a8-45e2-8f53-923cf2d0ade3', 'Ayam geprek pedas', 'Ayam geprek', 'photos/lK14c4hAwdeWHz1d5bibkXzBpz74uIbScXplLjyb.jpg', 20000.00, 0.00, NULL, '2', 'makanan', '2024-07-18 04:29:10', '2024-07-18 04:33:32');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('0jgtDKpmYDEo7HxWv0pqOOADLK9KBHkwzWpTaSOB', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYzA1eXJrMUpPS2Z4YjNPYkFWM2sydFRleVVEWnk1elZGeE9kbzhkVyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MTY6Imh0dHBzOi8vYXBpLnRlc3QiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1721125810),
('2gYYASd2DpViOJpq9oQIn2LDvNFJCIjGQWVBK5w9', NULL, '127.0.0.1', 'TelegramBot (like TwitterBot)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZUV1VlA1VGtwbVkzMVFVNHl0ZlR0c2xGR2wyUnJyV3VWeFZCNWdTdCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1723644018),
('4Jzs2FFv7kl6QMtCOiz8RGE8OJT4VVP0AnFe3hhU', NULL, '127.0.0.1', 'TelegramBot (like TwitterBot)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYVZUV1M2cjd6NzhRbGt3VVFYRFk4MFhaWEtFZ0hSM215SERkYm5OZCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1723640629),
('5E9TB4GIY1pO0L2n8s8mMpJHRhkMmL5ixBdjs5X1', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUjBLc3EybTVBYnpPNDZSRktEWU1LQlFvejh5V29jTmtxekdIb2NtSiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1723520212),
('5VRt14vWRbyX2CfBdNZpZnqTYnqdSoj0mAP1ifPg', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWmtodDE2ZFpReXp2R2NlOVc2TmxkMFNEcGlobGtMZ29ZM0RvQUczeSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721273470),
('65tLYni9QaBZwHzYNOESoQtgLylZsQGa7lusla3p', NULL, '127.0.0.1', 'TelegramBot (like TwitterBot)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYTh2OGlwd1pYdzlGbGJ5VVg5eHlXZktKMFFWeVJyWVFtVTV3SzRGRSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1723644018),
('8IBBfUU0H8fXCewgNgJU8KP4nkmG7UakD2NVVu2L', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidGdLU3h2NUhCSWg1R1J2RVpOZHFhN1NQeU9oUWx3elhKSENhQzRrZCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1723523813),
('aXQXeWCcmNIrdIFICQbSeCQyNh45acTk6MESCGtB', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTlNKT2pSQWxRZ2hKdEtUcG51ODRKTmNGbFZCSVBwUnNVeUFtbTBaYyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1723643921),
('bC7XcJPf5NNXxhpW0uHeEnzDuPpWlv8lhDarEoD3', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoienA4YWdiYlJKQmlEMFRGclpkcWRjTlhMMGFZajI1ZEU3SEoxc0RJSCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1723470628),
('BNv1LQnVe6fJE87TVPVzMr1jqpAzTLHgKc2iYm9p', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWjNKNkRCT0d3RWw3dEVUTlhFZ0t2bjB6a3dGTDFDZExiVUtXd0huaSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzk6Imh0dHBzOi8vNGRxczYzcGZvYS5zaGFyZWR3aXRoZXhwb3NlLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721141946),
('BX7wOJTL2CPjJrddGUajNNI0sjRe7hzIurpBoPMR', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiakJUNEdzd2huSTdSa0x0ck8zcnZ6MDRNVnhqQU1WbDhqQTI5TmRQRCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721203222),
('cEYAEoqnIKFvEvecwut2dZJ1BYxEyT0P8P3crOJy', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVmtCSmgxZ3d6WTcxbkllcnZaa1pSRmp5dkZ5bFBoOG41OExvYTBGdCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1723528221),
('CUsc04V6d9uxtm7lKhFIv7flArVol4m2ircfgVTJ', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWFlmZ0FBT1diVFB4dG9LQldSSk9WZ3g3VXpzT3RDWDBXQjJ3alo4cyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1723527655),
('DJntWFkRkDJh0MssnBz887PnllqALKhj8Zq4cqkf', NULL, '127.0.0.1', 'TelegramBot (like TwitterBot)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUmFncU8yZHVxSldteU5TUExjVXZ1dGZsdnJwelNBZHZIWUs3OGxTZSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzk6Imh0dHBzOi8vbnljNHZvbDJjNS5zaGFyZWR3aXRoZXhwb3NlLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721126868),
('EEs3LWtuAHg7oTa7ci0Yh1spmMTTmK07iV96iZfx', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUWJvZnhDalg0ZUFtR0J2c3dxQUJKQ09qQXlldnZnYzZkWVc1N1M5OCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzk6Imh0dHBzOi8vdnh6cnZ2c21wcy5zaGFyZWR3aXRoZXhwb3NlLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721138785),
('Epq4xtStxWt39weodvqZoaLyzA6tZvLWZ2dSfHPb', NULL, '127.0.0.1', 'TelegramBot (like TwitterBot)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWElNU24wVDNEemhIRG9zcFdQdG9MZXJrZFROUWN6MHFQdEdGcUxERiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721269881),
('EwBsWsvMYhS2OT1KyV4TZROFPALliCIyL0L9vVHM', NULL, '127.0.0.1', 'WhatsApp/2.23.20.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicFBHRWRyWk9hMmFUakdBbEI5TjFHZFZqd0FLQkhEM2JuOTNZUEhyWSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721276785),
('gKAdwTZxmGPkZ1uy76SBmLRlA4PT5RKvfZpz0Zhu', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMEtDMnVieW43ZDJLMGkyOVVyUWNLNzFGaTVySHczS1dLZWFzY1B6ZCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1723524054),
('h9Rhz5U3oPl7BWwkrzTCQOTFxIhEY1e5k4iwDK4J', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMDB4VEd6b2gwazlDVGZaMnpleGx1eE0yOEVySFpBUU5zTnFrc1JmMyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzk6Imh0dHBzOi8vbnljNHZvbDJjNS5zaGFyZWR3aXRoZXhwb3NlLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721126833),
('hLJEAviJzRqbnBbIQ57LZG5jY246786pvLng3lrU', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/25.0 Chrome/121.0.0.0 Mobile Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieXhoTHR5d0JCRVhaRU1Mc2pnTEdyMDdLd2V3N0pCS0RPWnZPUlJ6NiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzk6Imh0dHBzOi8vbnljNHZvbDJjNS5zaGFyZWR3aXRoZXhwb3NlLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721126882),
('HZW6xy1DY36b6lidiKhYBFEJBDzoRGYtb4WKelvn', NULL, '127.0.0.1', 'TelegramBot (like TwitterBot)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVVRkcUloVVAzMkZhMkRsUDhDWlUycDZud0FGdTZQZ21zUzV6bVQ5QSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1723467257),
('iQtODGiAboJG6WZnNNEsvp7nmJwEU913v9hNH7iC', NULL, '127.0.0.1', 'WhatsApp/2.23.20.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiT3BDa2ZtM3pjMnJaVHVydmY1QzY2MlB3N3dNSEtaNWg5MHRENXB1ZiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721270000),
('JcdwMmGYc3ZUxZdJmVm4duC1Pv8NNinLrCZMlVBh', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiR2tPZFJ4dXN5OGZFSHhoOU5KdTdURjB5TEtOQ0VBY0RNSDAyUFJpSSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1723467058),
('jpEpbSSgBJOSpJCoKsWH6rSTx98GjDPw6LDl6wqI', NULL, '127.0.0.1', 'TelegramBot (like TwitterBot)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaEltTVZpSUVrcmdlOWt2Y0VQd3BJeFVsNkpMOEVxanVPazgxb1JKciI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1723520253),
('mPADbbiknz1nEb1tJJlZnpgzMIdFy192anQ0rUKA', NULL, '127.0.0.1', 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidEtqYzlLTHl5SzdkUEdVU21QZFRaWGJyeEpvRzJsazFPbVI5YzF2SCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721276804),
('nGJq0y1hi64DnGuj6GtRN0RWZUGKJY0cNE9JU1Oh', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRk9YUm5UUVRxdkZvR21hUURac1R4ZEkyR3ZYUThWR1N5M0JyWG5YUSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721269866),
('NkvkHj7AyDnLpyBY47kld3XuofCHtlhfINmwJoXG', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZENrOTNHdTJlbVdsT2hpNjVNb3BEWGxhNzBYbDF6ZGRDelRreTBkOSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MTY6Imh0dHBzOi8vYXBpLnRlc3QiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1721124140),
('NLAEBtdvbMblUsdTISS8rtYvmyV2atBZEg28tCtm', NULL, '127.0.0.1', 'TelegramBot (like TwitterBot)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUVI2ZXo3ZnhnVFc0amlwSHh0dHZQaVoyVzhsY3c0MVFIaHNUWmV1diI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1723528234),
('nO41P3gwvXhRJ2mJQXbz7mMWPgvJMF1GZzhMWGOH', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieHdZclJNdVZzN2N4Q0xwTFNNZjVjYjk4V2JxSHhXam9YMjN2aEJPWiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721276977),
('Nsty04KujSFOIfuJKrXZq4BU5WXTanKprUnrEVkf', NULL, '127.0.0.1', 'TelegramBot (like TwitterBot)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaHRqUUVGTVNrZTlqSUtua2t5U3V5eWZ3bkJHQ0g2V1RWUGNQV2dqUCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1723524070),
('oJwoHIWtAuttinfq9YCGQb44nPE45L8ujym9ptZM', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicHcyM0laQUtUOWpoSVQxWnk5S08yREtTakVud3hYYjZoOENPUUpybyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721226367),
('pY7NDjyuDh1hAVz2xNJCd6pmQNcSOeEri11hNFPu', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZnBPNVd3bHY4VGszYnFwUlpyYzVQZW5GamhreXpDU1FDU0k3SmEzZyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721203210),
('PzkdHe5fhEm8vXqa7oWeClvq0KCvFTV8IN40cG5Z', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNDdzcnZTNjZ3eVdKR1ZpbzMzUnZSYU00YVNKMjBwQXRvZDU5cGl4SCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721228556),
('RMWhMT222QgCtZsB2jM8gcpU3FXMDttggbB9ElV0', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWXpEcXNCaFhmckdVSnE0NWFFQWVnSXhhRGYzR0QyODNRYkNmQ2I0SSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721227604),
('s8EoJyb5Snj3Ebr5x4aYLZJFgrXNxRsoeKVguVNb', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUmdWN2x0WXlxZE5JdXZJdFFvcXNNeGxvMUdFQXRzRjdYaDlYUnl1SSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721274074),
('s9wCQC84FnT1FxIgzRGzMuhxLO5g7qioQeR1MPUo', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicmIxMDUwSk9VazlBbTRRa1dzWUtqTjZUU0lMT3BVamJpSVdUaWtGdyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1723644003),
('srZQIs31SzM3XLtFzazcsflx7geD7F4TRmWG6T7j', NULL, '127.0.0.1', 'WhatsApp/2.23.20.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYk1ibnJKZktxZXJGOUFqM21scGp5aDVoVzk1UUZJYTBzQ1FienZQTCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721274091),
('VflzTZjmSNQGB9VxkgarpHwS0Y9rCUYJSqBvby3m', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidTVWc29wWVhmWFIyRlRlNnhabk5DbDI0NzVlQmNqdlJUQlNORDNhUiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721276775),
('WmxlnrmtSjil3FwS5HZLeN8tknkwiRWvrphOECGI', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieU1WSWlrbXdrRWdoY2dmclRFeVJqVFV2SGJhSjFkeXBSUzFWY1dnWCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzk6Imh0dHBzOi8vbnljNHZvbDJjNS5zaGFyZWR3aXRoZXhwb3NlLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721126848),
('X4MFKet9fLxDURGiGaBTDitIcaVSL4gQb8Wn3fG4', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNXV5WmtLSzU0UzFYaHoxa0FkNkl1cG80M1ZoZjJNWmh3aFVlS0hnQiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1723640613),
('XLcOHgRAIssHyrdPGOjStINE7rAibHnK11jR5CMB', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicnlJQmttYk5ZZDNVaTFndUlCRGtWQUZWY01xeG9WMVd4TnJqM1NJQSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721206811),
('ZSeh38YNMFeHjlPsgrSqJdu2SiZdVGeeZSCy8hQe', NULL, '127.0.0.1', 'GuzzleHttp/7', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTTVWT3c4Y0lTMk1jbHV4UHpkN3JhMW9NeHcxODdVa3ZpbFNFREFBNSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721273977);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `checkouts`
--
ALTER TABLE `checkouts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
