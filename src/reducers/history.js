import { LOCATION_CHANGE } from '../actions/history'

const initialState = {
  pathname: '/',
  search: '',
  hash: ''
}

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return Object.assign({}, state, action.payload)

    default:
      return state
  }
}

export default historyReducer
