import db from '../db'
import sql from 'sql-query'
const sqlQuery = sql.Query()

class Database {
  constructor(table) {
    this.table = table
  }
  query(q,cb){
    if (typeof q === 'object') {
      let key=[],val=[],crud=Object.keys(q)[0],cmd='',query=q[crud][0],funcQuery
      if (crud === "select") funcQuery = "from"
      else if (crud === "insert" || crud === "update") funcQuery = "into"
      else if (crud === "delete") {
        crud="remove"
        funcQuery="from"
      }
      for (var keys in query) {
        key.push(keys)
        val.push(query[keys])
      }
      for (var i = 0; i < val.length; i++) {
        cmd += key+"("+JSON.stringify(val[0])+")."
      }
      cmd = "sqlQuery."+crud+"()."+funcQuery+"('"+this.table+"')."+cmd+"build()"
      let evalCmd = eval(cmd)
      return db.query(""+evalCmd+"",(err,data)=>{
        cb(err,data)
      })
    }
  }
}

module.exports = Database
