import queryString from 'query-string'

export const getQuery = history => queryString.parse(history.location.search)

export const updateQuery = ({ history, newParams, replace }) => {
  let newQuery = {}

  if (replace) {
    newQuery = newParams
  } else {
    newQuery = {
      ...getQuery(history),
      ...newParams
    }
  }

  history.replace(`${history.location.pathname}?${queryString.stringify(newQuery)}`)
}
