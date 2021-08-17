import axios from 'axios'
import camel from 'camelcase-keys'

const endpoint = process.env.API_URL

export const client = axios.create({
  withCredentials: false,
  baseURL: endpoint,
  headers: { 'Content-Type': 'multipart/form-data' }
})

client.interceptors.response.use(
  function (res) {
    return camel(res, { deep: true })
  },
  function (error) {
    return Promise.reject(error)
  }
)

export * from './csv'
