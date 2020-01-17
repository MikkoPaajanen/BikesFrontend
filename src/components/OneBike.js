import React from 'react'

const OneBike = ({ bike, backToList }) => {
  console.log('bikesOne', bike)
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <button onClick={backToList}>Takaisin</button>
            </td>
          </tr>
          <tr>
            <td>{bike.brand}</td>
            <td>{bike.model}</td>
            <td>{bike.year}</td>
            <td>{bike.price}€</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OneBike