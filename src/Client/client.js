// import 'core-js/modules/es6.promise'
// import 'core-js/modules/es6.array.iterator'

import React from 'react'
import { hydrate } from 'react-dom'
import App from '../Shared/application'
import { BrowserRouter } from 'react-router-dom'

const element = document.getElementById('app')

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  element
)

module.hot.accept()
