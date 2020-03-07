import HomePage from './news/pages/HomePage'
import NotFoundPage from './news/pages/NotFoundPage'
import ArticleListPage from './news/pages/ArticleListPage'
import App from './news/app'

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
