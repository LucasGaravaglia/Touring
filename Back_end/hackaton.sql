-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 08-Ago-2020 às 05:56
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `hackaton`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `restaurant`
--

CREATE TABLE `restaurant` (
  `restaurant_id` int(11) NOT NULL,
  `restaurant_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `restaurant_location` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `restaurant_address` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `restaurant_description` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `restaurant_image` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tour_agency`
--

CREATE TABLE `tour_agency` (
  `tour_agency_id` int(11) NOT NULL,
  `tour_agency_user_id` int(11) NOT NULL,
  `tour_agency_location` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `tour_agency_address` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `tour_agency_cnpj` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `tour_agency_phone` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `tour_agency_email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `tour_agency_description` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `tour_agency_image` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tour_requests`
--

CREATE TABLE `tour_requests` (
  `tour_request_id` int(11) NOT NULL,
  `tour_request_user_id` int(11) NOT NULL,
  `tour_request_spots_list` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `tour_request_restaurants_list` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `tour_request_datetime` datetime NOT NULL,
  `tour_request_status` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tour_spots`
--

CREATE TABLE `tour_spots` (
  `tour_spot_id` int(11) NOT NULL,
  `tour_spot_user_id` int(11) NOT NULL,
  `tour_spot_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `tour_spot_schedules` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `tour_spot_atracctions` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `tour_spot_location` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `tour_spot_city` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `tour_spot_description` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `tour_spot_image` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tour_spots_attractives`
--

CREATE TABLE `tour_spots_attractives` (
  `attractive_id` int(11) NOT NULL,
  `attractive_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `attractive_schedule` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `attractive_price` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `attractive_description` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `attractive_images` varchar(1000) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tour_spots_attractives_rate`
--

CREATE TABLE `tour_spots_attractives_rate` (
  `rate_attractive_id` int(11) NOT NULL,
  `attractive_id` int(11) NOT NULL,
  `attractive_rate_user_id` int(11) NOT NULL,
  `attractive_rate` int(11) NOT NULL,
  `attractive_rate_description` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `attractive_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_firstname` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_lastname` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_cpf` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_phone` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_address` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `user_image` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_type` int(11) NOT NULL,
  `user_creation_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `user_login_token`
--

CREATE TABLE `user_login_token` (
  `user_login_token_id` int(11) NOT NULL,
  `user_login_user_id` int(11) NOT NULL,
  `user_login_method` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `user_login_token` varchar(512) COLLATE utf8_unicode_ci NOT NULL,
  `user_login_expires` datetime NOT NULL,
  `user_login_token_ip` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`restaurant_id`);

--
-- Índices para tabela `tour_agency`
--
ALTER TABLE `tour_agency`
  ADD PRIMARY KEY (`tour_agency_id`);

--
-- Índices para tabela `tour_requests`
--
ALTER TABLE `tour_requests`
  ADD PRIMARY KEY (`tour_request_id`);

--
-- Índices para tabela `tour_spots`
--
ALTER TABLE `tour_spots`
  ADD PRIMARY KEY (`tour_spot_id`);

--
-- Índices para tabela `tour_spots_attractives`
--
ALTER TABLE `tour_spots_attractives`
  ADD PRIMARY KEY (`attractive_id`);

--
-- Índices para tabela `tour_spots_attractives_rate`
--
ALTER TABLE `tour_spots_attractives_rate`
  ADD PRIMARY KEY (`rate_attractive_id`);

--
-- Índices para tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Índices para tabela `user_login_token`
--
ALTER TABLE `user_login_token`
  ADD PRIMARY KEY (`user_login_token_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `restaurant_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tour_agency`
--
ALTER TABLE `tour_agency`
  MODIFY `tour_agency_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tour_requests`
--
ALTER TABLE `tour_requests`
  MODIFY `tour_request_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tour_spots`
--
ALTER TABLE `tour_spots`
  MODIFY `tour_spot_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tour_spots_attractives`
--
ALTER TABLE `tour_spots_attractives`
  MODIFY `attractive_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tour_spots_attractives_rate`
--
ALTER TABLE `tour_spots_attractives_rate`
  MODIFY `rate_attractive_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `user_login_token`
--
ALTER TABLE `user_login_token`
  MODIFY `user_login_token_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
