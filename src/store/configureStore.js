import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import historyMiddleware from '../middlewares/history'
import rootReducer from '../reducers'

export default function configureStore(initialState, history) {
  const middlewares = applyMiddleware(
    createLogger(),
    historyMiddleware(history)
  )

  return createStore(
    rootReducer,
    initialState,
    compose(middlewares)
  )
}
