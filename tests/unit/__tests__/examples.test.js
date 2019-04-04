// Most basic test
const { getBrowserId, setLocProp } = require('../../../.jest/dom')

describe('it all starts here', () => {
  beforeEach(() => {
    let url
    let altUrl
    window.location.assign = jest.fn()
  })

  it('just works', () => {
    url = 'http://testing.com'
    window.location.assign(url)
    console.log('Browser:', getBrowserId())
    expect(global).toBeDefined()
    // expect(navigator.userAgent).toBe('Chrome')
    expect(window.location.assign).toBeCalledWith(url)
  })

  it('allows for creation of elements', () => {
    const element = document.createElement('div')
    expect(element).not.toBeNull()
  })

  it('setLocProp works ...', () => {
    setLocProp({
      origin: 'nike.com',
      protocol: 'https:',
      host: 'mytesthost',
      port: 3000,
    })

    // console.log('href:', window.location.href)
    // console.log('origin:', window.location.origin)
    // console.log('protocol:', window.location.protocol)
    // console.log('host', window.location.host)
    // console.log('hostname:', window.location.hostname)
    // console.log('port:', window.location.port)
    // console.log('pathname:', window.location.pathname)
    // console.log('search:', window.location.search)
    // console.log('hash:', window.location.hash)
  })
})
