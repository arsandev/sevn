const mysql = require('mysql')
const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'ujian_online_vue'
})
db.connect((err)=>{
  if (!err) console.log('database connected')
  else console.log(err)
})

module.exports = db
