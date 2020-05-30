const orm = require('../config/orm')

const burger = {
  selectAll(cb) {
    orm.selectAll('burgers', res => { cb(res) })
  },

  insertOne(changes, values, cb) {
    orm.insertOne('burgers', changes, values, res => { cb(res) })
  },

  updateOne(changes, values, cb) {
    orm.updateOne('burgers', changes, values, res => { cb(res) })
  }
}

module.exports = burger
