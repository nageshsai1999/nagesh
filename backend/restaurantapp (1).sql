-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 09, 2022 at 10:00 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurantapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `menudetails`
--

CREATE TABLE `menudetails` (
  `md_id` int(11) NOT NULL,
  `md_name` text,
  `md_category` text,
  `md_price` float DEFAULT NULL,
  `md_rating` int(11) DEFAULT NULL,
  `md_cooktime` int(11) DEFAULT NULL,
  `md_tag` text,
  `md_wishlist` tinyint(1) NOT NULL DEFAULT '0',
  `md_imgurl` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menudetails`
--

INSERT INTO `menudetails` (`md_id`, `md_name`, `md_category`, `md_price`, `md_rating`, `md_cooktime`, `md_tag`, `md_wishlist`, `md_imgurl`) VALUES
(1, 'Pizza', 'fast food', 99, 3, 10, 'fast food, pizza', 1, 'https://images.unsplash.com/photo-1585238342024-78d387f4a707'),
(2, 'Sandwich', 'fast food', 120, 4, 15, 'sandwich, fast food', 0, 'https://images.unsplash.com/photo-1592415499556-74fcb9f18667'),
(3, 'Burger', 'fast food', 129, 4, 9, 'fast food, burger', 0, 'https://images.unsplash.com/photo-1512152272829-e3139592d56f'),
(4, 'Noodles', 'chinese', 149, 4, 12, 'noodles, Chinese, fast food', 0, 'https://images.unsplash.com/photo-1605311525808-ea0daef137b7');

-- --------------------------------------------------------

--
-- Table structure for table `userdetails`
--

CREATE TABLE `userdetails` (
  `ud_username` varchar(20) DEFAULT NULL,
  `ud_email` varchar(50) DEFAULT NULL,
  `ud_password` varchar(20) DEFAULT NULL,
  `ud_contactno` text,
  `ud_created_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ud_updated_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ud_id` int(11) NOT NULL,
  `ud_md_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userdetails`
--

INSERT INTO `userdetails` (`ud_username`, `ud_email`, `ud_password`, `ud_contactno`, `ud_created_stamp`, `ud_updated_stamp`, `ud_id`, `ud_md_id`) VALUES
('mohit', 'mk@gmail.com', '12345678', '98776568', '2022-05-09 18:41:49', '2022-05-09 17:52:26', 12, NULL),
('chintan', 'chintan@gmail.com', '12345678', '98776568', '2022-05-09 21:43:08', '2022-05-09 18:35:52', 18, NULL),
('chintan97', 'chintan97@gmail.com', '12345678', '8972470470', '2022-05-09 21:52:04', '2022-05-09 21:52:04', 23, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menudetails`
--
ALTER TABLE `menudetails`
  ADD PRIMARY KEY (`md_id`);

--
-- Indexes for table `userdetails`
--
ALTER TABLE `userdetails`
  ADD PRIMARY KEY (`ud_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menudetails`
--
ALTER TABLE `menudetails`
  MODIFY `md_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `userdetails`
--
ALTER TABLE `userdetails`
  MODIFY `ud_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
