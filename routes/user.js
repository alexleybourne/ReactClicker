const router = require('express').Router()
const verify = require('./verifyToken') 

router.get('/', verify, (req,res) => {

  console.log(req.user.id)

  res.json({
    data: true
  })
})

router.get('/user/gameData', verify, (req,res) => {
  // get gameData from mongoDB

  console.log(req.user)

  // return it in JSON
  res.json({
    data: true
  })
})

module.exports = router