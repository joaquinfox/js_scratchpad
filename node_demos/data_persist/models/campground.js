const mongoose = require('mongoose');

const campSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});

const Camp = mongoose.model('Camp', campSchema);

module.exports = Camp;
