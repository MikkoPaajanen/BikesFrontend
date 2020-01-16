import React from 'react'


const FilterBikes = ({filterBikes, bikes, handleBrandChange}) => {
  const brands = bikes.map(bike => bike.brand)
  brands.sort()
  const uniqueBrands = [...new Set(brands)]
  console.log('brands', uniqueBrands)
  return (
    <div>
      <h2>Haku</h2>
      <form onSubmit={filterBikes}>
        <select onChange={handleBrandChange} defaultValue=''>
          {uniqueBrands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
        </select>
        <div>
          <button type='submit'>Hae</button>
        </div>
      </form>
    </div>
  )
}

export default FilterBikes