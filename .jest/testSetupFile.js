/**
 * @jest-environment jsdom
 */

require('./dom')

beforeAll(done => {
  // Simulate window resize event
  const resizeEvent = document.createEvent('Event')
  resizeEvent.initEvent('resize', true, true)

  global.window.resizeTo = (width, height) => {
    global.window.innerWidth = width || global.window.innerWidth
    global.window.innerHeight = height || global.window.innerHeight
    global.window.dispatchEvent(resizeEvent)
  }

  const props = Object.getOwnPropertyNames(window)
    .filter(prop => typeof global[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(window, prop))

  Object.defineProperties(global, props)

  done()
})
