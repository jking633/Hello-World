import App from './app'
import { generateAsyncRouteComponent } from './helpers'

export default [
  {
    component: App,
    path: parentRoute => `${parentRoute}/`,
    routes: [
      {
        path: parentRoute => `${parentRoute}/`,
        exact: true,
        component: generateAsyncRouteComponent({
          loader: () => import(/* webpackChunkName: "[request]" */ './all-todos'),
        }),
      },
      {
        path: parentRoute => `${parentRoute}/all`,
        component: generateAsyncRouteComponent({
          loader: () => import(/* webpackChunkName: "all-todos" */ './all-todos'),
        }),
      },
      {
        path: parentRoute => `${parentRoute}/active`,
        component: generateAsyncRouteComponent({
          loader: () => import(/* webpackChunkName: "active-todos" */ './active-todos'),
        }),
      },
      {
        path: parentRoute => `${parentRoute}/completed`,
        component: generateAsyncRouteComponent({
          loader: () => import(/* webpackChunkName: "completed-todos" */ './completed-todos'),
        }),
      },
    ],
  },
]
