function __isBrowser__() {
  return !!(typeof window !== 'undefined' && window.document)
}

function buildsTags(scripts) {
  if (scripts === 'undefined' || typeof scripts !== 'object') return

  try {
    const entries = scripts.app.js
    // prettier-ignore
    return entries.map(
      entry => `<script async src="js/${entry}"></script>`
    ).join('\n', '')
  } catch (error) {
    console.error(error)
  }
}

module.exports = { __isBrowser__, buildsTags }
