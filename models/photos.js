const mongoose = require('mongoose');

let PhotosSchema = new mongoose.Schema({
  image: {
    type: Buffer
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
