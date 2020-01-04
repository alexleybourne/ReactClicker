const router = require('express').Router()
const verify = require('./verifyToken') 

router.get('/', async(req,res) => {
  res.render('index', {points: 0, team: {computer: 0, developers: 0, brain: 0}})
})

module.exports = router