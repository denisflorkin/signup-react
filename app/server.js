
// import express from 'express'
const express = require('express')
const bodyParser = require('body-parser')

const PORT = 5000

const users = []
const app = express()


app.use(function(req, res, next) { /** CORS middleware */
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })
  .use(bodyParser.json())
  .use(express.static('js'))

/** handle register request */
app.post('/', function (req, res, next) {
  users.push(req.body) // let's assume it's all good
  console.log(JSON.stringify(users, true, 2, 2))
  res.send({ message: 'signup success' })
})


// let's serve our static assets while we're at it
app.get('/', function (req, res, next) {
  res.sendFile(`${process.cwd()}/index.html`)
})


app.listen(PORT, function () {
  console.log(`listening on port ${PORT}!
  open http://localhost:5000 in your browser`)
})
