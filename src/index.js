require('ignore-styles')

require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react'],
})

// './Server/index' = TodoApp (Code-Spliting, React Router Server Side Render)
// './Server/server' = RRSSR (React Router Server Side Rendered)
require('./Server/index')
