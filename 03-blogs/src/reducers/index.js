import * as types from '../constants'

let initialState = {
  posts: []
}

export const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.FETCH_LIST_POST:
      return {
        ...state,
        posts: action.payload.items
      }

    default:
      return state
  }

}