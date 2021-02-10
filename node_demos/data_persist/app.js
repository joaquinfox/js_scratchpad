// VARIABLE DECLARATION
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const campgrounds = require('./data');
const Camp = require('./models/campground');
const seedDB = require('./seedDB');

mongoose.connect('mongodb://localhost/data_persistence_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// DEPENDENCIES
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

seedDB();

// ROUTES
app.get('/', (req, res) => {
  res.render('landing');
});
//  Index
app.get('/campgrounds', (req, res) => {
  res.render('index', { campgrounds: campgrounds });
});

//  New
app.get('/campgrounds/new', (req, res) => {
  res.render('new');
});

//  Create
// app.post('/campgrounds', (req, res) => {
//   let newCamp = req.body.camp;
//   campgrounds.push(newCamp);
//   res.redirect('/campgrounds');
// });

app.listen(3000, function () {
  console.log('server up');
});
