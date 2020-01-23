import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/bikes'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (newBike) => {
  const config = {
    headers: { Authorization: token }
  }
  const bikeToPost = {
    type: newBike.type,
    brand: newBike.brand,
    model: newBike.model,
    year: newBike.year,
    price: newBike.price,
    location: newBike.location,
    contact: newBike.contact,
    description: newBike.description,
    imgUrl: newBike.imgUrl
  }
  const response = await axios.post(baseUrl, bikeToPost, config)
  return response.data
}

const removeBike = async (bikeToDelete) => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.delete(`${baseUrl}/${bikeToDelete.id}`, config)
  return response.data
}

export default { getAll, create, setToken, removeBike }