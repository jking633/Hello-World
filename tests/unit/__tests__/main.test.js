// Most basic test
var url
var altUrl

describe('it all starts here', () => {
  beforeEach(() => {
    window.location.assign = jest.fn()
  })

  it('works', () => {
    url = 'http://testing.com'
    window.location.assign(url)

    expect(global).toBeDefined()
    expect(window.location.assign).toBeCalledWith(url)
  })

  it('jsdom works', () => {
    const element = document.createElement('div')
    expect(element).not.toBeNull()
  })

  it('works with window.location.assign', done => {
    url = 'http://newTest.com'
    altUrl = 'http://localhost/test'
    window.location.assign(url)

    // console.log(window.document.querySelector('p').textContent)
    // console.log(location.origin) // http://mylocal
    // el = dom.window.document.querySelectorAll('p')[0]
    // console.log(el.innerHTML) // Hello

    expect(window.location.assign).toBeCalledWith('http://newTest.com')
    window.location.assign(altUrl)
    expect(window.location.assign).toBeCalledWith('http://localhost/test')

    done()
  })

  it('works with resizeTo', done => {
    // console.log(window.innerWidth)
    // console.log(window.innerHeight)
    expect(window.innerWidth).toBe(1024)
    expect(window.innerHeight).toBe(768)

    window.resizeTo(800, 1200)

    // console.log(window.innerWidth)
    // console.log(window.innerHeight)
    expect(window.innerWidth).toBe(800)
    expect(window.innerHeight).toBe(1200)

    done()
  })
})
