const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));
app.use(express.json());

let tasks = [];
let idCounter = 1;

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { name } = req.body;
  const task = { id: idCounter++, name };
  tasks.push(task);
  res.status(201).json(task);
});

app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.name = name;
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.sendStatus(204);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
