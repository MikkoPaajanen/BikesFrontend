import React from 'react'
import '../filterbikes.css'


const FilterBikes = ({
  filterBikes, 
  bikes, 
  handleBrandChange,
  clear
}) => {
  const brands = bikes.map(bike => bike.brand)
  brands.sort()
  const uniqueBrands = [...new Set(brands)]

  return (
    <div className='search'>
      <h2>Haku</h2>
      <form onSubmit={filterBikes}>
        <select className='brand' onChange={handleBrandChange} >
          <option key='-'>Merkki</option>
          {uniqueBrands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
        </select>
        <div>
          <button type='submit'>Hae</button> <button onClick={clear}>Tyhjennä haku</button>
        </div>
      </form>
    </div>
  )
}

export default FilterBikes