import 'core-js/modules/es6.promise'
import 'core-js/modules/es6.array.iterator'

// import React from 'react'
// import { hydrate } from 'react-dom'
// import App from '../Shared/application'
// import { BrowserRouter } from 'react-router-dom'

// const element = document.getElementById('app')

// hydrate(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   element
// )

import { BrowserRouter, StaticRouter } from 'react-router-dom'
import { render } from 'react-dom'
import React from 'react'
import { renderRoutes } from 'react-router-config'

import routes from './routes'

import { convertCustomRouteConfig, ensureReady } from './helpers'

const routeConfig = convertCustomRouteConfig(routes)

if (typeof window !== 'undefined') {
  ensureReady(routeConfig).then(() => {
    const props = JSON.parse(document.getElementById('props').dataset.props) // eslint-disable-line
    // prettier-ignore
    render(
      (
        <BrowserRouter>
          { renderRoutes(routeConfig, props) }
        </BrowserRouter>
      ),
      document.getElementsByClassName('todoapp')[0], // eslint-disable-line
    )
  })
}

export default function render2(location, props) {
  return ensureReady(routeConfig, location).then(() => (
    <StaticRouter context={{}} location={location}>
      {renderRoutes(routeConfig, props)}
    </StaticRouter>
  ))
}
