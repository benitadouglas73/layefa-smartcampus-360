const { pool } = require('../config/db');

const createGradesTable = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS grades (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                student_id INTEGER NOT NULL,
                class_id INTEGER NOT NULL,
                subject VARCHAR(100) NOT NULL,
                assessment_type VARCHAR(50) NOT NULL,
                score REAL NOT NULL,
                max_score REAL NOT NULL,
                term VARCHAR(50) NOT NULL,
                remarks TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (student_id) REFERENCES student_profiles(id) ON DELETE CASCADE,
                FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE CASCADE
            )
        `);
        console.log('✅ Grades table created successfully');
    } catch (error) {
        console.error('❌ Error creating grades table:', error);
    }
};

createGradesTable();
