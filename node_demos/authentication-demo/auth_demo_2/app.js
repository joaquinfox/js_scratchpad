const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const User = require('./models/user');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');

mongoose.connect('mongodb://localhost/delete', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');
app.use(
  session({
    secret: 'jk',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/secret', isLoggedIn, (req, res) => {
  res.render('secret');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    (err, user) => {
      if (err) {
        console.log(err);
        return res.render('register');
      }
      passport.authenticate('local')(req, res, () => res.redirect('/secret'));
    }
  );
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login',
  }),
  (req, res) => {}
);
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('back');
  }
}
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
