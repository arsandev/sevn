const express = require('express')
const app = express()
const fs = require('fs')

fs.readdirSync(__dirname+'/controllers').forEach((file)=>{
  let split = file.split('_')
  app.use('/'+split[0], require('./controllers/'+file))
})

app.listen(3000)
