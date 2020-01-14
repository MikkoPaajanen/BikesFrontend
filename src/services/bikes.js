import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/bikes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log('response', response.data)
  return response.data
}

const create = async (newBike) => {
  const bikeToPost = {
    brand: newBike.brand,
    model: newBike.model,
    year: newBike.year,
    price: newBike.price
  }
  const response = await axios.put(baseUrl, bikeToPost)
  return response.data
}

export default { getAll, create }