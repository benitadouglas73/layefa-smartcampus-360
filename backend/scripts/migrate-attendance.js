const { pool } = require('../config/db');

const createAttendanceTable = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS attendance (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                student_id INTEGER NOT NULL,
                class_id INTEGER NOT NULL,
                date DATE NOT NULL,
                status VARCHAR(20) CHECK(status IN ('present', 'absent', 'late', 'excused')) NOT NULL,
                remarks TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (student_id) REFERENCES student_profiles(id) ON DELETE CASCADE,
                FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE CASCADE,
                UNIQUE(student_id, date)
            )
        `);
        console.log('✅ Attendance table created successfully');
    } catch (error) {
        console.error('❌ Error creating attendance table:', error);
    }
};

createAttendanceTable();
