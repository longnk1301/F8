const path = require('path');
const express = require('express');
// const morgan = require('morgan');
const methodOverride = require('method-override');
const handleBars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//connect to db
db.connect();

//config public folder
app.use(express.static(path.join(__dirname, 'public')));

//add middleware for html
app.use(express.urlencoded({ extended: true }));
//add middleware for code js
app.use(express.json());

//add morgan for logs http request middleware for nodejs
// app.use(morgan('combined'));

app.use(methodOverride('_method'));

//template engine
app.engine('hbs', handleBars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
