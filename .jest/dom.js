window.testCtx = {
  /**
   * Allows for setting `window.location` props within tests
   * @param {String} prop - The `location` prop you want to set.
   * @param {String} val - The value of the prop.
   */

  // const windowLocation = JSON.stringify(window.location);
  // delete window.location;
  // Object.defineProperty(window.location, prop, {
  //   writable: true,
  //   value: JSON.parse(windowLocation),
  // });

  location: options => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: Object.assign({
        href: 'http://local',
        origin: 'local',
        protocol: 'http:',
        host: 'http://local',
        pathname: 'nike',
        port: '3000',
        search: '?=red',
        hash: '#help',
      }, options)
    })
  },
  /**
   * Allows for setting `window.navigator` props within tests
   * @param {String} prop - The `navigator` prop you want to set.
   * @param {String} val - The value of the prop.
   */
  navigator: function(prop, val){
    Object.defineProperty(window.navigator, prop, {
      writable: true,
      value: val
    })
  },
}


const setPathName = () => {
  const urlRoot = 'localTest'
  global.window = Object.create(window);
  Object.defineProperty(window, 'location', {
    value: {
      pathname: `${urlRoot}/more/stuff`,
    },
    writable: true,
  })
}

const setLocProp = (options) => {
  Object.defineProperty(window, 'location', {
    writable: true,
    value: Object.assign({}, options)
  })
}

module.exports = {
  setLocProp,
  setPathName
}