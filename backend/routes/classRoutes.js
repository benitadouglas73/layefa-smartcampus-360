const express = require('express');
const router = express.Router();
const { getClasses, createClass, deleteClass } = require('../controllers/classController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
    .get(protect, getClasses)
    .post(protect, authorize('admin'), createClass);

router.route('/:id')
    .delete(protect, authorize('admin'), deleteClass);

module.exports = router;
