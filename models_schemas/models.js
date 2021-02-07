const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/demo_models', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});
const userSchema = new mongoose.Schema({
  name: String,
  zone: String,
  posts: [postSchema],
});

const User = mongoose.model('User', userSchema);
// User.create({ name: 'Bob', zone: 'Green' }, (err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

const Post = mongoose.model('Post', postSchema);
Post.create(
  {
    tile: 'First Post',
    content:
      'Once upon a time there string was a guitar into and above then and when maybe not but who really knows',
  },
  (err, post) => {
    if (err) {
      console.log(err);
    } else {
      User.findOne({ name: 'Bob' }, (err, user) => {
        if (!err) {
          user.posts.push(post);
          user.save();
          console.log(user);
        }
      });
    }
  }
);
