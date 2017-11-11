const mongoose = require('mongoose');

let AboutSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    minlength: 5
  },
  period: {
    type: String
  },
  header: {
    type: String
  }
});

let About = mongoose.model('About', AboutSchema);

module.exports = {About}
