import React from 'react'
import '../bikeslist.css'

const BikesList = ({ bikes, bikeInfo }) => {
  console.log('bikeslist', bikes)
  return (
    <div className='table'>
      {bikes.map(bike => (
        <table  className='bikesdata' key={bike.id} value={bike.id}>
          <tbody>
            <tr>
              <th rowSpan='2' className='image'>
                <img className='thumbnail' src={bike.imgUrl} alt='bike' onClick={() => bikeInfo(bike)}></img>
              </th>
              <td className='bikesbrand'>{bike.brand}</td>
              <td className='bikesmodel'>{bike.model}</td>
              <td className='bikesyear'>{bike.year}</td>
              <td className='bikesprice'>{bike.price}€</td>
            </tr>
            <tr>
              <td className='bikeslocation'>{bike.location}</td>
              <td></td>
              <td></td>
              <td><button onClick={() => bikeInfo(bike)}>Lisätietoja</button></td>
            </tr>
          </tbody>
        </table>))
      }
    </div>
  )
}

export default BikesList