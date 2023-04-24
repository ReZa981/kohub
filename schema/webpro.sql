DROP DATABASE IF EXISTS Kohub;

CREATE DATABASE IF NOT EXISTS `Kohub` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

USE `Kohub`;

CREATE TABLE IF NOT EXISTS `users` (
    userId int NOT NULL AUTO_INCREMENT,
    userName Varchar(100) NOT NULL,
    fullName Varchar(100) NOT NULL,
    email Varchar(100) NOT NULL,
    password Varchar(100) NOT NULL,
    role Varchar(45) DEFAULT 'user',
    PRIMARY KEY (userId)
);

CREATE TABLE IF NOT EXISTS `coworking` (
    placeId int NOT NULL AUTO_INCREMENT,
    placeName VARCHAR(100) NOT NULL,
    descr VARCHAR(100) NOT NULL,
    contact VARCHAR(100) NOT NULL,
    rating int NOT NULL,
    seat int NOT NULL,
    priceRange VARCHAR(100) NOT NULL,
    locate VARCHAR(100) NOT NULL,
    image VARCHAR(199) NOT NULL,
    PRIMARY KEY (placeId)
);

CREATE TABLE IF NOT EXISTS Log_info (
    Log_id int NOT NULL AUTO_INCREMENT,
    userId int,
    Log_time datetime,
    PRIMARY KEY (Log_id),
    FOREIGN KEY (userId) REFERENCES users(userId)
);