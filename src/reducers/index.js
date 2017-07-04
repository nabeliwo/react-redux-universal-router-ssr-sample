import { combineReducers } from 'redux'
import historyReducer from './history'

const rootReducer = combineReducers({
  routing: historyReducer
})

export default rootReducer
