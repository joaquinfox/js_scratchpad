'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  content: String,
  created: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', blogSchema);

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

// INDEX
app.get('/blogs', (req, res) => {
  Blog.find({}, function (err, blogs) {
    if (err) {
      console.log(err);
    } else {
      res.render('index', { blogs: blogs });
    }
  });
});

// NEW
app.get('/blogs/new', (req, res) => {
  res.render('new');
});

// CREATE
app.post('/blogs', (req, res) => {
  Blog.create(req.body.blog, function (err, blog) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/blogs');
    }
  });
});

// Show
app.get('/blogs/:id', (req, res) => {
  Blog.findById(req.params.id, (err, blog) => {
    if (err) {
      console.log(err);
    } else {
      res.render('show', { blog: blog });
    }
  });
});
// Edit
app.get('/blogs/:id/edit', (req, res) => {
  Blog.findById(req.params.id, (err, blog) => {
    if (err) {
      console.log(err);
    } else {
      res.render('edit', { blog: blog });
    }
  });
});

// Update
app.put('/blogs/:id', (req, res) => {
  Blog.findByIdAndUpdate(
    req.params.id,
    req.body.blog,
    function (err, updatedBlog) {
      if (err) {
        console.log(err);
        // res.redirect('/blogs');
      } else {
        res.redirect('/blogs/' + req.params.id, { blog: updatedBlog });
      }
    }
  );
});

// Update
app.listen(3000, function (err) {
  if (err) {
    console.log('ERROR:', err.message || err);
  }
  console.log('server up');
});
