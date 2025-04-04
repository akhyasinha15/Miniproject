CREATE DATABASE appointments_db;

USE appointments_db;

CREATE TABLE appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    date DATE,
    time TIME,
    doctor VARCHAR(255)
);
