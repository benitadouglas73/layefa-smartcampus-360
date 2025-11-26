const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { supabase } = require('../config/db');

// Generate JWT Token
const generateToken = (id, role, tokenVersion) => {
    return jwt.sign({ id, role, tokenVersion }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
const register = async (req, res) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
        return res.status(400).json({ message: 'Please add all fields' });
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

        // Create user
        const { data: newUsers, error: insertError } = await supabase
            .from('users')
            .insert([
                { name, email, password_hash: hashedPassword, role }
            ])
            .select();

        if (insertError) throw insertError;

        const user = newUsers[0];
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user.id, user.role, user.token_version),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Authenticate a user
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
    const { email, password, logoutOthers } = req.body;

    try {
        // Check for user email
        const { data: users, error: fetchError } = await supabase
            .from('users')
            .select('*')
            .eq('email', email);

        if (fetchError) throw fetchError;

        let user = users[0];

        if (user && (await bcrypt.compare(password, user.password_hash))) {

            // If logoutOthers is true, increment token version
            if (logoutOthers) {
                // Note: token_version might be null initially, so we handle that
                const currentVersion = user.token_version || 0;
                const { data: updatedUsers, error: updateError } = await supabase
                    .from('users')
                    .update({ token_version: currentVersion + 1 })
                    .eq('id', user.id)
                    .select();

                if (updateError) throw updateError;
                user = updatedUsers[0];
            }

            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user.id, user.role, user.token_version || 0),
            });
        } else {
            res.status(400).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Get user data
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
    try {
        const { data: users, error } = await supabase
            .from('users')
            .select('id, name, email, role')
            .eq('id', req.user.id);

        if (error) throw error;

        res.status(200).json(users[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Logout from all devices
// @route   POST /api/auth/logout-all
// @access  Private
const logoutAll = async (req, res) => {
    try {
        // We need to fetch the current version first to increment it safely, 
        // or we can use a stored procedure (RPC) for atomic increment.
        // For simplicity, we'll fetch and update, but RPC is better for concurrency.
        // However, Supabase doesn't support `token_version + 1` in simple update calls directly without RPC.

        const { data: user, error: fetchError } = await supabase
            .from('users')
            .select('token_version')
            .eq('id', req.user.id)
            .single();

        if (fetchError) throw fetchError;

        const newVersion = (user.token_version || 0) + 1;

        const { error: updateError } = await supabase
            .from('users')
            .update({ token_version: newVersion })
            .eq('id', req.user.id);

        if (updateError) throw updateError;

        res.status(200).json({ message: 'Logged out from all devices' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    register,
    login,
    getMe,
    logoutAll,
};
