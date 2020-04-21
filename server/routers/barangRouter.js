import express from 'express'
import jwt from '../library/jwt'
const router = express.Router()
import table from '../library/db'
const db = table("barang")
/*
  ---
*/
router.get('/', (req,res)=>{ //get all
  var query = db.select().build()
  var jwtn = jwt.verify(req.query.token).where({a:'b'})
  db.query(query, (err,data) => {
    res.send(data)
  })
})

module.exports = router
