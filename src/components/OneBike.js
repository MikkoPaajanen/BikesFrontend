import React from 'react'
import '../onebike.css'

const OneBike = ({ bike, backToList, handleDelete, username }) => {

  const bikeUrl = bike.imgUrl
  return (
    <div className='onebike'>
      <div>
        <button onClick={backToList}>Takaisin</button>
        {username !== null &&username === bike.user.username && <button onClick={() => handleDelete(bike)}>Poista</button>}
      </div>
      <br/>
      <div className='headinfo'>
        <div className='brandmodelyear'>{bike.brand} {bike.model} {bike.year}</div>
        <div className='price'> {bike.price}€</div>
      </div>
      <div>
        <img className='img' src={bikeUrl} alt='a bike'></img>
      </div>
      <div className='description'>
        {bike.description}
      </div>
      <div>
        Myyjä: {bike.user.firstname} {bike.user.lastname}
      </div>
      <div>
        Sijainti: {bike.location}
      </div>
      <div>
        Yhteydenotto: {bike.contact}
      </div>
    </div>
  )
}

export default OneBike