// VARIABLE DECLARATION
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const expressSanitizer = require('express-sanitizer');
const methodOverride = require('method-override');
const Camp = require('./models/campground');
const Comment = require('./models/comment');
const seedDB = require('./seeds');

// DATABASE
mongoose.connect('mongodb://localhost/yelp_6', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

seedDB();

// DEPENDENCIES
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(expressSanitizer());
app.use(methodOverride('_method'));

// ROUTES
app.get('/', (req, res) => {
  res.render('landing');
});
//  Index
app.get('/campgrounds', (req, res) => {
  Camp.find({}, function (err, camps) {
    res.render('campgrounds/index', { campgrounds: camps });
  });
});

//  New
app.get('/campgrounds/new', (req, res) => {
  res.render('campgrounds/new');
});

//  Create
app.post('/campgrounds', (req, res) => {
  req.body.camp.description = req.sanitize(req.body.camp.description);
  let newCamp = req.body.camp;
  Camp.create(newCamp, function (err, camp) {
    res.redirect('/campgrounds');
  });
});

//  Show
app.get('/campgrounds/:id', (req, res) => {
  const targetId = req.params.id;

  // Find the campground with the matching id.
  Camp.findById(targetId)
    .populate('comments')
    .exec(function (err, foundCamp) {
      console.log(foundCamp);
      res.render('campgrounds/show', { camp: foundCamp });
    });
});

// Edit
app.get('/campgrounds/:id/edit', (req, res) => {
  Camp.findById(req.params.id, function (err, foundCamp) {
    res.render('edit', { camp: foundCamp });
  });
});

// Update
app.put('/campgrounds/:id', (req, res) => {
  req.body.camp.description = req.sanitize(req.body.camp.description);
  Camp.findByIdAndUpdate(req.params.id, req.body.camp, function (
    err,
    foundCamp
  ) {
    res.redirect('/campgrounds/' + req.params.id);
  });
});

// Destroy
app.delete('/campgrounds/:id', (req, res) => {
  Camp.findByIdAndRemove(req.params.id, function (err) {
    res.redirect('/campgrounds');
  });
});
// COMMENTS ROUTES
app.get('/campgrounds/:id/comments/new', (req, res) => {
  Camp.findById(req.params.id, (err, camp) => {
    if (!err) {
      res.render('comments/new', { camp: camp });
    }
  });
});

app.post('/campgrounds/:id/comments', (req, res) => {
  // lookup campground
  Camp.findById(req.params.id, (err, camp) => {
    if (!err) {
      // console.log(req.body.comment);
      Comment.create(req.body.comment, (err, comment) => {
        if (!err) {
          camp.comments.push(comment);
          camp.save();
          res.redirect('/campgrounds/' + camp._id);
        }
      });
    }
  });
});
app.listen(3000, function () {
  console.log('server up');
});
