const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = process.env.PORT || 3000;

// Database connection settings
const dbConfig = {
  host: '',
  user: 'admin',
  password: 'Password',
  database: 'jokes'
};

// Connect to the database and create the table if it doesn't exist
(async () => {
  const connection = await mysql.createConnection(dbConfig);
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS example_table (
      id INT AUTO_INCREMENT PRIMARY KEY,
      data VARCHAR(255) NOT NULL
    );
  `;
  await connection.execute(createTableSQL);
  connection.end();
})();

// Define API route to fetch a random row
app.get('/random', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM bad_jokes ORDER BY RAND() LIMIT 1;');
    connection.end();
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching a random row.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
