const router = require('express').Router()
const verify = require('./verifyToken') 
const UserModel = require("../model/User");

router.post('/gameData', verify, async (req,res) => {
  // get gameData from mongoDB
  let user = await UserModel.findById(req.user._id)
})

module.exports = router