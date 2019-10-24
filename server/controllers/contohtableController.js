const m = require('../models/contohtable')
const router = require('express').Router()

router.get('/', (req,res)=>{
  m.read(res)
})

module.exports = router
