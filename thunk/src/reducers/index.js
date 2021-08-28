import * as types from '../constants/index'

let initialState = {
  listUsers: [],
  detailUser: null
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USERS:
      return {
        ...state,
        listUsers: action.payload.items
      }

    case types.FETCH_USER_DETAIL:
      return {
        ...state,
        detailUser: action.payload.item
      }
    
    default:
      return state
  }
}