const express = require('express')

const app = express()

function onRequest () {
    console.log('testing....')
}

app.get(
    '/test', // route to listen on
    onRequest // callback runs when the route is requested
  )

const port = 3000

function onListen () {
    console.log(`Listening on :${port}`)
  }

app.listen(port, onListen)


