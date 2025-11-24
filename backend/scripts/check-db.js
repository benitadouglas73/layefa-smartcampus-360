const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.resolve(__dirname, '../database/smartcampus.sqlite');

try {
    const db = new Database(dbPath, { verbose: console.log });
    const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
    console.log('Tables:', tables);
    db.close();
} catch (err) {
    console.error('Error:', err.message);
}
