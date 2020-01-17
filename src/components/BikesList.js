import React from 'react'

const BikesList = ({ bikes, bikeInfo }) => {
  console.log('bikeslist', bikes)
  return (
    <div>
      {bikes.map(bike => (
        <table key={bike.id} onClick={() => bikeInfo(bike)} value={bike.id}>
          <tbody>
            <tr>
              <td>{bike.brand}</td>
              <td>{bike.model}</td>
              <td>{bike.year}</td>
              <td>{bike.price}€</td>
            </tr>
          </tbody>
        </table>))
      }
    </div>
  )
}

export default BikesList