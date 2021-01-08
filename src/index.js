const path = require('path');
const express = require('express');
// const morgan = require('morgan');
const handleBars = require('express-handlebars');
const app = express();
const port = 3000;

//config public folder
app.use(express.static(path.join(__dirname, 'public')));

//add middleware for html
app.use(express.urlencoded({ extended: true }));
//add middleware for code js
app.use(express.json());

//add morgan for logs http request middleware for nodejs
// app.use(morgan('combined'));

//template engine
app.engine('hbs', handleBars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/search', (req, res) => {
  res.render('search');
});

app.post('/search', (req, res) => {
  console.log('111', req.body);
  res.send(req.body.q);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
