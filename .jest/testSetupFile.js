/**
 * @jest-environment jsdom
 */

require('./dom')

// window.testCtx = {
//   /**
//    * Allows for setting `window.location` props within tests
//    * @param {String} prop - The `location` prop you want to set.
//    * @param {String} val - The value of the prop.
//    */
//   location: function(prop, val){
//     Object.defineProperty(window.location, prop, {
//       writable: true,
//       value: val
//     });
//   },
//   /**
//    * Allows for setting `window.navigator` props within tests
//    * @param {String} prop - The `navigator` prop you want to set.
//    * @param {String} val - The value of the prop.
//    */
//   navigator: function(prop, val){
//     Object.defineProperty(window.navigator, prop, {
//       writable: true,
//       value: val
//     });
//   },
// };

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

  // const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>')
  // console.log('BeforeAll working firing ...')
  // global.dom = dom

  done()
})
