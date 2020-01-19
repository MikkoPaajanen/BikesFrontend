import React from 'react'
import '../onebike.css'

const OneBike = ({ bike, backToList }) => {
  console.log('bikesOne', bike)
  const bikeUrl = bike.imgUrl
  return (
    <div className='onebike'>
      <div>
        <button onClick={backToList}>Takaisin</button>
      </div>
      <br/>
      <div className='headinfo'>
        <table>
          <tbody>
            <tr>
              <td>{bike.brand}</td>
              <td>{bike.model}</td>
              <td>{bike.year}</td>
              <td>{bike.price}€</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <img className='img' src={bikeUrl} alt='a bike'></img>
      </div>  
    </div>
  )
}

export default OneBike