-- Active: 1720917204746@@127.0.0.1@5432@messaging
-- Date: 2021-11-14 17:32:00
CREATE TABLE users (
    id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    profile_image VARCHAR(255),
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE messages (
    id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    sender_id int NOT NULL,
    receiver_id int NOT NULL,
    message_text VARCHAR(255),
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (receiver_id) REFERENCES users(id)
);