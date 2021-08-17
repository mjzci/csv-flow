import { client } from 'api'
import { getFirstError } from 'utils'

// export const getDevices = async (params) => {
//   try {
//     const { data } = await client.get('/api/csv', { params })
//     const { data: rows, perPage, total, currentPage } = data

export const importCsv = async (payload) => {
  try {
    const { data } = await client.post('/api/csv', payload)
    return data
  } catch (e) {
    return { errors: getFirstError(e) }
  }
}
