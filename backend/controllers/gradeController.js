const { supabase } = require('../config/db');

// @desc    Record grades for a student (or bulk for class - implemented as single for now)
// @route   POST /api/grades
// @access  Private/Teacher/Admin
const recordGrade = async (req, res) => {
    const { student_id, class_id, subject, assessment_type, score, max_score, term, remarks } = req.body;

    if (!student_id || !class_id || !subject || !assessment_type || score === undefined || !max_score || !term) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    try {
        const { data, error } = await supabase
            .from('grades')
            .insert([
                { student_id, class_id, subject, assessment_type, score, max_score, term, remarks: remarks || '' }
            ])
            .select();

        if (error) throw error;

        res.status(201).json(data[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Get grades for a student
// @route   GET /api/grades/student/:studentId
// @access  Private/Student/Parent/Teacher/Admin
const getStudentGrades = async (req, res) => {
    const { studentId } = req.params;

    try {
        const { data, error } = await supabase
            .from('grades')
            .select('*')
            .eq('student_id', studentId)
            .order('created_at', { ascending: false });

        if (error) throw error;

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Get grades for a class (optional filter by subject/term)
// @route   GET /api/grades/class/:classId
// @access  Private/Teacher/Admin
const getClassGrades = async (req, res) => {
    const { classId } = req.params;
    const { subject, term } = req.query;

    try {
        let query = supabase
            .from('grades')
            .select(`
                *,
                student_profiles (
                    admission_number,
                    users (
                        name
                    )
                )
            `)
            .eq('class_id', classId);

        if (subject) {
            query = query.eq('subject', subject);
        }
        if (term) {
            query = query.eq('term', term);
        }

        // Order by student name requires sorting on joined table which is tricky in Supabase simple select.
        // We can order by grade created_at or just sort in JS.
        // Sorting by joined column is supported in newer Supabase versions but syntax is specific.
        // For simplicity, we'll sort in JS or just order by created_at.
        // Let's order by created_at for now.
        query = query.order('created_at', { ascending: false });

        const { data: grades, error } = await query;

        if (error) throw error;

        // Transform data
        const formattedGrades = grades.map(grade => {
            const profile = Array.isArray(grade.student_profiles) ? grade.student_profiles[0] : grade.student_profiles;
            const user = profile && profile.users ? (Array.isArray(profile.users) ? profile.users[0] : profile.users) : {};

            return {
                ...grade,
                student_name: user ? user.name : null,
                admission_number: profile ? profile.admission_number : null
            };
        });

        // Sort by student name if needed
        formattedGrades.sort((a, b) => (a.student_name || '').localeCompare(b.student_name || ''));

        res.status(200).json(formattedGrades);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    recordGrade,
    getStudentGrades,
    getClassGrades
};
