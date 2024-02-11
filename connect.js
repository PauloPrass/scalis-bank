const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const DB_PATH = path.join(__dirname, 'data', 'accounts.db');

const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
  } else {
    console.log('Connected to the database.');
  }
});

const initializeDatabase = () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS accounts (
      id INTEGER PRIMARY KEY,
      account_type TEXT,
      balance REAL
    )
  `;
  db.run(createTableQuery, (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    } else {
      console.log('Table created successfully.');
    }
  });
};

initializeDatabase();

module.exports = db;
