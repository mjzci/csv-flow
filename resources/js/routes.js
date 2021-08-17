import {
  Csv, NotFound
} from './scenes'

const routes = [
  {
    path: '/import-csv',
    component: Csv,
    exact: true
  },
  {
    path: '/',
    component: NotFound
  }
]

export default routes
