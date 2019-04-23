export function isBrowser() {
  return !!(typeof window !== 'undefined' && window.document)
}

export function buildsTags(scripts) {
  if (scripts === 'undefined' || typeof scripts !== 'object') return

  try {
    const entries = scripts.app.js
    // prettier-ignore
    return entries.map(
      entry => `<script charset='utf-8' async src='js/${entry}'></script>`
    ).join('\n', '')
  } catch (error) {
    console.error(error)
  }
}

export function uuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`
}

export function pluralize(count, word) {
  return count === 1 ? word : `${word}s`
}

export function store(namespace, data) {
  if (typeof window !== 'undefined') {
    if (data) {
      return localStorage.setItem(namespace, JSON.stringify(data))
    }

    const store = localStorage.getItem(namespace)
    return (store && JSON.parse(store)) || []
  }
  return []
}
