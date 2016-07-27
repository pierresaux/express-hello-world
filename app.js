const express = require('express')
const app = express()

app.get('*', (req, res) => {
  res.status(200).send('hello world!')
})

app.listen(80, () => {
  console.log('server started')
})
