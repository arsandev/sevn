import express from 'express'
import jwt from '../library/jwt'
const router = express.Router()
import table from '../library/db'
const db = table("example")
/*
  ---
*/
router.get('/', (req,res)=>{ //get all
  var query = db.select().build()
  db.query(query, (err,data)=>{
    res.send(data)
  })
})

module.exports = router
