module.exports = async function () {
  /* setup.js */
  // const jsdom = require('jsdom')
  // const {
  //   JSDOM
  // } = jsdom
  // const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>')

  function copyProps(src, target) {
    Object.defineProperties(target, {
      ...Object.getOwnPropertyDescriptors(src),
      ...Object.getOwnPropertyDescriptors(target),
    })
  }

  // global.dom = dom
  global.window = window
  global.document = window.document
  global.navigator = {
    userAgent: 'node.js',
  }
  global.requestAnimationFrame = function (callback) {
    return setTimeout(callback, 0)
  }
  global.cancelAnimationFrame = function (id) {
    clearTimeout(id)
  }
  copyProps(window, global)
}