const mongoose = require('mongoose');

let PhotosSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  contentType: {
    type: String
  },
  category: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  description: {
    type: String
  }
});

let Photo = mongoose.model('Photo', PhotosSchema);

module.exports = {Photo}
