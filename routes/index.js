const router = require('express').Router()
const verify = require('./verifyToken') 

router.get('/', async(req,res) => {
  res.render('index')
})

module.exports = router