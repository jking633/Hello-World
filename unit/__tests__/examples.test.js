// Most basic test
const { setPathName, setLocProp } = require('../../.jest/dom')

describe('it all starts here', () => {
  beforeEach(() => {
    let url
    let altUrl
    // window.location.assign = jest.fn()
  })

  it('dom works ...', () => {
    // global.testCtx.location('protocol', 'http:')

    global.testCtx.location({
      // href: 'http://local',
      // origin: 'locals',
      // protocol: 'https:',
      // host: 'http://locals',
      // pathname: 'nike',
      port: '5000',
      // search: '?=red',
      // hash: '#help',
    })

    global.testCtx.location({ href: 'http://locals' })

    // setPathName()

    // setLocProp({
    //   href: 'http://local',
    //   origin: 'local',
    //   protocol: 'https:',
    //   host: 'http://local',
    //   pathname: 'nike',
    //   port: '3000',
    //   search: '?=red',
    //   hash: '#help',
    // })

    console.log('href:', window.location.href)
    // console.log('origin:', window.location.origin)
    // console.log('protocol:', window.location.protocol)
    // console.log('host', window.location.host)
    // console.log('hostname:', window.location.hostname)
    // console.log('port:', window.location.port)
    // console.log('pathname:', window.location.pathname)
    // console.log('search:', window.location.search)
    // console.log('hash:', window.location.hash)
  })

  // it('just works', () => {
  //   url = 'http://testing.com'
  //   window.location.assign(url)
  //   expect(global).toBeDefined()
  //   expect(window.location.assign).toBeCalledWith(url)
  // })

  // it('allows for creation of elements', () => {
  //   const element = document.createElement('div')
  //   expect(element).not.toBeNull()
  // })

  // it('works with JSDOM', done => {
  //   url = 'http://newTest.com'
  //   altUrl = 'http://localhost/test'
  //   window.location.assign(url)
  //   // jsdom.ResourceLoader()
  //   const myFakeTopForTesting = 150

  //   // console.log(window.document.querySelector('p').textContent)

  //   // dom.reconfigure({
  //   //   // windowTop: myFakeTopForTesting,
  //   //   // url: 'https://example.com/',
  //   //   protocol: 'https',
  //   // })

  //   // console.log(dom.window.location.href) // http://www.test.com/
  //   console.log(location.origin) // http://mylocal

  //   // el = dom.window.document.querySelectorAll('p')[0]

  //   // console.log(el.innerHTML) // Hello
  //   console.log(window.innerWidth)
  //   console.log(window.innerHeight)

  //   // dom.reconfigure({
  //   //   // windowTop: myFakeTopForTesting,
  //   //   url: 'https://example.com/',
  //   //   // protocol: 'https',
  //   // })

  //   // window.resizeTo(800, 1200)

  //   // dom.reconfigure({
  //   //   // windowTop: myFakeTopForTesting,
  //   //   url: 'http://tests.com/',
  //   //   protocol: 'https',
  //   // })

  //   console.log(location.origin) // http://mylocal
  //   // console.log(dom.window.location.href) // https://example.com/
  //   console.log(window.location.href) // http://mylocal/

  //   console.log(window.innerWidth)
  //   console.log(window.innerHeight)

  //   // dom.reconfigure({
  //   //   windowTop: myFakeTopForTesting,
  //   //   url: 'https://example.com/',
  //   //   protocol: 'https',
  //   // })

  //   console.log(location.origin) // http://mylocal
  //   // console.log(dom.window.location.href) // https://example.com/
  //   console.log(window.location.href) // http://mylocal/
  //   expect(window.location.assign).toBeCalledWith('http://newTest.com')
  //   // jest.dom.reconfigure({
  //   //   url: 'https://www.jsdom.com/',
  //   //   protocol: 'https:',
  //   // })

  //   window.location.assign(altUrl)

  //   console.log(location.origin) // http://mylocal
  //   // console.log(dom.window.location.href) // https://example.com/
  //   console.log(window.location.href) // http://mylocal/
  //   // console.log(window.location)
  //   expect(window.location.assign).toBeCalledWith('http://localhost/test')
  //   done()
  // })

  // it('should not fail', () => {
  // jsdom.reconfigure({
  //   url: 'https://www.example.com/',
  // })
  // })
})
