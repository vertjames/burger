const express = require('express')
const app = express()

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./controllers/burgers_controller'))

app.listen(process.env.PORT || 3000, () => console.log('http://localhost:3000'))