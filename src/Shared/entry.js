import { BrowserRouter, StaticRouter } from 'react-router-dom'
import { hydrate } from 'react-dom'
import React from 'react'
import { renderRoutes } from 'react-router-config'
import routes from '../Routes'
import { convertCustomRouteConfig, ensureReady } from '../Helpers'

const routeConfig = convertCustomRouteConfig(routes)

// Hot-reloading
if (module.hot) {
  module.hot.accept()
}

if (typeof window !== 'undefined') {
  ensureReady(routeConfig).then(() => {
    const props = JSON.parse(document.getElementById('props').dataset.props) // eslint-disable-line
    const element = document.getElementsByClassName('todoapp')[0]

    if (
      'fetch' in window &&
      'Intl' in window &&
      'URL' in window &&
      'Map' in window &&
      'forEach' in NodeList.prototype &&
      'startsWith' in String.prototype &&
      'endsWith' in String.prototype &&
      'includes' in String.prototype &&
      'includes' in Array.prototype &&
      'assign' in Object &&
      'entries' in Object &&
      'keys' in Object
    ) {
      hydrate(
        <BrowserRouter>{renderRoutes(routeConfig, props)}</BrowserRouter>,
        element
      )
    } else {
      import('../Shared/polyfills').then(
        hydrate(
          <BrowserRouter>{renderRoutes(routeConfig, props)}</BrowserRouter>,
          element
        )
      )
    }
  })
}

export default function render2(location, props) {
  return ensureReady(routeConfig, location).then(() => (
    <StaticRouter context={{}} location={location}>
      {renderRoutes(routeConfig, props)}
    </StaticRouter>
  ))
}
