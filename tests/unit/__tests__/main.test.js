/**
 * @jest-environment jsdom
 */

// const {
//   JSDOM
// } = require('jsdom').JSDOM

// const jsdom = require('jsdom')
// const {
//   JSDOM
// } = jsdom
// const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>')
// const myFakeTopForTesting = 150

// console.log(dom.window.document.querySelector('p').textContent)

// Most basic test
describe('it all starts here', () => {
  it('works', () => {
    expect(global).toBeDefined()
  })

  it('works with JSDOM', done => {
    // jsdom.ResourceLoader()
    const myFakeTopForTesting = 150

    console.log(dom.window.document.querySelector('p').textContent)

    dom.reconfigure({
      windowTop: myFakeTopForTesting,
      url: 'https://example.com/',
      protocol: 'https',
    })

    done()
  })
})
