const mongoose = require("mongoose");
const HelperSchema = require("./Helper");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 30
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 100
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 2000
  },
  date: {
    type: Date,
    default: Date.now
  },
  points: {
    type: Number,
    default: 0
  },
  helpers: [HelperSchema]
});

module.exports = mongoose.model("User", UserSchema);
