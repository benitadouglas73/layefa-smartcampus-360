const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, '../database.json');

// Ensure DB file exists
if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify({ users: [] }, null, 2));
}

const readDb = () => {
    return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
};

const writeDb = (data) => {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

const pool = {
    query: (text, params) => {
        return new Promise((resolve, reject) => {
            const db = readDb();
            const sql = text.trim().toUpperCase();

            // Mock delay
            setTimeout(() => {
                try {
                    // SELECT * FROM users WHERE email = $1
                    if (sql.startsWith('SELECT * FROM USERS WHERE EMAIL')) {
                        const email = params[0];
                        const user = db.users.find(u => u.email === email);
                        resolve({ rows: user ? [user] : [] });
                        return;
                    }

                    // SELECT id, name, email, role FROM users WHERE id = $1
                    if (sql.startsWith('SELECT ID, NAME, EMAIL, ROLE FROM USERS WHERE ID')) {
                        const id = params[0];
                        const user = db.users.find(u => u.id === id);
                        resolve({ rows: user ? [user] : [] });
                        return;
                    }

                    // INSERT INTO users ...
                    if (sql.startsWith('INSERT INTO USERS')) {
                        const newUser = {
                            id: Date.now().toString(), // Simple ID generation
                            name: params[0],
                            email: params[1],
                            password_hash: params[2],
                            role: params[3],
                            created_at: new Date().toISOString()
                        };
                        db.users.push(newUser);
                        writeDb(db);
                        resolve({ rows: [newUser] });
                        return;
                    }

                    // SELECT 1 + 1 (Test query)
                    if (sql.includes('SELECT 1 + 1')) {
                        resolve({ rows: [{ result: 2 }] });
                        return;
                    }

                    console.warn('Unhandled query in JSON DB adapter:', text);
                    resolve({ rows: [] });

                } catch (err) {
                    reject(err);
                }
            }, 10);
        });
    }
};

const connectDB = async () => {
    console.log('JSON Database Adapter Ready');
};

module.exports = { pool, connectDB };
