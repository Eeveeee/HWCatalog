export function homePage(render, addListener, changeLink, homePageHTML) {
  changeLink('home')
  render(homePageHTML)
  const selectTypeButtons = document.querySelectorAll('.btn-pc-type')
  addListener(selectTypeButtons, 'click', (e) => {
    e.stopPropagation()
    const button = e.target
    if (button.dataset.type) {
      changeLink(`catalog#${button.dataset.type}`)
    } else {
      changeLink(`catalog`)
    }
  })
}
