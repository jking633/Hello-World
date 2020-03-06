import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ArticleListPage from './pages/ArticleListPage'
import App from './app'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        path: '/articles/:id',
        ...ArticleListPage,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
]
