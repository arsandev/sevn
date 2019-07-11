const m = require('../models/soal')
const router = require('express').Router()

router.get('/', (req,res)=>{
  res.send(m.function())
})

module.exports = router
