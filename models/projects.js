const mongoose = require('mongoose');

let ProjectSchema = new mongoose.Schema({
  imageArray: [],
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  coverImage: {
    type: String,
    required: true
  },
  link: {
    type: String
  }
});


let Project = mongoose.model('Project', ProjectSchema);

module.exports = {Project}
