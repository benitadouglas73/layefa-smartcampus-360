const { pool } = require('./config/db');

async function testConnection() {
    try {
        console.log('Testing SQLite connection...');
        const res = await pool.query('SELECT 1 + 1 AS result');
        console.log('✅ Database connection successful! Result:', res.rows);
    } catch (err) {
        console.error('❌ Database connection failed:', err);
        process.exit(1);
    }
}

testConnection();
