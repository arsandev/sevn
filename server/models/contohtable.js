const db = require('../db')
const table = 'contohtable'

module.exports = {

  read(res){
    db.query('SELECT*FROM '+table, (err,results)=>{
      res.send(results)
    })
  }

}
