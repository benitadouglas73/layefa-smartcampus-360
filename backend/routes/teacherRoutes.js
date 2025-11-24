const express = require('express');
const router = express.Router();
const { registerTeacher, getTeachers } = require('../controllers/teacherController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
    .get(protect, authorize('admin'), getTeachers)
    .post(protect, authorize('admin'), registerTeacher);

module.exports = router;
