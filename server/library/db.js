import db from '../config'
import sql from 'sql-query'
const sqlQuery = sql.Query()

const query = (table) => {
  const queries = {
    query: (q,cb) => {
      return db.query(q,(err,data)=>{
        cb(err,data)
      })
    },
    select: () => {
      return sqlQuery.select().from(table)
    },
    update: () => {
      return sqlQuery.update().into(table)
    },
    delete: () => {
      return sqlQuery.remove().from(table)
    },
    insert: () => {
      return sqlQuery.insert().into(table)
    }
  }
  return queries
}

export default query
