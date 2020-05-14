const express = require('express')

const app = express()

function onRequest () {
    console.log('testing....')
}

const path = '/user/:name'

function render(message) {
  const document = `
    <html>
      <title>Home</title>
      <h1>${message}</h1>

    </html>`
  return document 
}


const page =  `
  <html>
    <title>Home</title>
    <h1>Welcome</h1>
  
  </html>`

  app.get(
    path, // route to listen on
    (request, respons) => {
      const message = `Welcome ${request.params.name}`
      const page = render(message)
      respons.send(page)
    } // callback runs when the route is requested
  )

const port = 3000

function onListen () {
    console.log(`Listening on :${port}`)
  }

app.listen(port, onListen)
