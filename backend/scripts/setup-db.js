const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, '../database/smartcampus.sqlite');

const init = async () => {
    console.log('📦 Initializing SQLite Database (better-sqlite3)...');

    // Ensure database directory exists
    const dbDir = path.dirname(dbPath);
    if (!fs.existsSync(dbDir)) {
        fs.mkdirSync(dbDir, { recursive: true });
        console.log('📂 Created database directory');
    }

    try {
        const db = new Database(dbPath, { verbose: console.log });
        console.log('✅ Connected to SQLite database');

        const schemaPath = path.join(__dirname, '../database/schema.sql');
        const schemaSql = fs.readFileSync(schemaPath, 'utf8');

        db.exec(schemaSql);
        console.log('✅ Schema migrations executed successfully.');
        db.close();
    } catch (err) {
        console.error('❌ Error initializing database:', err.message);
        process.exit(1);
    }
};

init();
