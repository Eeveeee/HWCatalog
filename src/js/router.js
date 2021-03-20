import { homePage } from './pages/home/homePage'
import { errorPage } from './pages/error/errorPage'
import { catalogPage } from './pages/catalog/catalogPage'
import homePageHTML from './pages/home/homePageHTML'
import errorPageHTML from './pages/error/errorPageHTML'
import catalogPageHTML from './pages/catalog/catalogPageHTML'
import { render } from './render'
import { addListener } from './addListener'
const rout = window.location.href.split('/')
const routes = {
  '#home': homePage,
  '#catalog': catalogPage,
  '#catalog#gaming': catalogPage,
  '#catalog#work': catalogPage,
  '#catalog#office': catalogPage,
}
const routesHTML = {
  '#home': homePageHTML,
  '#catalog': catalogPageHTML,
  '#catalog#gaming': catalogPageHTML,
  '#catalog#work': catalogPageHTML,
  '#catalog#office': catalogPageHTML,
}
if (!rout[rout.length - 1]) {
  window.location.href = '#home'
}
function routCheck() {
  const currentRout = window.location.href.split('/')
  const newRout = currentRout[currentRout.length - 1]
  if (Object.keys(routes).includes(newRout)) {
    routes[newRout](render, addListener, changeLink, routesHTML[newRout])
  } else {
    errorPage(render, errorPageHTML, changeLink, () => {
      const btnGoHome = document.querySelectorAll('.btn-go-home')
      addListener(btnGoHome, 'click', () => {
        homePage(render, addListener, changeLink, homePageHTML)
      })
    })
  }
}
window.onhashchange = () => {
  routCheck()
}

function changeLink(link) {
  window.location.href = `#${link}`
}

routCheck()
