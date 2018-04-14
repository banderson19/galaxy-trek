CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    auth_id VARCHAR
);
-- auth_id will be email

CREATE TABLE spaceships (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    cost INTEGER
);

CREATE TABLE destinations (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    type VARCHAR,
    img TEXT,
    margin_left INTEGER,
    margin_top INTEGER, 
    desc TEXT,
    inhabitable VARCHAR,
    distance_to INTEGER,
    radius INTEGER
);

CREATE TABLE missions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users,
    spaceship_id INTEGER REFERENCES spaceships,
    destination_id INTEGER REFERENCES destinations,
    mission_report text
);