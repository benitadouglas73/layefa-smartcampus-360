const { pool } = require('../config/db');

const createStudentProfilesTable = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS student_profiles (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                class_id INTEGER,
                admission_number VARCHAR(50) UNIQUE,
                parent_phone VARCHAR(20),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
                FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE SET NULL
            )
        `);
        console.log('✅ Student Profiles table created successfully');
    } catch (error) {
        console.error('❌ Error creating student_profiles table:', error);
    }
};

createStudentProfilesTable();
