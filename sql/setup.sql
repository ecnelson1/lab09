DROP TABLE IF EXISTS warriors;
CREATE TABLE warriors(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    title TEXT NOT NULL,
    style TEXT NOT NULL,
    weapons TEXT NOT NULL
);

INSERT INTO warriors (title, style, weapons) VALUES ('Samurai', 'Sword Fighter', 'Samurai Sword')
