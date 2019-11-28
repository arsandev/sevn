import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import fs from 'fs'
import path from 'path'

const app = express()
const port = process.env.PORT || process.env.WEB_PORT

app.use(bodyParser.json())
app.use(cors())

fs.readdirSync(path.join(__dirname, 'routers')).forEach(file => {
  let controller = file.split('Router.js')
  app.use('/api/'+controller[0], require('./routers/'+file))
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname+'/vue'))
  app.get(/.*/, (req,res)=>{ res.sendFile(__dirname+'/vue/index.html') })
}

app.listen(port, ()=>{
  console.log('server running on port '+port)
})
