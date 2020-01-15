import React from 'react'
import bikeService from '../services/bikes'


const NewBike = ({
  brand,
  model,
  year,
  price,
  bikes,
  setBikes
}) => {

  const addBike = async (event) => {
    event.preventDefault()
    const newBike = {
      brand: brand.value,
      model: model.value,
      year: year.value,
      price: price.value
    }
    console.log('newbike', newBike)
    const returnedBike = await bikeService.create(newBike)
    setBikes(bikes.concat(returnedBike))
  }

  return (
    <form onSubmit={addBike}>
        <h2>Lisää pyörä</h2>
        <table>
          <tbody>
            <tr>
              <td>Merkki</td>
              <td><input {...brand}></input></td>
            </tr>
            <tr>
              <td>Malli</td>
              <td><input {...model}></input></td>
            </tr>
            <tr>
              <td>Vuosimalli</td>
              <td><input {...year}></input></td>
            </tr>
            <tr>
              <td>Hinta</td>
              <td><input {...price}></input></td>
            </tr>
            <tr>
              <td>
                <button type='submit'>Lähetä</button>
              </td>
            </tr>
          </tbody>        
        </table>
      </form>
  )
}

export default NewBike