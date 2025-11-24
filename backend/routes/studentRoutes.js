const express = require('express');
const router = express.Router();
const { registerStudent, getStudents } = require('../controllers/studentController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
    .get(protect, authorize('admin'), getStudents)
    .post(protect, authorize('admin'), registerStudent);

module.exports = router;
