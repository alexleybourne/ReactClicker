const mongoose = require('mongoose');
const AutoResourcerUpgrade = require("./AutoResourcerUpgrade");

const Upgrade = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      min: 3,
      max: 30
  },
  cost: {
    type: Number,
    required: true,
    min: 3,
    max: 30
  },
  upgrades: [AutoResourcerUpgrade]
})

module.exports = Upgrade
