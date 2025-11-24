const { pool } = require('../config/db');
const bcrypt = require('bcrypt');

// @desc    Register a new teacher
// @route   POST /api/teachers
// @access  Private/Admin
const registerTeacher = async (req, res) => {
    const { name, email, password, subject_specialization, qualification, phone_number } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    try {
        // Check if user exists
        const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userExists.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Start transaction
        await pool.query('BEGIN');

        // Create User
        const userResult = await pool.query(
            'INSERT INTO users (name, email, password_hash, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role',
            [name, email, hashedPassword, 'teacher']
        );
        const user = userResult.rows[0];

        // Create Teacher Profile
        await pool.query(
            'INSERT INTO teachers (user_id, subject_specialization, qualification, phone_number) VALUES ($1, $2, $3, $4)',
            [user.id, subject_specialization, qualification, phone_number]
        );

        await pool.query('COMMIT');

        res.status(201).json({
            ...user,
            subject_specialization,
            qualification
        });
    } catch (error) {
        await pool.query('ROLLBACK');
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get all teachers
// @route   GET /api/teachers
// @access  Private/Admin
const getTeachers = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT u.id, u.name, u.email, t.subject_specialization, t.qualification, t.phone_number
            FROM users u
            JOIN teachers t ON u.id = t.user_id
            WHERE u.role = 'teacher'
            ORDER BY u.created_at DESC
        `);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    registerTeacher,
    getTeachers
};
