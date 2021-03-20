export function addListener(elements, listener, callback) {
  switch (typeof elements) {
    case 'array':
    case 'object':
      elements.forEach((element) => {
        element.addEventListener(listener, callback)
      })
      break
    default:
      elements.addEventListener(listener, callback)
      break
  }
}
