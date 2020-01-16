import React, { useState, useEffect } from 'react'
import NewBikeForm from './components/NewBikeForm'
import BikesList from './components/BikesList'
import FilterBikes from './components/FilterBikes'
import OneBike from './components/OneBike'
import LoginForm from './components/LoginForm'
import bikeService from './services/bikes'
import loginService from './services/login'
import { useField } from './hooks/index'
import './App.css'

const App = () => {
  const [ bikes, setBikes ] = useState([])
  const brand = useField('text')
  const model = useField('text')
  const year = useField('text')
  const price = useField('text')
  const [ searchBrand, setSearchBrand ] = useState('')
  const [ toShow, setToShow ] = useState(false)
  const [ bikeToShow, setBikeToShow ] = useState('')
  const [ showOne, setShowOne ] = useState(false)
  const [ addNew, setAddNew ] = useState(false)
  const [ buttonText, setButtonText ] = useState('Lisää pyörä')
  const username = useField('text')
  const password = useField('password')
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    bikeService
      .getAll()
      .then(bikesDB => {
        setBikes(bikesDB)
      })
  }, [])
  console.log('bikes', bikes)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      //bikeService.setToken(user.token)
    }
  }, [])

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

  const bikesToShow = () => {
    if (showOne) {
      return <OneBike bike={bikeToShow} backToList={backToList} />
    } else if (toShow === false) {
      return <BikesList bikes={bikes} bikeInfo={bikeInfo} />
    } else if (toShow === true) {
      console.log('what', bikes.filter(bike => bike.brand.includes(searchBrand)))
      return <BikesList bikes={bikes.filter(bike => bike.brand.includes(searchBrand))} bikeInfo={bikeInfo} />
    }
  }

  const filterBikes = (event) => {
    event.preventDefault()
    console.log('does this happen')
    setToShow(true)
  }
  
  const bikeInfo = (clickedBike) => {
    setBikeToShow(bikes.find(bike => bike.id === clickedBike.id))
    setShowOne(true)
  }

  const handleNewBikeForm = () => {
    if (addNew === false) {
      setAddNew(true)
      setButtonText('Sulje')
    } else {
      setAddNew(false)
      setButtonText('Lisää pyörä')
    }
  }

  const backToList = () => {
    setShowOne(false)
  }

  const handleBrandChange = ({target}) => {
    setSearchBrand(target.value)
    setToShow(false)
  }

  const clear = (event) => {
    event.preventDefault()
    setToShow(false)
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: username.value,
        password: password.value
      })
      window.localStorage.setItem(
        'loggedAppUser', JSON.stringify(user)
      )
      bikeService.setToken(user.token)
      setUser(user)
      username.reset()
      password.reset()
    } catch (exception) {
        console.log('wrong credentials')
    }
  }

  const logoutHandler = () => {
    setUser(null)
    window.localStorage.clear()
  }

  return (
    <div className="app">
      <h1>Tervetuloa pyöräkauppaan!</h1>
      <p>
        Tämä on käytettyjen pyörien kauppapaikka. Täältä löydät niin käytetyt pyörät, kuin varusteetkin.
      </p>
      {user !== null && <button onClick={logoutHandler}>Kirjaudu ulos</button>}
      {user === null && <LoginForm username={username} password={password} handleLogin={handleLogin} /> }
      {user !== null && <button onClick={handleNewBikeForm}>{buttonText}</button>}
      {addNew === true && <NewBikeForm 
      brand={brand} model={model} year={year} price={price} addBike={addBike}
      />}
      <FilterBikes 
      filterBikes={filterBikes} 
      bikes={bikes} 
      handleBrandChange={handleBrandChange}
      clear={clear}
      bikeInfo={bikeInfo}
      />
      <br/>
      {bikesToShow()}
    </div>
  )
}

export default App
