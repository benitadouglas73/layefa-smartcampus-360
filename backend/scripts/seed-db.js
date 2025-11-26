const { supabase } = require('../config/db');
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
            const { data: existingUsers, error: checkError } = await supabase
                .from('users')
                .select('*')
                .eq('email', user.email);

            if (checkError) throw checkError;

            if (existingUsers.length === 0) {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(user.password, salt);

                const { error: insertError } = await supabase
                    .from('users')
                    .insert([
                        { name: user.name, email: user.email, password_hash: hashedPassword, role: user.role }
                    ]);

                if (insertError) throw insertError;

                console.log(`✅ Created user: ${user.email} (${user.role})`);
            } else {
                console.log(`⚠️ User already exists: ${user.email}`);
            }
        }
        console.log('✨ Seeding completed successfully!');
    } catch (error) {
        console.error('❌ Seeding failed:', error.message);
    }
};

seedUsers();
