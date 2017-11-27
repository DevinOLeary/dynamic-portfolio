const mongoose = require('mongoose');

let AnimationsSchema = new mongoose.Schema({
  animationArray: [{
    html: String
  }]
});

let Animation = mongoose.model('Animation', AnimationsSchema);

module.exports = {Animation}
