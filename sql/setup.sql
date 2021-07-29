DROP TABLE IF EXISTS villagers;

CREATE TABLE villagers (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    species TEXT NOT NULL,
    personality TEXT NOT NULL,
    gender TEXT NOT NULL,
    catchphrase TEXT NOT NULL
);