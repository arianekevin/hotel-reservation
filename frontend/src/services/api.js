import axios from 'axios'

const api = axios.create({
  baseURL: 'https://hotel-reservation-production-f672.up.railway.app/api'
})

export default api