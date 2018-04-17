import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer'

export default(initialState) => {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(logger, thunk)
    )
  )
}
