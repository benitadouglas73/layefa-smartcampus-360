const { supabase } = require('../config/db');
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
                { name, email, password_hash: hashedPassword, role: 'student' }
            ])
            .select();

        if (userError) throw userError;
        const user = newUsers[0];

        // Create Student Profile
        const { error: profileError } = await supabase
            .from('student_profiles')
            .insert([
                { user_id: user.id, class_id, admission_number, parent_phone }
            ]);

        if (profileError) {
            // Cleanup: delete user if profile creation fails
            await supabase.from('users').delete().eq('id', user.id);
            throw profileError;
        }

        res.status(201).json({
            ...user,
            class_id,
            admission_number
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Get all students
// @route   GET /api/students
// @access  Private/Admin
const getStudents = async (req, res) => {
    try {
        // Fetch students with their profiles and class info
        // We need to join users -> student_profiles -> classes
        // Supabase syntax for nested joins:
        // select('*, student_profiles(*, classes(name, id))')

        const { data: students, error } = await supabase
            .from('users')
            .select(`
                id, name, email, created_at,
                student_profiles (
                    admission_number,
                    parent_phone,
                    classes (
                        id,
                        name
                    )
                )
            `)
            .eq('role', 'student')
            .order('created_at', { ascending: false });

        if (error) throw error;

        // Transform data to match previous format
        const formattedStudents = students.map(student => {
            const profile = student.student_profiles ? student.student_profiles[0] : {};
            // Note: student_profiles is an array because it's a one-to-many from users perspective (technically),
            // but effectively one-to-one. Supabase returns array unless .single() is used on the join, which isn't supported in select string easily.
            // Actually, if it's one-to-one, it might be an object if defined as such, but usually array.
            // Let's assume array and take first item.

            // Wait, if it's an array, we need to handle it.
            // If the relationship is one-to-one, we can try to force it, but array is safer.
            // Actually, `student_profiles` has `user_id` unique? If not, it's one-to-many.
            // My schema didn't say unique on user_id in student_profiles, so it's one-to-many.
            // So it will be an array.

            const prof = Array.isArray(student.student_profiles) ? student.student_profiles[0] : student.student_profiles;
            const cls = prof && prof.classes ? prof.classes : {};

            return {
                id: student.id,
                name: student.name,
                email: student.email,
                admission_number: prof ? prof.admission_number : null,
                parent_phone: prof ? prof.parent_phone : null,
                class_name: cls ? cls.name : null,
                class_id: cls ? cls.id : null
            };
        });

        res.status(200).json(formattedStudents);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    registerStudent,
    getStudents
};
