const mongoose = require('mongoose');
const AutoResourcer = require("./AutoResourcer");

const ResourceSchema = new mongoose.Schema({
  name: {
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

module.exports = mongoose.model("Resource", ResourceSchema);
