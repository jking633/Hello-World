const fs = require('fs')
const path = require('path')
const cors = require('cors')
const favicon = require('serve-favicon')
const express = require('express')
const ReactDOMServer = require('react-dom/server')

const App = require('../../public/js/app.server.bundle') // Important - THIS IS THE APP
const webpackAssets = require('../../public/js/assets.json')
const { buildsTags } = require('../Utils')
const template = fs.readFileSync('index.html', 'utf8') // stupid simple template.
const PORT = 3000

// prettier-ignore
const todos = [
  { id: 'ed0bcc48-bbbe-5f06-c7c9-2ccb0456ceba', title: 'Wake Up.', completed: true },
  { id: '42582304-3c6e-311e-7f88-7e3791caf88c', title: 'Grab a brush and put a little makeup.', completed: true },
  { id: '036af7f9-1181-fb8f-258f-3f06034c020f', title: 'Write a blog post.', completed: false },
  { id: '1cf63885-5f75-8deb-19dc-9b6765deae6c', title: 'Create a demo repository.', completed: false },
  { id: '63a871b2-0b6f-4427-9c35-304bc680a4b7', title: '??????', completed: false },
  { id: '63a871b2-0b6f-4422-9c35-304bc680a4b7', title: 'Profit.', completed: false },
]

const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function(res, path, stat) {
    res.set('x-timestamp', Date.now())
  },
}

const app = express()

app.use(cors())
app.use(express.static('public', options))
app.use(favicon(path.resolve('public', 'favicon.ico')))
app.get('*', (req, res) => {
  // Convert assets into array for embedding into index.html
  const scripts = buildsTags(webpackAssets) // should return a string
  const props = { todos }

  App.default(req.url, props).then(reactComponent => {
    const result = ReactDOMServer.renderToString(reactComponent)
    const html = template
      .replace('{{scripts}}', scripts)
      .replace('{{thing}}', result)
      .replace('{{props}}', JSON.stringify(props))
    res.send(html)
    res.end()
  })
})

app.listen(process.env.PORT || PORT || 3000, () => {
  console.log(
    '\x1b[35m%s\x1b[0m',
    `Server is running at http://localhost:${process.env.PORT || 3000}`
  )
})
