const express = require('express');
const router = express.Router();
const { recordGrade, getStudentGrades, getClassGrades } = require('../controllers/gradeController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.post('/', protect, authorize('teacher', 'admin'), recordGrade);
router.get('/student/:studentId', protect, getStudentGrades);
router.get('/class/:classId', protect, authorize('teacher', 'admin'), getClassGrades);

module.exports = router;
