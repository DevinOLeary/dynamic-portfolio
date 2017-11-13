const mongoose = require('mongoose');

let PhotosSchema = new mongoose.Schema({
  image: {
    type: String,
    data: Buffer,
    contentType: String,
    required: true
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
