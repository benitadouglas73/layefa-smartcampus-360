const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../database.sqlite');

const db = new sqlite3.Database(dbPath);

const schema = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL CHECK(role IN ('admin', 'teacher', 'student', 'parent')),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
`;

db.serialize(() => {
    db.run(schema, (err) => {
        if (err) {
            console.error('Error creating tables:', err.message);
        } else {
            console.log('✅ Users table created successfully.');
        }
    });
});

db.close();
