const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const session = require('express-session');
const flash = require('connect-flash');

app.set('view engine', 'ejs');
app.use(session({ secret: 'fjdk' }));
app.use(flash());
app.use(function (req, res, next) {
  res.locals.message = req.flash('message');
  next();
});

app.get('/', (req, res) => {
  //   res.send('hanga banga');
  res.render('landing');
});
app.get('/first', (req, res) => {
  req.flash('message', 'Sunny day!!');
  res.redirect('/');
});
app.get('/second', (req, res) => {
  req.flash('message', 'Feel so fine!!');
  res.redirect('/');
});
app.get('/third', (req, res) => {
  req.flash('message', 'Eat my shorts');
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
