const router = require('express').Router()
const verify = require('./verifyToken') 

router.get('/', verify, (req,res) => {
  res.json({
    data: true
  })
})

module.exports = router