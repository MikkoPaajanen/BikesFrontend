import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/images'

const create = async (img) => {
  const response = await axios.post(baseUrl, img)
  return response.data
}

export default { create }