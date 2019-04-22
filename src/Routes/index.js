import Home from '../Shared/home'
import Grid from '../Shared/grid'
import { fetchPopularRepos } from '../API'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/popular/:id',
    component: Grid, // try import() here to get a named chunk and track it
    fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop()),
  },
]

export default routes
