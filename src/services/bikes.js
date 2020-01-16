import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/bikes'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log('response', response.data)
  return response.data
}

const create = async (newBike) => {
  const config = {
    headers: { Authorization: token }
  }
  const bikeToPost = {
    brand: newBike.brand,
    model: newBike.model,
    year: newBike.year,
    price: newBike.price
  }
  const response = await axios.post(baseUrl, bikeToPost, config)
  return response.data
}

export default { getAll, create, setToken }