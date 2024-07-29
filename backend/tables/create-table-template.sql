-- Active: 1720917204746@@127.0.0.1@5432@messaging
-- Date: 2021-11-14 17:32:00
CREATE TABLE users (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    profile_image VARCHAR(255),
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_email_confirmed BOOLEAN DEFAULT FALSE
);

CREATE TABLE messages (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    sender_id VARCHAR(255) NOT NULL,
    receiver_id VARCHAR(255) NOT NULL,
    message_text VARCHAR(255),
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (receiver_id) REFERENCES users(id)
);
CREATE TABLE tokens (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    token_type VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    code INTEGER NOT NULL,
    expiration_date TIMESTAMP,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);