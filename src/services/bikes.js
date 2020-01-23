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

const create = async (newBike, data) => {
  const config = {
    headers: { Authorization: token }
  }

  data.append('type', newBike.type)
  data.append('brand', newBike.brand)
  data.append('model', newBike.model)
  data.append('year', newBike.year)
  data.append('price', newBike.price)
  data.append('location', newBike.location)
  data.append('contact', newBike.contact)
  data.append('description', newBike.description)
  const response = await axios.post(baseUrl, data, config)
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