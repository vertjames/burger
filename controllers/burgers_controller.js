const router = require('express').Router()
const burger = require('../models/burger')

router.get('/', (req, res) => {
  burger.selectAll(data => {
    res.render('index', { burgers: data })
  })
})

router.post('/api/burgers', (req, res) => {
  burger.insertOne(['name'], [`${req.body.name}`], result => {
    res.json({ id: result.insertId })
  })
})

router.put('/api/burgers/:id', (req, res) => {
  burger.updateOne(`devoured = ${req.body.devoured}`, `id = ${req.params.id}`, result => {
    res.status(200).end()
  })
})

module.exports = router
