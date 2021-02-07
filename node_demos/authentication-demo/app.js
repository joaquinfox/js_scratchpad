const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const User = require('./models/user');

app.set('view engine', 'ejs');

app.get('/secret', (req, res) => {
  res.render('secret');
});
app.get('/register', (req, res) => {
  res.render('register');
});
app.post('/register', (req, res) => {});
app.get('/login', (req, res) => {
  res.render('login');
});
app.post('/login', (req, res) => {});
app.get('/logout', (req, res) => {
  //   res.render('landing');
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
