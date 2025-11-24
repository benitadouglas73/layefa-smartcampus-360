const { pool } = require('../config/db');

const createTeachersTable = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS teachers (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                subject_specialization VARCHAR(255),
                qualification VARCHAR(255),
                phone_number VARCHAR(20),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            )
        `);
        console.log('✅ Teachers table created successfully');
    } catch (error) {
        console.error('❌ Error creating teachers table:', error);
    }
};

createTeachersTable();
