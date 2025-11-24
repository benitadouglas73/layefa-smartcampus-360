const { pool } = require('../config/db');

const createClassesTable = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS classes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name VARCHAR(255) NOT NULL,
                capacity INTEGER NOT NULL DEFAULT 30,
                teacher_id INTEGER,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (teacher_id) REFERENCES users(id)
            )
        `);
        console.log('✅ Classes table created successfully');
    } catch (error) {
        console.error('❌ Error creating classes table:', error);
    }
};

createClassesTable();
