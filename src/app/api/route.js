const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const db = require('./db');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.post('/transfer-funds', (req, res) => {
    const { from, to, amount } = req.body;
    // Logic for transferring funds between accounts
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
