export function __isBrowser__() {
  return !!(typeof window !== 'undefined' && window.document)
}
