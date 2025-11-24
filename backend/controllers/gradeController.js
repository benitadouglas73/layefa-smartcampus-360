const { pool } = require('../config/db');

// @desc    Record grades for a student (or bulk for class - implemented as single for now)
// @route   POST /api/grades
// @access  Private/Teacher/Admin
const recordGrade = async (req, res) => {
    const { student_id, class_id, subject, assessment_type, score, max_score, term, remarks } = req.body;

    if (!student_id || !class_id || !subject || !assessment_type || score === undefined || !max_score || !term) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO grades (student_id, class_id, subject, assessment_type, score, max_score, term, remarks) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [student_id, class_id, subject, assessment_type, score, max_score, term, remarks || '']
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get grades for a student
// @route   GET /api/grades/student/:studentId
// @access  Private/Student/Parent/Teacher/Admin
const getStudentGrades = async (req, res) => {
    const { studentId } = req.params;

    try {
        const result = await pool.query(
            'SELECT * FROM grades WHERE student_id = $1 ORDER BY created_at DESC',
            [studentId]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get grades for a class (optional filter by subject/term)
// @route   GET /api/grades/class/:classId
// @access  Private/Teacher/Admin
const getClassGrades = async (req, res) => {
    const { classId } = req.params;
    const { subject, term } = req.query;

    let query = `
        SELECT g.*, s.name as student_name, s.admission_number 
        FROM grades g
        JOIN student_profiles sp ON g.student_id = sp.id
        JOIN users s ON sp.user_id = s.id
        WHERE g.class_id = $1
    `;
    const params = [classId];

    if (subject) {
        query += ` AND g.subject = $${params.length + 1}`;
        params.push(subject);
    }
    if (term) {
        query += ` AND g.term = $${params.length + 1}`;
        params.push(term);
    }

    query += ' ORDER BY s.name ASC';

    try {
        const result = await pool.query(query, params);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    recordGrade,
    getStudentGrades,
    getClassGrades
};
