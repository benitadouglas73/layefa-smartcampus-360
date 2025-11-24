const { pool } = require('../config/db');
const bcrypt = require('bcrypt');

const seedUsers = async () => {
    const users = [
        {
            name: 'Admin User',
            email: 'admin@smartcampus.com',
            password: 'password123',
            role: 'admin'
        },
        {
            name: 'Student User',
            email: 'student@smartcampus.com',
            password: 'password123',
            role: 'student'
        },
        {
            name: 'Teacher User',
            email: 'teacher@smartcampus.com',
            password: 'password123',
            role: 'teacher'
        },
        {
            name: 'Parent User',
            email: 'parent@smartcampus.com',
            password: 'password123',
            role: 'parent'
        }
    ];

    console.log('🌱 Seeding database...');

    try {
        for (const user of users) {
            // Check if user exists
            const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [user.email]);

            if (userExists.rows.length === 0) {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(user.password, salt);

                await pool.query(
                    'INSERT INTO users (name, email, password_hash, role) VALUES ($1, $2, $3, $4)',
                    [user.name, user.email, hashedPassword, user.role]
                );
                console.log(`✅ Created user: ${user.email} (${user.role})`);
            } else {
                console.log(`⚠️ User already exists: ${user.email}`);
            }
        }
        console.log('✨ Seeding completed successfully!');
    } catch (error) {
        console.error('❌ Seeding failed:', error);
    }
};

seedUsers();
