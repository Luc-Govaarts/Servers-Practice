const express = require('express')

const app = express()

function onRequest () {
    console.log('testing....')
}

const path = '/user/:name'

const page =  `
  <html>
    <title>Home</title>
    <h1>Welcome</h1>
  
  </html>`



app.get(
    path, // route to listen on
    (request, respons) => {
      const message = `Welcome ${request.params.name}`
      respons.send(message)
    } // callback runs when the route is requested
  )

const port = 3000

function onListen () {
    console.log(`Listening on :${port}`)
  }

app.listen(port, onListen)
