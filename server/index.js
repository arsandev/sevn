const express = require('express')
const app = express()
const fs = require('fs')

fs.readdirSync(__dirname+'/models').forEach((file)=>{
  let split = file.split('.')
  app.use('/'+split[0], require('./controllers/'+split[0]+'Controller'))
})

app.listen(3000)
