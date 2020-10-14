CREATE TABLE users (
	user_id serial PRIMARY KEY,
	email VARCHAR ( 255 ) UNIQUE NOT NULL
);