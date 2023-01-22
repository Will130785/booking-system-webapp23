import axios from 'axios'

const mainHttpInstance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    
  }
})

export default mainHttpInstance