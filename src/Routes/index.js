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
    component: Grid,
    fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop()),
  },
]

export default routes
