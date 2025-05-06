const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve frontend
app.use(express.static(path.join(__dirname, 'public')));

// API route to get employee data
app.get('/api/employees', (req, res) => {
  fs.readFile('employees.json', 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading data file' });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
