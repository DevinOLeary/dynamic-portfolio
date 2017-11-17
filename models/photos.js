const mongoose = require('mongoose');

let PhotosSchema = new mongoose.Schema({
  image: {
    type: String
  },
  contentType: {
    type: String
  },
  category: {
    type: String
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
