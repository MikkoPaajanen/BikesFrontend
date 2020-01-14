import React from 'react'
import NewBikeForm from './components/NewBikeForm'
import './App.css'

const App = () => {


  return (
    <div className="app">
      <h1>Tervetuloa pyöräkauppaan!</h1>
      <p>
        Tämä on käytettyjen pyörien kauppapaikka. Täältä löydät niin käytetyt pyörät, kuin varusteetkin.
      </p>
      <NewBikeForm />
    </div>
  )
}

export default App
