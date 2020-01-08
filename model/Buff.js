const mongoose = require('mongoose');
const BuffsResource = require("./BuffsResource");

const Buff = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      min: 3,
      max: 30
  },
  costFormula: {
      type: String,
      required: true,
      min: 3,
      max: 30
  },
  buffs: [BuffsResource]
})

module.exports = Buff
