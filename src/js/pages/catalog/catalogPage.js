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
function filterCheckTypes(cardsArrFiltered, computer, types) {
  if (computer.keywords.includes(types)) {
    cardsArrFiltered.push(computer)
  }
}
function filter(types, by = 'DESC', computersArr) {
  const cardsArr = computersArr
  console.log(types)
  let cardsArrFiltered = []
  if (types) {
    if (Array.isArray(types)) {
      cardsArr.forEach((computer) => {
        types.forEach((type) => {
          filterCheckTypes(cardsArrFiltered, computer, type)
        })
      })
    } else {
      console.log('string!!!')
      cardsArr.forEach((computer) => {
        filterCheckTypes(cardsArrFiltered, computer, types)
      })
    }
    setCheckboxes(types)
  } else {
    cardsArrFiltered = cardsArr
    setCheckboxes()
  }
  cardsArrFiltered = sortBy(by, cardsArrFiltered)
  console.log(cardsArrFiltered)
  renderCards(cardsArrFiltered)
}
function setCheckboxes(types) {
  const checkboxes = document.querySelectorAll('.filter-checkbox')
  if (types) {
    if (Array.isArray(types)) {
      checkboxes.forEach((checkbox) => {
        if (types.includes(`${checkbox.dataset.sort}`)) {
          console.log('it is an array')
          checkbox.checked = true
        }
      })
    } else {
      checkboxes.forEach((checkbox) => {
        if (checkbox.dataset.sort === types) {
          console.log('it is 1 checkbox')
          checkbox.checked = true
        }
      })
    }
  } else {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true
    })
  }
}
function checkCheckboxes(checkboxes) {
  const typesArr = []
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      typesArr.push(checkbox.dataset.sort)
    }
  })
  if (!typesArr.length) {
    alert(
      'Необходимо выбрать хотя бы один тип сортировки, сортировка будет сброшена'
    )
    checkboxes.forEach((checkbox) => {
      typesArr.push(checkbox.dataset.sort)
      checkbox.checked = true
    })
  }
  return typesArr
}
function initCheckboxesListeners(addListener, changeLink, computersArr) {
  const checkboxes = document.querySelectorAll('.filter-checkbox')
  const checkedCheckboxes = []
  addListener(checkboxes, 'change', (e) => {
    filter(checkCheckboxes(checkboxes), 'DESC', computersArr)
  })
}
export function catalogPage(render, addListener, changeLink, catalogPageHTML) {
  getData().then((res) => {
    const computersArr = res
    console.log(computersArr)
    render(catalogPageHTML)
    renderCards(computersArr)
    let filterRout = window.location.href.split('&')[1]
    filter(filterRout, 'ASC', computersArr)
    initCheckboxesListeners(addListener, changeLink, computersArr)
  })
}
