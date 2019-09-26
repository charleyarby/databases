CREATE DATABASE chat;

USE chat;
CREATE TABLE users (
  userID INT,
  userName TEXT,
  PRIMARY KEY (userID)
);

CREATE TABLE lobbies (
  lobbyID INT,
  lobbyName TEXT,
  PRIMARY KEY (lobbyID)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  messageID INT,
  userMessage TEXT,
  lobbyID INT,
  userID INT,
  PRIMARY KEY (messageID),
  FOREIGN KEY (lobbyID)
    REFERENCES lobbies (lobbyID),
  FOREIGN KEY (userID)
    REFERENCES users (userID)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

