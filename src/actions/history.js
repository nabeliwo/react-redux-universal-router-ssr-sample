export const PUSH = 'HISTORY_PUSH'
export const REPLACE = 'HISTORY_REPLACE'
export const GO = 'HISTORY_GO'
export const GO_BACK = 'HISTORY_GO_BACK'
export const GO_FORWARD = 'HISTORY_GO_FORWARD'
export const LOCATION_CHANGE = 'HISTORY_LOCATION_CHANGE'

export const push = href => ({
  type: PUSH,
  payload: href
})
export const replace = href => ({
  type: REPLACE,
  payload: href
})
export const go = index => ({
  type: GO,
  payload: index
})
export const goBack = () => ({
  type: GO_BACK
})
export const goForward = () => ({
  type: GO_FORWARD
})
export const locationChange = ({ pathname, search, hash }) => ({
  type: LOCATION_CHANGE,
  payload: {
    pathname,
    search,
    hash
  }
})
