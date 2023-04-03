import axios from 'axios'

const baseURL = 'http://192.168.100.19:8000'

export const apiHospitals = axios.create({ 
  baseURL
})