module.exports = async function () {
  /* setup.js */
  // const jsdom = require('jsdom')
  // const {
  //   JSDOM
  // } = jsdom
  // const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>')

  // let window

  // function copyProps(src, target) {
  //   Object.defineProperties(target, {
  //     ...Object.getOwnPropertyDescriptors(src),
  //     ...Object.getOwnPropertyDescriptors(target),
  //   })
  // }

  // beforeAll((done) => {
  //   window = new JSDOM(``, {
  //     runScripts: 'dangerously'
  //   }).window

  //   // const scriptEl = window.document.createElement('script')
  //   // scriptEl.textContent = srcFile
  //   // window.document.body.appendChild(scriptEl)
  //   done()
  // })

  // global.dom = dom
  // global.window = window
  // global.document = window.document
  // global.navigator = {
  //   userAgent: 'node.js',
  // }
  // global.requestAnimationFrame = function (callback) {
  //   return setTimeout(callback, 0)
  // }
  // global.cancelAnimationFrame = function (id) {
  //   clearTimeout(id)
  // }
  // copyProps(window, global)
}
