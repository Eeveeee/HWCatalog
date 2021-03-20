export function errorPage(render, errorPageHTML, changeLink, callback) {
  changeLink('error')
  render(errorPageHTML)
  console.log(callback)
  callback()
}
