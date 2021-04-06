export function addListener(elements, listener, callback) {
  if (elements instanceof NodeList) {
    elements.forEach((element) => {
      element.addEventListener(listener, callback)
    })
  } else if (elements instanceof HTMLElement) {
    elements.addEventListener(listener, callback)
  } else {
    throw new Error(`${elements} is not a NodeList or HTMLElement`)
  }
}
