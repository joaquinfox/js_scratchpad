var express = require('express'),
  session = require('express-session'),
  mongoose = require('mongoose'),
  passport = require('passport'),
  User = require('./models/user'),
  LocalStrategy = require('passport-local');

mongoose.connect('mongodb://localhost/auth_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'jkjl',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//============
// ROUTES
//============

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/secret', isLoggedIn, function (req, res) {
  res.render('secret');
});

// Auth Routes

//show sign up form
app.get('/register', function (req, res) {
  res.render('register');
});
//handling user sign up
app.post('/register', function (req, res) {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        return res.render('register');
      }
      passport.authenticate('local')(req, res, function () {
        res.redirect('/secret');
      });
    }
  );
});

// LOGIN ROUTES
//render login form
app.get('/login', (req, res) => {
  res.render('login');
});

//login logic
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
//middleware
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('back');
}

app.listen(process.env.PORT || 3000, process.env.IP, function () {
  console.log('server started.......');
});
