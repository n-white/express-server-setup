CREATE DATABASE namesAndPlaces;

USE namesAndPlaces;

CREATE TABLE names (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(20)  NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE places (
  id int NOT NULL AUTO_INCREMENT,
  place varchar(20)  NOT NULL,
  PRIMARY KEY (ID)
);