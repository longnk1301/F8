const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

//add morgan for logs http request middleware for nodejs
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
