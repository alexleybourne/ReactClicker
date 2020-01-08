const mongoose = require('mongoose');

const BuffsResource = new mongoose.Schema({
  type: {
      type: String,
      required: true,
      min: 3,
      max: 30
  },
  amount: {
      type: Number,
      required: true,
      min: 3,
      max: 30
  },
  time: {
      type: Number,
      required: true,
      min: 3,
      max: 30
  },
  resource: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "resource"
  }
})

module.exports = BuffsResource
