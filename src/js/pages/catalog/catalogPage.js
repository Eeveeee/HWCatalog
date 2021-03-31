const filterCheckboxes = document.querySelectorAll('.filter-checkbox')
const sortBySelector = document.querySelector('.sort-by-selector')

async function getData() {
  const response = await fetch('http://localhost:1488/bd.json', {
    method: 'GET',
  })
  if (!response.ok) {
    return
  }
  const data = await response.json()
  return data
}

function getCardHTML(img, title, info, price) {
  return `
  <div class="card">
  <div class="card-photo-wrapper">
  <img src="${img}" alt="" class="card-photo" />
  </div><div class='card-info'>
  <span class="card-title">${title}</span>
  <span class="card-specs">${info}</span>
  <span class="card-price"><span>Цена:</span> ${price} <span>Руб</span></span></div>
  </div>
  `
}

function renderCards(computersArr) {
  const cardsContainer = document.querySelector('.cards-container')
  cardsContainer.innerHTML = ''
  computersArr.forEach((card) => {
    cardsContainer.insertAdjacentHTML(
      'beforeend',
      getCardHTML(card.img, card.name, card.info, card.price)
    )
  })
}
function sortBy(by, cardsArrFiltered) {
  let sortedArr = cardsArrFiltered
  const cardsArr = []
  switch (by) {
    case 'DESC':
      sortedArr.sort((a, b) => a.price - b.price)
      break
    case 'ASC':
      sortedArr.sort((a, b) => b.price - a.price)

      break

    default:
      break
  }
  console.log(sortedArr)
  return cardsArrFiltered
}
function filter(types, by = 'DESC', computersArr) {
  const cardsArr = computersArr
  console.log(types)
  let cardsArrFiltered = []
  if (types) {
    if (typeof types === 'object') {
      console.log('obj!!')
      computersArr.forEach((computer) => {
        types.forEach((type) => {
          if (computer.keywords.includes(type)) {
            cardsArrFiltered.push(computer)
          }
        })
      })
    } else {
      console.log('string!!!')
      computersArr.forEach((computer) => {
        if (computer.keywords.includes(types)) {
          cardsArrFiltered.push(computer)
        }
      })
    }
  } else {
    cardsArrFiltered = computersArr
  }
  cardsArrFiltered = sortBy(by, cardsArrFiltered)
  console.log(cardsArrFiltered)
  renderCards(cardsArrFiltered)
}
export function catalogPage(render, addListener, changeLink, catalogPageHTML) {
  getData().then((res) => {
    const computersArr = res
    console.log(computersArr)
    render(catalogPageHTML)
    renderCards(computersArr)
    let filterRout = window.location.href.split('#')[2]
    filter(filterRout, 'DESC', computersArr)
  })
}
