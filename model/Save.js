const mongoose = require('mongoose');

const Save = new mongoose.Schema({
  hash: {
      type: String,
      required: true,
      min: 3,
      max: 30
  },
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Game"
  }
})

module.exports = Save
