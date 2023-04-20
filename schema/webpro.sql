DROP DATABASE IF EXISTS Webpro;

CREATE DATABASE IF NOT EXISTS `Webpro` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

USE `Webpro`;

CREATE TABLE IF NOT EXISTS Ad_Info(
    Ad_id int NOT NULL AUTO_INCREMENT,
    Ad_Username Varchar(100) NOT NULL,
    Ad_Fullname Varchar(100) NOT NULL,
    Ad_Email Varchar(100) NOT NULL,
    Ad_Password Varchar(100) NOT NULL,
    Ad_Role Varchar(45),
    PRIMARY KEY (Ad_id)
);

CREATE TABLE IF NOT EXISTS Co_info(
    Co_id int NOT NULL AUTO_INCREMENT,
    Co_Name VARCHAR(100) NOT NULL,
    Co_Desc VARCHAR(100) NOT NULL,
    Co_Contact VARCHAR(100) NOT NULL,
    Co_Rating int NOT NULL,
    Co_Seat int NOT NULL,
    Co_Range VARCHAR(100) NOT NULL,
    Co_Locate VARCHAR(100) NOT NULL,
    Co_Pic BLOB NOT NULL,
    PRIMARY KEY (Co_id)
);

CREATE TABLE IF NOT EXISTS Cus_Info(
    Cus_id int NOT NULL AUTO_INCREMENT,
    Cus_Username VARCHAR(100) NOT NULL,
    Cus_Password VARCHAR(100) NOT NULL,
    Cus_Fullname VARCHAR(100) NOT NULL,
    Cus_Bdate date NOT NULL,
    Cus_Email VARCHAR(100) NOT NULL,
    Cus_pic blob NOT NULL,
    PRIMARY KEY (Cus_id, Cus_Username)
);

CREATE TABLE IF NOT EXISTS Log_info (
    Log_id int NOT NULL AUTO_INCREMENT,
    Ad_id int AUTO_INCREMENT,
    Log_time datetime,
    PRIMARY KEY (Log_ID),
    FOREIGN KEY (Ad_id) REFERENCES Ad_Info(Ad_id)
);