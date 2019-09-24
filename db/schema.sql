CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
id auto_increment NOT NULL,
burger_name VARCHAR(20) NOT NULL,
devoured BOOLEAN NOT NULL,
PRIMARY KEY (id)
);