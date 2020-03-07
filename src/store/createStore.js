import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../client/news/reducers'

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk))
  return store
}
