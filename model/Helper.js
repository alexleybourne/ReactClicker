const mongoose = require('mongoose')

const helperSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      min: 3,
      max: 30
  },
  value: {
      type: Number,
      required: true
  },
  cost: {
      type: Number,
      required: true
  },
  amount: {
      type: Number,
      required: true
  }
})

module.exports = mongoose.model('Helper', userSchema)