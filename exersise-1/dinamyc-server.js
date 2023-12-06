const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.listen(420, () => {
  console.log('Server started at http://localhost:420');
});