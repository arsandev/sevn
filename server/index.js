import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import fs from 'fs'
import path from 'path'

const app = express()
const port = process.env.WEB_PORT

app.use(bodyParser.json())
app.use(cors())

fs.readdirSync(path.join(__dirname, 'controllers')).forEach(file => {
  let controller = file.split('Controller.js')
  app.use('/api/'+controller[0], require('./controllers/'+file))
})

app.listen(port, ()=>{
  console.log('server running on port '+port)
})
