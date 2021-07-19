import axios from "axios"

const signin = async (user) => {

  try {
    let response = await axios.post(`/api/signin`, user)
    return await response.data
  } catch (error) {
    return await error.response.data
  }
}


export default {
  signin
}