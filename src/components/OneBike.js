import React from 'react'

const OneBike = ({ bike, backToList }) => {
  console.log('bikesOne', bike)
  const bikeUrl = bike.imgUrl
  return (
    <div>
      <div>
        <button onClick={backToList}>Takaisin</button>
      </div>
      <br/>
      <div>
        <img src={bikeUrl} alt='a bike'></img>
      </div>  
      <div>
        <div>
          {bike.brand}
        </div>
        <div>
          {bike.model}
        </div>
        <div>
          {bike.year}
        </div>
        <div>
          {bike.price}€
        </div>
      </div>
    </div>
  )
}

export default OneBike