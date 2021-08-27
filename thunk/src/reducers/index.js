import * as types from '../constants/index'

let initialState = {
  listUsers: []
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA_FROM_API:
      return {
        listUsers: action.payload.items
      }
  
    default:
      return state
  }
}