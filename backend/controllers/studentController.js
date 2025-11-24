const { pool } = require('../config/db');
const bcrypt = require('bcrypt');

// @desc    Register a new student
// @route   POST /api/students
// @access  Private/Admin
const registerStudent = async (req, res) => {
    const { name, email, password, class_id, admission_number, parent_phone } = req.body;

    if (!name || !email || !password || !class_id) {
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
            [name, email, hashedPassword, 'student']
        );
        const user = userResult.rows[0];

        // Create Student Profile
        await pool.query(
            'INSERT INTO student_profiles (user_id, class_id, admission_number, parent_phone) VALUES ($1, $2, $3, $4)',
            [user.id, class_id, admission_number, parent_phone]
        );

        await pool.query('COMMIT');

        res.status(201).json({
            ...user,
            class_id,
            admission_number
        });
    } catch (error) {
        await pool.query('ROLLBACK');
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get all students
// @route   GET /api/students
// @access  Private/Admin
const getStudents = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT u.id, u.name, u.email, sp.admission_number, sp.parent_phone, c.name as class_name, c.id as class_id
            FROM users u
            JOIN student_profiles sp ON u.id = sp.user_id
            LEFT JOIN classes c ON sp.class_id = c.id
            WHERE u.role = 'student'
            ORDER BY u.created_at DESC
        `);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    registerStudent,
    getStudents
};
