const jsdom = require('jsdom')
const {
  JSDOM
} = jsdom


beforeAll((done) => {

  const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>')
  console.log('BeforeAll working')
  global.dom = dom

  done()
})