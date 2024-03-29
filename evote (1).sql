-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 04 2023 г., 22:29
-- Версия сервера: 5.7.39
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `evote`
--

-- --------------------------------------------------------

--
-- Структура таблицы `documents`
--

CREATE TABLE `documents` (
  `document_id` int(11) NOT NULL,
  `title` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `owner_id` int(11) NOT NULL,
  `unit_id` int(11) NOT NULL,
  `fraction` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL,
  `created` timestamp NOT NULL,
  `updated` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `documents`
--

INSERT INTO `documents` (`document_id`, `title`, `date`, `owner_id`, `unit_id`, `fraction`, `active`, `created`, `updated`) VALUES
(77, 'Выписка из ЕГРН №1', '2030-09-20', 1, 111, '1/2', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(78, 'Выписка из ЕГРН №2', '2001-10-20', 2, 111, '1/2', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(79, 'Выписка из ЕГРН №3', '2002-10-20', 3, 112, '1/3', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(80, 'Выписка из ЕГРН №4', '2003-10-20', 4, 112, '2/3', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(81, 'Выписка из ЕГРН №5', '2004-10-20', 1, 135, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(82, 'Выписка из ЕГРН №6', '2005-10-20', 5, 113, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(83, 'Выписка из ЕГРН №7', '2006-10-20', 6, 114, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(84, 'Выписка из ЕГРН №8', '2007-10-20', 7, 115, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(85, 'Выписка из ЕГРН №9', '2008-10-20', 8, 116, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(86, 'Выписка из ЕГРН №10', '2009-10-20', 9, 117, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(87, 'Выписка из ЕГРН №11', '2010-10-20', 10, 118, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(88, 'Выписка из ЕГРН №12', '2011-10-20', 11, 119, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(89, 'Выписка из ЕГРН №13', '2012-10-20', 12, 120, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(90, 'Выписка из ЕГРН №14', '2013-10-20', 13, 121, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(91, 'Выписка из ЕГРН №15', '2014-10-20', 14, 122, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(92, 'Выписка из ЕГРН №16', '2015-10-20', 15, 123, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(93, 'Выписка из ЕГРН №17', '2016-10-20', 16, 124, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(94, 'Выписка из ЕГРН №18', '2017-10-20', 17, 125, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(95, 'Выписка из ЕГРН №19', '2018-10-20', 18, 126, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(96, 'Выписка из ЕГРН №20', '2019-10-20', 19, 127, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(97, 'Выписка из ЕГРН №21', '2020-10-20', 20, 128, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(98, 'Выписка из ЕГРН №22', '2021-10-20', 21, 129, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(99, 'Выписка из ЕГРН №23', '2022-10-20', 22, 130, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(100, 'Выписка из ЕГРН №24', '2023-10-20', 23, 131, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(101, 'Выписка из ЕГРН №25', '2024-10-20', 24, 132, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(102, 'Выписка из ЕГРН №26', '2025-10-20', 10, 133, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(103, 'Выписка из ЕГРН №27', '2026-10-20', 15, 134, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(104, 'Выписка из ЕГРН №28', '2027-10-20', 16, 136, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(105, 'Выписка из ЕГРН №29', '2028-10-20', 17, 137, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(106, 'Выписка из ЕГРН №30', '2029-10-20', 18, 138, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(107, 'Выписка из ЕГРН №31', '2030-10-20', 19, 139, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(108, 'Выписка из ЕГРН №32', '2031-10-20', 20, 140, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(109, 'Выписка из ЕГРН №33', '2001-11-20', 21, 141, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(110, 'Выписка из ЕГРН №34', '2002-11-20', 22, 142, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(111, 'Выписка из ЕГРН №35', '2003-11-20', 23, 143, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(112, 'Выписка из ЕГРН №36', '2004-11-20', 24, 144, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(113, 'Выписка из ЕГРН №37', '2005-11-20', 7, 145, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(114, 'Выписка из ЕГРН №38', '2006-11-20', 8, 146, '1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Структура таблицы `owners`
--

CREATE TABLE `owners` (
  `owner_id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL,
  `lastname` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `midname` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `passport` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `owners`
--

INSERT INTO `owners` (`owner_id`, `type_id`, `lastname`, `name`, `midname`, `password`, `passport`, `phone`, `active`, `created`, `updated`) VALUES
(1, 1, 'Раков', 'Тихон', 'Арсенович', '945-9199-9643', '04417184580', '+79477887318', 0, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(2, 1, 'Левина', 'Евдокия', 'Кирилловна', '4499-7413-1502', '123882454', '+79155927616', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(3, 1, 'Карпов', 'Мирон', 'Владиславович', '5044-8651-7882', '5311343671', '+79089947464', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(4, 1, 'Гаврилова', 'Елизавета', 'Глебовна', '1528-2342-75', '1537561318', '+79706083185', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(5, 1, 'Калинин', 'Антон', 'Максимович', '3209-5319-4069', '7831693740', '+79438095026', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(6, 1, 'Волков', 'Ярослав', 'Даниилович', '5013-6895-2053', '1787368012', '+79838182435', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(7, 1, 'Филатова', 'Евгения', 'Артемьевна', '3919-6050-4824', '1550585869', '+79553132350', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(8, 1, 'Титова', 'Есения', 'Мироновна', '274-1887-6962', '267424103', '+79617890543', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(9, 1, 'Калашников', 'Лев', 'Никитич', '6886-7574-5121', '649159128', '+79155243524', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(10, 1, 'Суслов', 'Иван', 'Максимович', '8574-349-7849', '5437595387', '+79891450967', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(11, 1, 'Власов', 'Макар', 'Владимирович', '5119-1626-2692', '4755863935', '+79578442023', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(12, 1, 'Евдокимов', 'Ярослав', 'Николаевич', '1691-7798-3665', '1399677865', '+79223942515', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(13, 1, 'Котова', 'Ева', 'Ярославовна', '492-4468-9488', '4752607039', '+79056205464', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(14, 1, 'Андреев', 'Артём', 'Андреевич', '5883-5213-6091', '223855382', '+79399677762', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(15, 1, 'Устинова', 'Александра', 'Тимофеевна', '6969-8503-183', '8221598779', '+79409047592', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(16, 1, 'Смирнова', 'Алёна', 'Александровна', '911-1425-1905', '5191733726', '+79293213857', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(17, 1, 'Смирнов', 'Лев', 'Олегович', '3549-421-3910', '544278018', '+79486166403', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(18, 1, 'Степанов', 'Фёдор', 'Филиппович', '2894-2894-215', '3768122129', '+79956150106', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(19, 1, 'Кольцов', 'Дмитрий', 'Ярославович', '3669-2353-4804', '3274691418', '+79188583752', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(20, 1, 'Степанова', 'Елена', 'Васильевна', '4865-8017-7877', '043950276', '+79846360566', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(21, 1, 'Голованова', 'Виктория', 'Григорьевна', '4408-7164-834', '1041834456', '+79619486696', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(22, 1, 'Тимофеева', 'Анастасия', 'Ярославовна', '5738-4320-9632', '713663154', '+79461887671', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(23, 1, 'Шубина', 'Алиса', 'Фёдоровна', '5539-7021-5338', '6284918363', '+79115556970', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(24, 2, '', 'ООО \"Компани\"', '', '7028-5319-6143', '2998938739', '+79191546511', 1, '2019-12-31 22:00:00', '2019-12-31 22:00:00'),
(25, 1, 'sdf', 'sdf', 'sdf', '2261-8690-2664', 'sdf', 'sdf', 1, '2023-04-02 19:14:05', '2023-04-02 19:14:05'),
(26, 1, 'sdf', 'hfg', 'fgh', '7506-9057-1282', 'fgh', 'fgh', 1, '2023-04-04 14:38:19', '2023-04-04 14:38:19'),
(27, 1, '456', '456', '456', '5340-6768-5774', '456', '456', 1, '2023-04-04 14:38:45', '2023-04-04 14:38:45'),
(28, 1, '345', '345', '345', '6832-8373-9807', '345', '345', 1, '2023-04-04 14:39:46', '2023-04-04 14:39:46'),
(29, 1, 'hjk', 'hjk', 'hjk', '9779-4890-3974', 'hjk', 'hjk', 1, '2023-04-04 14:40:06', '2023-04-04 14:40:06'),
(30, 1, 'xcv', 'xcv', 'xcv', '3198-1324-3225', 'xcv', 'xcv', 1, '2023-04-04 14:40:41', '2023-04-04 14:40:41'),
(32, 1, 'fsdf', 'wer', 'wer', '9233-1072-8276', '345sdf', 'fg', 1, '2023-04-04 14:41:53', '2023-04-04 14:41:53'),
(33, 1, '67 ui6n7b4', 'v5b6y', 'vc42v42cy', 'undefined--1955-4284-9835', 'uvb536735vub', '536uvb', 1, '2023-04-04 15:27:42', '2023-04-04 15:27:42'),
(34, 1, '4 5yb', '34b5 y', '345v yb', '34--2066-9299-5341', '34v5 y3 b', '54y34y5', 1, '2023-04-04 15:28:43', '2023-04-04 15:28:43'),
(35, 2, 'вап', 'j4567j', 'j467j', '35--9194-1251-7706', '3j3675j', '367j', 1, '2023-04-04 15:38:25', '2023-04-04 15:38:25'),
(36, 1, 'TEST', 'укеуке', 'укеуке', '36--3472-6960-8652', 'фукефу45634', '34534', 1, '2023-04-04 16:16:30', '2023-04-04 16:16:30');

-- --------------------------------------------------------

--
-- Структура таблицы `owner_types`
--

CREATE TABLE `owner_types` (
  `owner_type_id` int(11) NOT NULL,
  `shortcode` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `owner_types`
--

INSERT INTO `owner_types` (`owner_type_id`, `shortcode`, `description`) VALUES
(1, 'private', 'физ. лицо'),
(2, 'legal', 'юр. лицо');

-- --------------------------------------------------------

--
-- Структура таблицы `units`
--

CREATE TABLE `units` (
  `unit_id` int(11) NOT NULL,
  `number` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_id` int(11) NOT NULL,
  `area` float(10,2) NOT NULL,
  `building` int(1) NOT NULL,
  `entrance` int(2) NOT NULL,
  `floor` int(2) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `units`
--

INSERT INTO `units` (`unit_id`, `number`, `type_id`, `area`, `building`, `entrance`, `floor`, `active`, `created`, `updated`) VALUES
(111, '1', 1, 44.19, 1, 1, 1, 1, '0000-00-00 00:00:00', '2023-03-29 13:03:59'),
(112, '2', 1, 65.12, 1, 1, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(113, '3', 1, 42.05, 1, 1, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(114, '4', 1, 44.18, 1, 1, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(115, '5', 1, 65.12, 1, 1, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(116, '6', 1, 42.05, 1, 1, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(117, '7', 1, 78.09, 1, 2, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(118, '8', 1, 62.30, 1, 2, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(119, '9', 1, 41.52, 1, 2, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(120, '10', 1, 78.09, 1, 2, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(121, '11', 1, 62.30, 1, 2, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(122, '12', 1, 41.52, 1, 2, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(123, '13', 1, 44.18, 2, 3, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(124, '14', 1, 65.12, 2, 3, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(125, '15', 1, 42.05, 2, 3, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(126, '16', 1, 44.18, 2, 3, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(127, '17', 1, 65.12, 2, 3, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(128, '18', 1, 42.05, 2, 3, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(129, '19', 1, 78.09, 2, 4, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(130, '20', 1, 62.30, 2, 4, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(131, '21', 1, 41.52, 2, 4, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(132, '22', 1, 78.09, 2, 4, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(133, '23', 1, 62.30, 2, 4, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(134, '24', 1, 41.52, 2, 4, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(135, 'K1', 2, 8.40, 1, 1, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(136, 'K2', 2, 7.60, 1, 1, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(137, 'K3', 2, 8.20, 1, 1, 3, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(138, 'K4', 2, 8.40, 2, 3, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(139, 'K5', 2, 7.60, 2, 3, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(140, 'K6', 2, 8.20, 2, 3, 3, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(141, 'K7', 2, 4.54, 1, 1, 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(142, 'K8', 2, 5.87, 1, 1, 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(143, 'K9', 2, 6.64, 1, 1, 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(144, 'K10', 2, 4.18, 2, 3, 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(145, 'K11', 2, 8.12, 2, 3, 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(146, 'K12', 2, 7.16, 2, 3, 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(147, '1', 2, 3.00, 1, 2, 3, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(148, '1', 2, 3.00, 1, 2, 3, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(149, '1', 2, 3.00, 1, 2, 3, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(150, '111', 2, 561112.00, 122, 114, 33, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(151, '1', 2, 3.00, 1, 2, 3, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(152, '1', 2, 3.00, 1, 2, 3, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(153, '1', 2, 3.00, 1, 2, 3, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(157, '10', 2, 562.00, 12, 11, 333, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(158, 'sdasd', 1, 12.00, 56, 56, 56, 0, '2023-03-26 13:40:04', '2023-03-26 13:40:04');

-- --------------------------------------------------------

--
-- Структура таблицы `unit_types`
--

CREATE TABLE `unit_types` (
  `unit_type_id` int(11) NOT NULL,
  `shortcode` varchar(4) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `unit_types`
--

INSERT INTO `unit_types` (`unit_type_id`, `shortcode`, `description`) VALUES
(1, 'lu', 'жилое'),
(2, 'nlu', 'нежилое');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`document_id`),
  ADD KEY `owner_id` (`owner_id`),
  ADD KEY `unit_id` (`unit_id`);

--
-- Индексы таблицы `owners`
--
ALTER TABLE `owners`
  ADD PRIMARY KEY (`owner_id`),
  ADD UNIQUE KEY `passport` (`passport`),
  ADD KEY `type_id` (`type_id`);

--
-- Индексы таблицы `owner_types`
--
ALTER TABLE `owner_types`
  ADD PRIMARY KEY (`owner_type_id`);

--
-- Индексы таблицы `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`unit_id`),
  ADD KEY `type_id` (`type_id`);

--
-- Индексы таблицы `unit_types`
--
ALTER TABLE `unit_types`
  ADD PRIMARY KEY (`unit_type_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `documents`
--
ALTER TABLE `documents`
  MODIFY `document_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT для таблицы `owners`
--
ALTER TABLE `owners`
  MODIFY `owner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT для таблицы `owner_types`
--
ALTER TABLE `owner_types`
  MODIFY `owner_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `units`
--
ALTER TABLE `units`
  MODIFY `unit_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=159;

--
-- AUTO_INCREMENT для таблицы `unit_types`
--
ALTER TABLE `unit_types`
  MODIFY `unit_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `documents`
--
ALTER TABLE `documents`
  ADD CONSTRAINT `documents_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `owners` (`owner_id`),
  ADD CONSTRAINT `documents_ibfk_2` FOREIGN KEY (`unit_id`) REFERENCES `units` (`unit_id`);

--
-- Ограничения внешнего ключа таблицы `owners`
--
ALTER TABLE `owners`
  ADD CONSTRAINT `owners_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `owner_types` (`owner_type_id`);

--
-- Ограничения внешнего ключа таблицы `units`
--
ALTER TABLE `units`
  ADD CONSTRAINT `units_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `unit_types` (`unit_type_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
