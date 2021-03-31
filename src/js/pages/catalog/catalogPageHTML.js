const catalogPageHTML = `
<div class="catalog">
<div class="container">
  <div class="catalog-outer">
    <div class="catalog-filter">
      <select class="sort-by-selector">
        <option data-sort="highest" class="sort-by-option">
          По возрастанию
        </option>
        <option data-sort="lowest" class="sort-by-option">
          По убыванию
        </option>
      </select>
      <div class="filter-options">
        <label class="filter-option">
          <input
            data-sort="office"
            type="checkbox"
            class="filter-checkbox"
          />
          <div class="filter-name">Офисный</div>
        </label>
        <label class="filter-option">
          <input
            data-sort="gaming"
            type="checkbox"
            class="filter-checkbox"
          />
          <div class="filter-name">Игровой</div>
        </label>
        <label class="filter-option">
          <input
            data-sort="work"
            type="checkbox"
            class="filter-checkbox"
          />
          <div class="filter-name">Рабочая станция</div>
        </label>
      </div>
    </div>
    <div class="cards-container"></div>
  </div>
</div>
</div>
`
export default catalogPageHTML
