const mongoose = require('mongoose')

const AutoResourcerUpgrade = new mongoose.Schema({
  type: {
      type: String,
      required: true,
      min: 3,
      max: 30
  },
  amount: {
      type: Number,
      required: true
  },
  autoResourcer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autoResourcer"
  }
})

module.exports = AutoResourcerUpgrade
