const jwt = require('jsonwebtoken');
const { supabase } = require('../config/db');

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];

            // console.log('Received Token:', token); // Debugging

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user from the token
            const { data: user, error } = await supabase
                .from('users')
                .select('*')
                .eq('id', decoded.id)
                .single();

            if (error || !user) {
                console.error('Auth Middleware Error:', error);
                return res.status(401).json({ message: 'Not authorized, user not found' });
            }

            req.user = user;

            // Check token version
            // Handle case where token_version might be null in DB but 0 in token
            const dbVersion = user.token_version || 0;
            const tokenVersion = decoded.tokenVersion || 0;

            if (tokenVersion !== dbVersion) {
                return res.status(401).json({ message: 'Not authorized, token expired' });
            }

            next();
        } catch (error) {
            console.error('JWT Verification Error:', error.message);
            res.status(401).json({ message: 'Not authorized', error: error.message });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

const authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: `User role ${req.user.role} is not authorized to access this route` });
        }
        next();
    };
};

module.exports = { protect, authorize };
