const mongoose = require("mongoose");
const Save = require("./Save");

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
  saves: [Save]
});

module.exports = mongoose.model("User", UserSchema);
