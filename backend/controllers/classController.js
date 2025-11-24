const { pool } = require('../config/db');

// @desc    Get all classes
// @route   GET /api/classes
// @access  Private
const getClasses = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT c.*, u.name as teacher_name, 
            (SELECT COUNT(*) FROM users WHERE role = 'student') as student_count 
            FROM classes c 
            LEFT JOIN users u ON c.teacher_id = u.id
            ORDER BY c.created_at DESC
        `);
        // Note: student_count is mocked for now as we don't have a class_students table yet
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Create a new class
// @route   POST /api/classes
// @access  Private/Admin
const createClass = async (req, res) => {
    const { name, capacity, teacher_id } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Please add a class name' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO classes (name, capacity, teacher_id) VALUES ($1, $2, $3) RETURNING *',
            [name, capacity || 30, teacher_id || null]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Delete a class
// @route   DELETE /api/classes/:id
// @access  Private/Admin
const deleteClass = async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM classes WHERE id = $1 RETURNING *', [req.params.id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Class not found' });
        }

        res.status(200).json({ id: req.params.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getClasses,
    createClass,
    deleteClass
};
