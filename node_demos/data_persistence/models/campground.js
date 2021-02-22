const mongoose = require('mongoose');

const campSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

const Camp = mongoose.model('Camp', campSchema);

module.exports = Camp;
