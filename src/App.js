import React, { useState, useEffect } from 'react'
import NewBikeForm from './components/NewBikeForm'
import BikesList from './components/BikesList'
import FilterBikes from './components/FilterBikes'
import OneBike from './components/OneBike'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import bikeService from './services/bikes'
import loginService from './services/login'
import registerService from './services/register'
import imageService from './services/images'
import { useField } from './hooks/index'
import './App.css'

const App = () => {
  const [ bikes, setBikes ] = useState([])
  const brand = useField('text')
  const model = useField('text')
  const year = useField('text')
  const price = useField('text')
  const location = useField('text')
  const description = useField('text')
  const [ searchBrand, setSearchBrand ] = useState('')
  const [ toShow, setToShow ] = useState(false)
  const [ bikeToShow, setBikeToShow ] = useState('')
  const [ showOne, setShowOne ] = useState(false)
  const [ addNew, setAddNew ] = useState(false)
  const [ buttonText, setButtonText ] = useState('Lisää pyörä')
  const username = useField('text')
  const password = useField('password')
  const firstname = useField('text')
  const lastname = useField('text')
  const newUserUsername = useField('text')
  const newUserPassword = useField('password')
  const [ user, setUser ] = useState(null)
  const [ showRegister, setShowRegister ] = useState(false)
  const [ showLogin, setShowLogin ] = useState(false)
  const [ regButton, setRegButton ] = useState('Rekisteröidy')
  const [ logButton, setLogButton ] = useState('Kirjaudu sisään')
  const [ image, setImage ] = useState(null)
  const [ showSearch, setShowSearch ] = useState(true)
  const [ type, setType ] = useState('')


  useEffect(() => {
    bikeService
      .getAll()
      .then(bikesDB => {
        setBikes(bikesDB)
      })
  }, [])
  console.log('bikes', bikes)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      bikeService.setToken(user.token)
    }
  }, [])

  const addBike = async (event) => {
    event.preventDefault()
    console.log('image', image)
    const data = new FormData()
    data.append('File', image)
    const returnedImage = await imageService.create(data)
    console.log('returnedImage', returnedImage)
    const newBike = {
      type: type,
      brand: brand.value,
      model: model.value,
      year: year.value,
      price: price.value,
      location: location.value,
      description: description.value,
      imgUrl: returnedImage
    }
    console.log('newbike', newBike)
    const returnedBike = await bikeService.create(newBike)
    setBikes(bikes.concat(returnedBike))
    brand.reset()
    model.reset()
    year.reset()
    price.reset()
    location.reset()
    description.reset()
    
    setAddNew(false)
    setButtonText('Lisää pyörä')
  }

  const handleImage = (event) => {
    console.log('event target files', event.target.files[0])
    setImage(event.target.files[0])
  }

  const bikesToShow = () => {
    console.log('user', user)
    const userToCheck = () => {
      if (user !== null) {
        return user.username
      } else {
        return 'testdude'
      }
    }
    if (showOne) {
      return <OneBike bike={bikeToShow} backToList={backToList} handleDelete={handleDelete} username={userToCheck()} />
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
    setShowSearch(false)
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

  const handleDelete = async (bikeToDelete) => {
    try {
      const deletedBike = await bikeService.removeBike(bikeToDelete)
      console.log('succesfully removed', deletedBike)
      setBikes(bikes.filter(bike => bike.id !== bikeToDelete.id))
      setShowOne(false)
    } catch (exception) {
      console.log('error')
    }
  }

  const backToList = () => {
    setShowOne(false)
    setShowSearch(true)
  }

  const handleBrandChange = ({target}) => {
    setSearchBrand(target.value)
    setToShow(false)
  }

  const handleTypeChange = ({target}) => {
    setType(target.value)
  }

  const clear = (event) => {
    event.preventDefault()
    setToShow(false)
  }

  const handleRegister = async (event) => {
    event.preventDefault()
    try {
      await registerService.createUser({
        firstname: firstname.value,
        lastname: lastname.value,
        username: newUserUsername.value,
        password: newUserPassword.value
      })
      firstname.reset()
      lastname.reset()
      newUserUsername.reset()
      newUserPassword.reset()
    } catch (exception) {
      console.log('something missing')
    }
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
      setShowLogin(false)
      username.reset()
      password.reset()
    } catch (exception) {
        console.log('wrong credentials')
    }
  }

  const logoutHandler = () => {
    setUser(null)
    window.localStorage.clear()
    setLogButton('Kirjaudu sisään')
  }

  const handleRegButton = () => {
    if (showRegister === false) {
      setShowRegister(true)
      setRegButton('Sulje rekisteröintilomake')
      setShowSearch(false)
    } else {
      setShowRegister(false)
      setRegButton('Rekisteröidy')
      setShowSearch(true)
      setShowLogin(false)
      setLogButton('Kirjaudu sisään')
    }
  }
  const handleLogButton = () => {
    if (showLogin === false) {
      setShowLogin(true)
      setLogButton('Sulje kirjautumislomake')
      setShowSearch(false)
    } else {
      setShowLogin(false)
      setLogButton('Kirjaudu sisään')
      setShowSearch(true)
      setShowRegister(false)
      setRegButton('Rekisteröidy')
    }
  }


  return (
    <div className="app">
      <div className='headerbackground'>
        <h1 className='header'>Tervetuloa pyöräkauppaan!</h1>
        <p className='info'>
          Tämä on käytettyjen pyörien kauppapaikka. Täältä löydät niin käytetyt pyörät, kuin varusteetkin.
        </p>
      </div>
      <div className='buttons'>
        {user === null && <button onClick={handleRegButton}>{regButton}</button>}
        {user === null && <button onClick={handleLogButton}>{logButton}</button>}
        {user !== null && showOne === false && <button onClick={handleNewBikeForm}>{buttonText}</button>}
        {user !== null && <button onClick={logoutHandler}>Kirjaudu ulos</button>}
      </div>
      <div className='logregforms'>
        {showRegister === true && <RegisterForm username={newUserUsername} password={newUserPassword} firstname={firstname} lastname={lastname} handleRegister={handleRegister}/>}
        {showLogin === true && <LoginForm username={username} password={password} handleLogin={handleLogin} /> }
      </div>
      <div className='newbikeform'>
        {addNew === true && <NewBikeForm 
          brand={brand} model={model} year={year} price={price} 
          addBike={addBike} handleImage={handleImage}
          location={location} description={description}
          handleTypeChange={handleTypeChange}
        />}
      </div>
      <div className='filterbikes'>
        {showSearch === true && <FilterBikes 
          filterBikes={filterBikes} 
          bikes={bikes} 
          handleBrandChange={handleBrandChange}
          clear={clear}
          bikeInfo={bikeInfo}
        />}
      </div>
      <div className='bikeslist'>
        {bikesToShow()}
      </div>
      <div className='footer'>
        <p className='footertext'>Copyright Mikko Paajanen 2020</p>
      </div>
    </div>
  )
}

export default App
