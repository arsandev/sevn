import express from 'express'
import jwt from '../library/jwt'
const router = express.Router()
import table from '../library/db'
const db = table("users")
/*
  ---
*/

router.get('/getToken', (req,res) => {
  var token = jwt.sign({as:"admin"})
  res.json({status:true,token:token})
})

router.get('/', (req,res) => { //get all
  var query = db.select().build()
  db.query(query, (err,data) => {
    res.send(data)
  })
})

router.post('/', (req,res) => {
  var token = jwt.verify(req.query.token).where({as:"admin"})
  var query = db.insert().set({name:req.body.name}).build()
  db.query(query, (err,data) => {
    if (err) res.json({status:false})
    else res.json({status:true})
  })
})

router.put('/:id', (req,res) => {
  var token = jwt.verify(req.query.token).where({as:"admin"})
  var query = db.update().set({name:req.body.name}).where({id:req.params.id}).build()
  db.query(query, (err,data) => {
    if (err) res.json({status:false})
    else res.json({status:true})
  })
})

router.delete('/:id', (req,res) => {
  var token = jwt.verify(req.query.token).where({as:"admin"})
  var query = db.delete().where({id:req.params.id}).build()
  db.query(query, (err,data) => {
    if (err) res.json({status:false})
    else res.json({status:true})
  })
})

module.exports = router
