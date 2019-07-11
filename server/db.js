const mysql = require('mysql')
const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'MYDATABASE'
})
db.connect((err)=>{
  if (!err) console.log('database connected')
  else console.log(err)
})

module.exports = mysql
