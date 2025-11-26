const { supabase } = require('../config/db');

// @desc    Mark attendance for a class (Bulk or Single)
// @route   POST /api/attendance
// @access  Private/Teacher/Admin
const markAttendance = async (req, res) => {
    const { class_id, date, attendanceData } = req.body; // attendanceData = [{ student_id, status, remarks }]

    if (!class_id || !date || !Array.isArray(attendanceData)) {
        return res.status(400).json({ message: 'Invalid data provided' });
    }

    try {
        // Prepare data for upsert
        const upsertData = attendanceData.map(record => ({
            student_id: record.student_id,
            class_id,
            date,
            status: record.status,
            remarks: record.remarks || ''
        }));

        // Use upsert with onConflict on (student_id, date, class_id)
        // Note: The unique constraint must exist in the database for this to work correctly as an upsert.
        const { error } = await supabase
            .from('attendance')
            .upsert(upsertData, { onConflict: 'student_id, date, class_id' });

        if (error) throw error;

        res.status(200).json({ message: 'Attendance marked successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
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
        // Join attendance -> student_profiles -> users
        const { data: attendance, error } = await supabase
            .from('attendance')
            .select(`
                *,
                student_profiles (
                    admission_number,
                    users (
                        name
                    )
                )
            `)
            .eq('class_id', classId)
            .eq('date', date);

        if (error) throw error;

        // Transform data
        const formattedAttendance = attendance.map(record => {
            const profile = Array.isArray(record.student_profiles) ? record.student_profiles[0] : record.student_profiles;
            const user = profile && profile.users ? (Array.isArray(profile.users) ? profile.users[0] : profile.users) : {};

            return {
                ...record,
                student_name: user ? user.name : null,
                admission_number: profile ? profile.admission_number : null
            };
        });

        res.status(200).json(formattedAttendance);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Get attendance for a specific student
// @route   GET /api/attendance/student/:studentId
// @access  Private/Student/Parent/Admin
const getStudentAttendance = async (req, res) => {
    const { studentId } = req.params;

    try {
        const { data, error } = await supabase
            .from('attendance')
            .select('*')
            .eq('student_id', studentId)
            .order('date', { ascending: false });

        if (error) throw error;

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    markAttendance,
    getClassAttendance,
    getStudentAttendance
};
