const connection = require("./connection");

const orm = {
  selectAll(table, cb) {
    connection.query(`SELECT * from ${table}`, (err, data) => {
      if (err) throw err
      cb(data)
    })
  },

  insertOne(table, changes, values, cb) {
    connection.query(`INSERT INTO ${table} (${changes}) VALUE ("${values}")`, (err, info) => {
      if (err) throw err
      cb(info)
    })
  },

  updateOne(table, changes, where, cb) {
    connection.query(`UPDATE ${table} SET ${changes} WHERE ${where}`, (err, info) => {
      if (err) throw err
      cb(info)
    })
  }
}

module.exports = orm
