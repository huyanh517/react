import * as types from '../constants/index'

let initialState = {
  listUsers: [],
  detailUser: {}
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA_FROM_API:
      return {
        listUsers: action.payload.items
      }

    case types.GET_DETAIL_FROM_API:
      return {
        detailUser: action.payload.item
      }
    
    default:
      return state
  }
}