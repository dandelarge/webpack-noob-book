const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(6969, () => {
  console.log('Server started at http://localhost:6969');
});
