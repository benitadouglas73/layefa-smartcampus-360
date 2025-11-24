const express = require('express');
const { register, login, getMe, logoutAll } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.post('/logout-all', protect, logoutAll);

module.exports = router;
