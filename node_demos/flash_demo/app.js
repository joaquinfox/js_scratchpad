const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(session({ secret: 'fhjdka', resave: false, saveUninitialized: false }));
app.use(flash());

app.get('/', (req, res) => {
  res.render('landing', { message: req.flash('message') });
});
app.get('/first', (req, res) => {
  req.flash('message', 'Sunny Day!');
  res.redirect('/');
});
app.get('/second', (req, res) => {
  req.flash('message', 'Hello World');
  res.redirect('/');
});
app.get('/third', (req, res) => {
  req.flash('message', 'La la la!!!');
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
