
// import express from 'express'
const express = require('express')

const PORT = 5000

const app = express()

app.post('/', function (req, res) {
  res.send('signup success!')
})


app.listen(PORT, function () {
  console.log(`listening on port ${PORT}!`)
})
