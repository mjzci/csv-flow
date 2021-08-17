export * from './query'

export const getFirstError = e => {
  let errors = e?.response?.data?.errors
  if (!errors) {
    try {
      errors = JSON.parse(e?.response?.data?.message || '') || {}
    } catch (e) {
      return e?.response?.data?.message
    }
  }
  const firstErrors = {}

  Object.keys(errors).forEach(ek => { firstErrors[ek] = errors[ek][0] })

  return firstErrors
}

export const userAgentIsMobile = userAgent => {
  return new RegExp(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/).test(userAgent)
}
