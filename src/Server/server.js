/* Load the HTTP library */
// const http = require('http')

import path from 'path'
import fs from 'fs'
import cors from 'cors'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import express from 'express'
// import mcache from 'memory-cache'
import favicon from 'serve-favicon'
import serialize from 'serialize-javascript'
// import App from '../../dist/app.server.bundle'
import App from '../../public/app.server.bundle'
import routes from '../Routes'

const PORT = 3000
const app = express()

// SSR w/ shared state
app.use(cors())
app.use('/dist', express.static(`${__dirname}/dist`))
app.use('/css', express.static(`${__dirname}/css`))
app.use(express.static('public'))
app.use(favicon(path.resolve('public', 'favicon.ico')))
// app.get('/favicon.ico', (req, res) => res.status(204))
app.get('*', (req, res, next) => {
  const activeRoute = routes.find(route => matchPath(req.url, route)) || {}
  const render = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve()

  render
    .then(data => {
      const context = { data }

      const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      )
      // prettier-ignore
      res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>SSR with RR</title>
          <meta charset="utf-8">
          <style>
            .fouc {
              visibility: hidden;
            }
          </style>
          ${process.env.NODE_ENV === 'production' ? '<link rel=\'stylesheet\' type=\'text/css\' href=\'/styles/server.css\'>' : ''}
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
          <script src="dist/app.server.bundle.js" defer></script>
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
