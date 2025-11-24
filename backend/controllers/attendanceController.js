const { pool } = require('../config/db');

// @desc    Mark attendance for a class (Bulk or Single)
// @route   POST /api/attendance
// @access  Private/Teacher/Admin
const markAttendance = async (req, res) => {
    const { class_id, date, attendanceData } = req.body; // attendanceData = [{ student_id, status, remarks }]

    if (!class_id || !date || !Array.isArray(attendanceData)) {
        return res.status(400).json({ message: 'Invalid data provided' });
    }

    try {
        await pool.query('BEGIN');

        for (const record of attendanceData) {
            const { student_id, status, remarks } = record;

            // Check if record exists for this student and date
            const existing = await pool.query(
                'SELECT id FROM attendance WHERE student_id = $1 AND date = $2',
                [student_id, date]
            );

            if (existing.rows.length > 0) {
                // Update
                await pool.query(
                    'UPDATE attendance SET status = $1, remarks = $2 WHERE id = $3',
                    [status, remarks || '', existing.rows[0].id]
                );
            } else {
                // Insert
                await pool.query(
                    'INSERT INTO attendance (student_id, class_id, date, status, remarks) VALUES ($1, $2, $3, $4, $5)',
                    [student_id, class_id, date, status, remarks || '']
                );
            }
        }

        await pool.query('COMMIT');
        res.status(200).json({ message: 'Attendance marked successfully' });
    } catch (error) {
        await pool.query('ROLLBACK');
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get attendance for a class on a specific date
// @route   GET /api/attendance/class/:classId
// @access  Private/Teacher/Admin
const getClassAttendance = async (req, res) => {
    const { classId } = req.params;
    const { date } = req.query;

    if (!date) {
        return res.status(400).json({ message: 'Date is required' });
    }

    try {
        const result = await pool.query(`
            SELECT a.*, s.name as student_name, s.admission_number
            FROM attendance a
            JOIN student_profiles sp ON a.student_id = sp.id
            JOIN users s ON sp.user_id = s.id
            WHERE a.class_id = $1 AND a.date = $2
        `, [classId, date]);

        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get attendance for a specific student
// @route   GET /api/attendance/student/:studentId
// @access  Private/Student/Parent/Admin
const getStudentAttendance = async (req, res) => {
    const { studentId } = req.params;

    try {
        const result = await pool.query(
            'SELECT * FROM attendance WHERE student_id = $1 ORDER BY date DESC',
            [studentId]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    markAttendance,
    getClassAttendance,
    getStudentAttendance
};
