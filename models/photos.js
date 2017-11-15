const mongoose = require('mongoose');

let PhotosSchema = new mongoose.Schema({
  image: {
    data: Buffer,
    contentType: String
  }
});

let Photo = mongoose.model('Photo', PhotosSchema);

module.exports = {Photo}
