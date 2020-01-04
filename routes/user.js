const router = require('express').Router()
const verify = require('./verifyToken') 
const UserModel = require("../model/User");

router.get('/', verify, async(req,res) => {

  res.json({
    data: true
  })
})

router.get('/user/gameData', verify, (req,res) => {
  // get gameData from mongoDB
  let user = await UserModel.findById(req.user._id)

  // return it in JSON
  res.json({
    points: user.points,
    upgrades: user.upgrades
  })
})

module.exports = router