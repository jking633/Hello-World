/* Load the HTTP library */
// const http = require('http')

import path from 'path'
import fs from 'fs'
import cors from 'cors'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import express from 'express'
import serialize from 'serialize-javascript'
import App from '../Shared/application'
import routes from '../Routes'

const PORT = 3000
const app = express()

// SSR w/ shared state
app.use(cors())
app.use(express.static('public'))
app.get('/favicon.ico', (req, res) => res.status(204))
app.get('*', (req, res, next) => {
  const activeRoute = routes.find(route => matchPath(req.url, route)) || {}

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve()

  promise
    .then(data => {
      const context = { data }

      const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      )

      res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with RR</title>
          <script src="/client.js" defer></script>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>

        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `)
    })
    .catch(next)
})

// Simple Server Side Render w/o shared state
// const router = express.Router()
// const serverRenderer = (req, res, next) => {
//   fs.readFile(path.resolve('./.build/index.html'), 'utf8', (err, data) => {
//     if (err) {
//       console.error(err)
//       return res.status(500).send('An error occurred')
//     }
//     return res.send(
//       data.replace(
//         '<div id="root"></div>',
//         `<div id="root">${renderToString(<App />)}</div>`
//       )
//     )
//   })
// }
// router.use('^/$', serverRenderer)
// router.use(
//   express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
// )
// tell the app to use the above rules
// app.use(router)
// app.use(express.static('./build'))

app.listen(process.env.PORT || PORT || 3000, () => {
  console.log(
    '\x1b[35m%s\x1b[0m',
    `Server is running at http://localhost:${process.env.PORT || 3000}`
  )
})

/* Create an HTTP server to handle responses */
// http
//   .createServer(function(request, response) {
//     response.writeHead(200, {
//       'Content-Type': 'text/plain',
//     })
//     response.write('Hello World')
//     response.end()
//   })
//   .listen(8888, console.log('Server running at http://localhost:8888/'))
