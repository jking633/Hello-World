import 'core-js/modules/es6.promise'
import 'core-js/modules/es6.array.iterator'

import { BrowserRouter, StaticRouter } from 'react-router-dom'
import { render } from 'react-dom'
import React from 'react'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import { convertCustomRouteConfig, ensureReady } from './helpers'

const routeConfig = convertCustomRouteConfig(routes)

if (typeof window !== 'undefined') {
  ensureReady(routeConfig).then(() => {
    const props = JSON.parse(document.getElementById('props').dataset.props)
    // prettier-ignore
    render(
      (
        <BrowserRouter>
          { renderRoutes(routeConfig, props) }
        </BrowserRouter>
      ),
      document.getElementsByClassName('todoapp')[0],
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

// import 'core-js/modules/es6.promise'
// import 'core-js/modules/es6.array.iterator'

// // import React from 'react'
// // import { hydrate } from 'react-dom'
// // import App from '../Shared/application'
// // import { BrowserRouter } from 'react-router-dom'

// // const element = document.getElementById('app')

// // hydrate(
// //   <BrowserRouter>
// //     <App />
// //   </BrowserRouter>,
// //   element
// // )

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { BrowserRouter, StaticRouter } from 'react-router-dom'
// import { renderRoutes } from 'react-router-config'
// import { AppContainer } from 'react-hot-loader'
// import routes from './routes'
// import { convertCustomRouteConfig, ensureReady } from './helpers'

// const routeConfig = convertCustomRouteConfig(routes)
// const render = () => {
//   // ReactDOM.hydrate(
//   //   <AppContainer>
//   //   <BrowserRouter>
//   //     <Main />
//   //   </BrowserRouter>
//   //   </AppContainer>,
//   //   document.getElementById('app')
//   // );
//   ReactDOM.render(
//     (
//       <AppContainer>
//         <BrowserRouter>
//           { renderRoutes(routeConfig, props) }
//         </BrowserRouter>
//       </AppContainer>
//     ),
//     document.getElementsByClassName('todoapp')[0], // eslint-disable-line
//     // document.getElementById('app')
//   )
// }

// // Hot-reloading
// if (module.hot) {
//   module.hot.accept()
// }

// if (typeof window !== 'undefined') {
//   ensureReady(routeConfig).then(() => {
//     const props = JSON.parse(document.getElementById('props').dataset.props) // eslint-disable-line

//     if (
//       'fetch' in window &&
//       'Intl' in window &&
//       'URL' in window &&
//       'Map' in window &&
//       'forEach' in NodeList.prototype &&
//       'startsWith' in String.prototype &&
//       'endsWith' in String.prototype &&
//       'includes' in String.prototype &&
//       'includes' in Array.prototype &&
//       'assign' in Object &&
//       'entries' in Object &&
//       'keys' in Object
//     ) {
//       render()
//     } else {
//       import('./polyfills').then(render);
//     }
//   })
// }

// export default function render2(location, props) {
//   return ensureReady(routeConfig, location).then(() => (
//     <StaticRouter context={{}} location={location}>
//       {renderRoutes(routeConfig, props)}
//     </StaticRouter>
//   ))
// }
