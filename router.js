const express = require('express');
const nocache = require('nocache');
const cors = require('cors');
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Time: ', new Date());
  next();
}, nocache(), bodyParser.json(), cors());

let books = ['harry', 'potter'];

router.get('/books/:bookId', (req, res) => {
  res.send(`Here is your book ${req.params.bookId}`);
});

router.post('/books', (req, res) => {
  books = books.concat(req.body.name);
  res.status(201);
  res.send("");
});

router.get('/books', (req, res) => {
  res.send(books);
});

module.exports = router;