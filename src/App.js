import React, { useState, useEffect } from 'react'
import NewBikeForm from './components/NewBikeForm'
import BikesList from './components/BikesList'
import bikeService from './services/bikes'
import './App.css'

const App = () => {
  const [ bikes, setBikes ] = useState([])

  useEffect(() => {
    bikeService
      .getAll()
      .then(bikesDB => {
        setBikes(bikesDB)
      })
  }, [])
  console.log('bikes', bikes)

  
  return (
    <div className="app">
      <h1>Tervetuloa pyöräkauppaan!</h1>
      <p>
        Tämä on käytettyjen pyörien kauppapaikka. Täältä löydät niin käytetyt pyörät, kuin varusteetkin.
      </p>
      <NewBikeForm />
      <BikesList bikes={bikes} />
    </div>
  )
}

export default App
