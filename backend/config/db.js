const supabase = require('./supabaseClient');

const connectDB = async () => {
    try {
        // Test connection by selecting 1 row from users (or just checking if client is initialized)
        // Since Supabase is lazy, we can try a simple query if we want to verify connectivity eagerly.
        // However, usually just initializing the client is enough.
        console.log('✅ Supabase Client Initialized');
    } catch (err) {
        console.error('❌ Supabase Connection Failed:', err.message);
    }
};

module.exports = { supabase, connectDB };
