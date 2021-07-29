DROP TABLE IF EXISTS villagers;

CREATE TABLE villagers (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    vid INT NOT NULL,
    name TEXT NOT NULL,
    species TEXT NOT NULL,
    personality TEXT NOT NULL,
    gender TEXT NOT NULL,
    catchphrase TEXT NOT NULL
);