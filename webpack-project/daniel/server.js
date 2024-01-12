import React from 'react';
import express from 'express';
import { renderToString} from 'react-dom/server';
import path from 'path';

import App from './src/App';

const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  const app = renderToString(<App />);

  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>React SSR</title>
      <script src="/bundle.js" defer></script>
    </head>
    <body>
      <div id="root">
        ${app}
      </div>
    </body>
    </html>
    `
  );
});

app.listen(420, () => {
  console.log('server started. go to http://localhost:420');
});
