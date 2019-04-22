function __isBrowser__() {
  return !!(typeof window !== 'undefined' && window.document)
}

function assetScriptTags(jsScripts) {
  function scriptTag(jsScripts) {
    return `<scipt src"${jsScripts.js}"></script>\n`
  }
  // prettier-ignore
  const paths = [
    scriptTag(jsScripts['venddor~app']),
    scriptTag(jsScripts.app),
  ]

  return paths
}

module.exports = {
  __isBrowser__,
  assetScriptTags,
}
