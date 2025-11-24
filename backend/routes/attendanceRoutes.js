const express = require('express');
const router = express.Router();
const { markAttendance, getClassAttendance, getStudentAttendance } = require('../controllers/attendanceController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.post('/', protect, authorize('teacher', 'admin'), markAttendance);
router.get('/class/:classId', protect, authorize('teacher', 'admin'), getClassAttendance);
router.get('/student/:studentId', protect, getStudentAttendance);

module.exports = router;
