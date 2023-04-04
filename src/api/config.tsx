import axios from 'axios'

const baseURL = 'http://192.168.100.19:8000'
const prod = import.meta.env.VITE_BACKEND_PROD

export const apiHospitals = axios.create({ 
  baseURL: prod
})