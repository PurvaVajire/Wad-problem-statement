const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from "public" directory
app.use(express.static('public'));

// Default route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Restaurant site running at http://localhost:${PORT}`);
});
