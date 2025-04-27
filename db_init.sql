CREATE TABLE IF NOT EXISTS videos (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    filename TEXT NOT NULL,
    url TEXT,
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
