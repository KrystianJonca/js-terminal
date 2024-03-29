const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.use((req, res, next) => {
  res.status(404).render('404')
})

app.listen(8000, () => {
  console.log('Listening on port 8000')
})
