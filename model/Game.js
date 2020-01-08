const mongoose = require('mongoose');
const Buff = require("./Buff");
const Resource = require("./Resource");
const Upgrade = require("./Upgrade");

const GameSchema = new mongoose.Schema({
  accessCode: {
      type: String,
      required: true,
      min: 3,
      max: 30
  },
  buffs: [Buff],
  upgrades: [Upgrade],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
})

module.exports = mongoose.model("Game", GameSchema);
