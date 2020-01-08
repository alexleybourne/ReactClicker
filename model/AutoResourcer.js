const mongoose = require('mongoose')

const AutoResourcerSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      min: 3,
      max: 30
  },
  rate: {
      type: Number,
      required: true
  },
  costFormula: {
      type: String,
      required: true
  },
  resource: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Resource"
  }
})

module.exports = mongoose.model("AutoResourcer", AutoResourcerSchema);
