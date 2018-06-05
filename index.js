const express = require('express');
const app = express();
const router = express.Router();

router.use((req, res, next) => {
  console.log('Time: ', new Date());
  next();
});

router.get('/books/:bookId', (req, res) => {
  res.send(`Here is your book ${req.params.bookId}`);
});

app.use(router);

app.listen(3000, () => console.log('Example app listening on port 3000!'));