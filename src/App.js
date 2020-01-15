import React, { useState, useEffect } from 'react'
import NewBikeForm from './components/NewBikeForm'
import BikesList from './components/BikesList'
import bikeService from './services/bikes'
import { useField } from './hooks/index'
import './App.css'

const App = () => {
  const [ bikes, setBikes ] = useState([])
  const brand = useField('text')
  const model = useField('text')
  const year = useField('text')
  const price = useField('text')

  useEffect(() => {
    bikeService
      .getAll()
      .then(bikesDB => {
        setBikes(bikesDB)
      })
  }, [])
  console.log('bikes', bikes)

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
    brand.reset()
    model.reset()
    year.reset()
    price.reset()
  }
  
  return (
    <div className="app">
      <h1>Tervetuloa pyöräkauppaan!</h1>
      <p>
        Tämä on käytettyjen pyörien kauppapaikka. Täältä löydät niin käytetyt pyörät, kuin varusteetkin.
      </p>
      <NewBikeForm 
        brand={brand} model={model} year={year} price={price} addBike={addBike}
      />
      <BikesList bikes={bikes} />
    </div>
  )
}

export default App
