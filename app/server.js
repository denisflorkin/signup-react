
// import express from 'express'
const express = require('express')
const bodyParser = require('body-parser')
const log = console.log.bind(console)


const PORT = process.env.PORT || Number(process.argv[2]) || 5000


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
app.post('/signup', function (req, res, next) {
  // let's assume it's all good
  // do something with that...
  users.push(req.body) 
  log(`${req.body.name} just signed up`)

  
  // delay response
  let stoREF = setTimeout(() => {
    if (req.body.name === 'aquaman') {
      res.send({ message: 'nope' })
    } else {
      res.send({ message: 'signup success' })
    }
    global.clearTimeout(stoREF)
  }, 2000) 

})


// let's serve our static assets while we're at it
app.get('/', function (req, res, next) {
  res.sendFile(`${process.cwd()}/index.html`)
})


app.listen(PORT, function () {
  console.log(`listening on port ${PORT}!
  open http://localhost:${PORT} in your browser`)
})
