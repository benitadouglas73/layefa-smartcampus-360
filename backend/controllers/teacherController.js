const { supabase } = require('../config/db');
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
        const { data: existingUsers, error: checkError } = await supabase
            .from('users')
            .select('*')
            .eq('email', email);

        if (checkError) throw checkError;

        if (existingUsers.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create User
        const { data: newUsers, error: userError } = await supabase
            .from('users')
            .insert([
                { name, email, password_hash: hashedPassword, role: 'teacher' }
            ])
            .select();

        if (userError) throw userError;
        const user = newUsers[0];

        // Create Teacher Profile
        const { error: profileError } = await supabase
            .from('teachers')
            .insert([
                { user_id: user.id, subject_specialization, qualification, phone_number }
            ]);

        if (profileError) {
            // Cleanup
            await supabase.from('users').delete().eq('id', user.id);
            throw profileError;
        }

        res.status(201).json({
            ...user,
            subject_specialization,
            qualification
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Get all teachers
// @route   GET /api/teachers
// @access  Private/Admin
const getTeachers = async (req, res) => {
    try {
        const { data: teachers, error } = await supabase
            .from('users')
            .select(`
                id, name, email, created_at,
                teachers (
                    subject_specialization,
                    qualification,
                    phone_number
                )
            `)
            .eq('role', 'teacher')
            .order('created_at', { ascending: false });

        if (error) throw error;

        // Transform data
        const formattedTeachers = teachers.map(teacher => {
            const profile = Array.isArray(teacher.teachers) ? teacher.teachers[0] : teacher.teachers;
            return {
                id: teacher.id,
                name: teacher.name,
                email: teacher.email,
                subject_specialization: profile ? profile.subject_specialization : null,
                qualification: profile ? profile.qualification : null,
                phone_number: profile ? profile.phone_number : null
            };
        });

        res.status(200).json(formattedTeachers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    registerTeacher,
    getTeachers
};
