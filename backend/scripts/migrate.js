const fs = require('fs');
const path = require('path');
const { pool } = require('../config/db');

const migrate = async () => {
    try {
        console.log('⏳ Running migration...');

        const schemaPath = path.resolve(__dirname, '../database/schema.sql');
        const schema = fs.readFileSync(schemaPath, 'utf8');

        await pool.query(schema);

        console.log('✅ Migration completed successfully!');
        process.exit(0);
    } catch (err) {
        console.error('❌ Migration failed:', err);
        process.exit(1);
    }
};

migrate();
