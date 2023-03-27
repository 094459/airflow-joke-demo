const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '',
    user: 'admin',
    password: 'Password',
    database: 'jokes'
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database: ', err);
      return;
    }
  
    console.log('Connected to database.');
  });
  
  connection.query('SELECT * FROM bad_jokes ORDER BY RAND() LIMIT 1', (err, results) => {
    if (err) {
      console.error('Error querying database: ', err);
      return;
    }
  
    console.log('Random joke:', results[0]);
  });
  connection.end((err) => {
    if (err) {
      console.error('Error closing database connection: ', err);
      return;
    }
  
    console.log('Database connection closed.');
  });
    
