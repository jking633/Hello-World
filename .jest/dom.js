/* eslint-disable */

window.testCtx = {
  /**
   * Allows for setting `window.location` props within tests
   * @param {String} prop - The `location` prop you want to set.
   * @param {String} val - The value of the prop.
   */

  location: options => {
    const location = JSON.stringify(window.location)
    delete window.location
    Object.defineProperty(window, 'location', {
      writable: true,
      value: Object.assign(JSON.parse(location), options),
    })
  },
  /**
   * Allows for setting `window.navigator` props within tests
   * @param {String} prop - The `navigator` prop you want to set.
   * @param {String} val - The value of the prop.
   */
  navigator: function(prop, val) {
    Object.defineProperty(window.navigator, prop, {
      writable: true,
      value: val,
    })
  },
}

const setLocProp = options => {
  const location = JSON.stringify(window.location)
  delete window.location
  Object.defineProperty(window, 'location', {
    writable: true,
    value: Object.assign(JSON.parse(location), options),
  })
}

/**
 *
 * @param {object} window global object
 * @param {array} srcArray files to load during beforeAll
 * Use like this:
 * const jQueryFile = fs.readFileSync("jquery.js", { encoding: "utf-8" })
 * const srcFile = fs.readFileSync("lib.js", { encoding: "utf-8" })
 * loadExternalScripts(window, [jQueryFile, srcFile])
 */
function loadExternalScripts(window, srcArray) {
  srcArray.forEach(src => {
    const scriptEl = window.document.createElement('script')
    scriptEl.textContent = src
    window.document.body.appendChild(scriptEl)
  })
}

/**
 * Not terribly useful but left in as an instructional on how
 * to create switch statement against an array
 *
 * Mostly not useful as we know that jsdom & puppteer will be
 * Chromium
 */

function getBrowserId() {
  const aKeys = ['MSIE', 'Firefox', 'Safari', 'Chrome', 'Opera']
  const sUsrAg = navigator.userAgent
  let nIdx = aKeys.length - 1

  for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--)
    switch (nIdx) {
    case 1:
      return 'MSIE'
      break
    case 2:
      return 'Firefox'
      break
    case 3:
      return 'Safari'
      break
    case 4:
      return 'Chrome'
      break
    case 5:
      return 'Opera'
      break
    default:
      return 'jsdom'
    }
}

module.exports = {
  getBrowserId,
  loadExternalScripts,
  setLocProp,
}
