import express from 'express';
import printFn from './lib.js';

const app = express();

app.get('/', (_, res) => {
  res.send('Hello world!');
});

app.get('/:name', (req, res) => {
  printFn(req.params.name);
  res.send(`Hello ${req.params.name}`);
});

app.post('/songs/:name', (req, res) => {});

app.listen(420, () => {
  console.log('Server started at http://localhost:420');
});
