const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Time: ', new Date());
  next();
});

router.get('/books/:bookId', (req, res) => {
  res.send(`Here is your book ${req.params.bookId}`);
});

module.exports = router;