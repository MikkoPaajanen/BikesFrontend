import React from 'react'
import '../bikeslist.css'

const BikesList = ({ bikes, bikeInfo }) => {
  console.log('bikeslist', bikes)
  return (
    <div className='table'>
      {bikes.map(bike => (
        <table  className='bikesdata' key={bike.id} onClick={() => bikeInfo(bike)} value={bike.id}>
          <tbody>
            <tr>
              <td className='image'>
                <img className='thumbnail' src={bike.imgUrl} alt='bike'></img>
              </td>
              <td className='bikesbrand'>{bike.brand}</td>
              <td className='bikesmodel'>{bike.model}</td>
              <td className='bikesyear'>{bike.year}</td>
              <td className='bikesprice'>{bike.price}€</td>
            </tr>
          </tbody>
        </table>))
      }
    </div>
  )
}

export default BikesList