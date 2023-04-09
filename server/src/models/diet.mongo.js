const mongoose = require('mongoose');

const dietSchema = new mongoose.Schema({
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  food: [
    {
      
    }
  ]
});

module.exports = mongoose.model('diet', dietSchema);