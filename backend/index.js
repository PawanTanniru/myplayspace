const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// MySQL connection configuration
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Pawan@01',
  database: 'playspace'
});

// ... rest of your Express app setup

// Example: Fetching all grounds
app.get('/api/grounds', (req, res) => {
  pool.query('SELECT * FROM grounds', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Server Error' });
    } else {
      res.json(results);
    }
  });
});

// ... other endpoints for creating, updating, and deleting grounds