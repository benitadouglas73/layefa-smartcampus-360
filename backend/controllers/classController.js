const { supabase } = require('../config/db');

// @desc    Get all classes
// @route   GET /api/classes
// @access  Private
const getClasses = async (req, res) => {
    try {
        // We want to fetch classes and join with users to get teacher name
        // Supabase syntax: select('*, teacher:users!teacher_id(name)')
        // This requires a foreign key relationship to be detected.
        // If not detected, we might need to fetch users separately or use a view.
        // Assuming the schema.sql is run, FK exists.

        const { data: classes, error } = await supabase
            .from('classes')
            .select(`
                *,
                teacher:users!teacher_id (name)
            `)
            .order('created_at', { ascending: false });

        if (error) throw error;

        // Transform data to match previous format (flatten teacher name)
        const formattedClasses = classes.map(cls => ({
            ...cls,
            teacher_name: cls.teacher ? cls.teacher.name : null,
            // Mock student count for now as per original code
            student_count: 0
        }));

        res.status(200).json(formattedClasses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
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
        const { data, error } = await supabase
            .from('classes')
            .insert([
                { name, capacity: capacity || 30, teacher_id: teacher_id || null }
            ])
            .select();

        if (error) throw error;

        res.status(201).json(data[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Delete a class
// @route   DELETE /api/classes/:id
// @access  Private/Admin
const deleteClass = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('classes')
            .delete()
            .eq('id', req.params.id)
            .select();

        if (error) throw error;

        if (data.length === 0) {
            return res.status(404).json({ message: 'Class not found' });
        }

        res.status(200).json({ id: req.params.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    getClasses,
    createClass,
    deleteClass
};
