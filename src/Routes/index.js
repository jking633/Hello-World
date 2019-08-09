import { generateAsyncRouteComponent } from '../Helpers'
import { fetchPopularRepos } from '../API'
// Select App
// import App from '../Github/app'
import Todo from '../Todo/app'

// 
// import Home from '../Shared/home'
// import Grid from '../Shared/grid'

export default [
  {
    path: parentRoute => `${parentRoute}/`,
    // component: import(/* webpackChunkName: "index" */ '../Todo/app'),
    component: Todo,
    routes: [

      // {
      //   path: parentRoute => `${parentRoute}/`,
      //   exact: true,
      //   component: generateAsyncRouteComponent({
      //     loader: () => import(/* webpackChunkName: "Home" */ '../Shared/home'),
      //   }),
      // },
      // {
      //   path: parentRoute => `${parentRoute}/popular/:id`,
      //   component: Grid, // try import() here to get a named chunk and track it
      //   // component: generateAsyncRouteComponent({
      //   //   loader: () => import(/* webpackChunkName: "Grid" */ '../Shared/grid'),
      //   // }),
      //   fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop()),
      // },
      {
        path: parentRoute => `${parentRoute}/`,
        exact: true,
        component: generateAsyncRouteComponent({
          loader: () => import(/* webpackChunkName: "[request]" */ '../Todo/all-todos'),
        }),
      },
      {
        path: parentRoute => `${parentRoute}/all`,
        component: generateAsyncRouteComponent({
          loader: () => import(/* webpackChunkName: "all-todos" */ '../Todo/all-todos'),
        }),
      },
      {
        path: parentRoute => `${parentRoute}/active`,
        component: generateAsyncRouteComponent({
          loader: () => import(/* webpackChunkName: "active-todos" */ '../Todo/active-todos'),
        }),
      },
      {
        path: parentRoute => `${parentRoute}/completed`,
        component: generateAsyncRouteComponent({
          loader: () => import(/* webpackChunkName: "completed-todos" */ '../Todo/completed-todos'),
        }),
      },
    ],
  },
]

/*
const LazyHome = universal(() => import("./views/Home/Home"), {
  resolve: () => require.resolveWeak('./views/Home/Home'),
  chunkName: 'views/Home/Home', // babel-plugin-dual-import automatically sets chunkName based on path
})

const LazyMissing = universal(() => import("./views/Missing/Missing"), {
  resolve: () => require.resolveWeak('./views/Missing/Missing'),
  chunkName: 'views/Missing/Missing', // babel-plugin-dual-import automatically sets chunkName based on path
})
*/
