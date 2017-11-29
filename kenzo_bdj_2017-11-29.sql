# ************************************************************
# Sequel Pro SQL dump
# Version 4529
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.20-0ubuntu0.16.04.1)
# Database: kenzo_bdj
# Generation Time: 2017-11-29 07:42:59 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table gift_info
# ------------------------------------------------------------

DROP TABLE IF EXISTS `gift_info`;

CREATE TABLE `gift_info` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `refer` varchar(255) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `gift_info` WRITE;
/*!40000 ALTER TABLE `gift_info` DISABLE KEYS */;

INSERT INTO `gift_info` (`id`, `name`, `phone`, `province`, `city`, `area`, `address`, `type`, `refer`, `created`)
VALUES
	(1,'evenly','13112345678','安徽','合肥','城中区','打双打dasds 啊','gift1',NULL,'2017-11-28 10:29:04'),
	(2,'evenly','13112345678','安徽','合肥','城中区','dsafsadfsd','gift2','from_wechat','2017-11-29 07:22:27');

/*!40000 ALTER TABLE `gift_info` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table gift_list
# ------------------------------------------------------------

DROP TABLE IF EXISTS `gift_list`;

CREATE TABLE `gift_list` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `num` varchar(255) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `gift_list` WRITE;
/*!40000 ALTER TABLE `gift_list` DISABLE KEYS */;

INSERT INTO `gift_list` (`id`, `name`, `num`, `created`)
VALUES
	(1,'gift1','10000','2017-11-27 10:23:29'),
	(2,'gift2','10000','2017-11-27 10:23:29'),
	(3,'gift1','10010','2017-11-27 10:32:52');

/*!40000 ALTER TABLE `gift_list` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table info
# ------------------------------------------------------------

DROP TABLE IF EXISTS `info`;

CREATE TABLE `info` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `cellphone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT '',
  `status` int(11) DEFAULT '0',
  `created` int(11) DEFAULT NULL,
  `updated` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `uid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `openid` varchar(255) DEFAULT '',
  `nickname` blob,
  `sex` varchar(255) DEFAULT '',
  `city` varchar(255) DEFAULT '',
  `province` varchar(255) DEFAULT '',
  `headimgurl` varchar(255) DEFAULT '',
  `country` varchar(255) DEFAULT '',
  `unionid` varchar(255) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `updated` datetime DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `openid` (`openid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
