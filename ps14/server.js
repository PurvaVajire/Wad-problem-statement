const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (like index.html)
app.use(express.static(__dirname));

// Serve JSON data as API
app.get('/api/users', (req, res) => {
  const filePath = path.join(__dirname, 'users.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
    } else {
      const users = JSON.parse(data);
      res.json(users);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
