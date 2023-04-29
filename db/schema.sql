CREATE DATABASE money_app;

CREATE TABLE entry (
    id SERIAL PRIMARY KEY,
    amount NUMERIC NOT NULL,
    category TEXT NOT NULL,
    type TEXT NOT NULL,
    month TEXT NOT NULL,
    year TEXT NOT NULL
);

