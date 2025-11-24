const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbPath = path.resolve(__dirname, '../database/smartcampus.sqlite');

// Create database directory if it doesn't exist
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

let db;
try {
    db = new Database(dbPath, { verbose: console.log });
    console.log('✅ SQLite Database Connected Successfully (better-sqlite3)');
} catch (err) {
    console.error('❌ SQLite Connection Failed:', err.message);
}

// Wrapper to mimic pg pool.query
const pool = {
    query: async (text, params = []) => {
        return new Promise((resolve, reject) => {
            try {
                // Convert Postgres $1, $2 syntax to SQLite ?
                let sql = text;

                // Simple regex to replace $1, $2, etc with ?
                // Note: This is a basic implementation. 
                sql = sql.replace(/\$\d+/g, '?');

                const stmt = db.prepare(sql);

                // Determine if it's a SELECT or modification query
                const isSelect = sql.trim().toUpperCase().startsWith('SELECT');

                if (isSelect) {
                    const rows = stmt.all(...params);
                    resolve({ rows, rowCount: rows.length });
                } else {
                    const info = stmt.run(...params);
                    // info contains: changes, lastInsertRowid
                    resolve({
                        rows: info.lastInsertRowid ? [{ id: info.lastInsertRowid }] : [],
                        rowCount: info.changes,
                        rowsAffected: info.changes
                    });
                }
            } catch (err) {
                reject(err);
            }
        });
    }
};

const connectDB = async () => {
    try {
        // Test query
        await pool.query('SELECT 1');
    } catch (err) {
        console.error('❌ SQLite Test Query Failed:', err.message);
    }
};

module.exports = { pool, connectDB };
