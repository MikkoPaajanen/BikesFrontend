import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/users'

const createUser = async (newUser) => {
  const userToCreate = {
    firstname: newUser.firstname,
    lastname: newUser.lastname,
    username: newUser.username,
    password: newUser.password
  }
  const response = await axios.post(baseUrl, userToCreate)
  return response.data
}

export default { createUser }