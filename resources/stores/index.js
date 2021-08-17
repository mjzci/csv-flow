import { createStoreon } from 'storeon'
import common from './common'

const allStores = [common, user, tickets]

let combinedState = {}
const combinedActions = []

allStores.forEach((item) => {
  const { initialState, actions } = item

  combinedState = {
    ...combinedState,
    ...initialState
  }

  actions.forEach((item) => {
    combinedActions.push(item)
  })
})

const combinedStore = (store) => {
  store.on('@init', () => combinedState)

  combinedActions.forEach((item) => {
    const { name, cb } = item
    store.on(name, cb)
  })
}

const store = createStoreon([combinedStore])

export default store
