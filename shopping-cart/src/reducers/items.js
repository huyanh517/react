import * as types from '../constants/ActionTypes'

let initialState = []

const getIndexItem = (prevState, payload) => {
  for (let i = 0; i < prevState.length; i++) {
    if (prevState[i].id === payload.id) {
      return i
    } else {
      return
    }
  }
}

export const items = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      let pos = getIndexItem(state, action.payload)

      if (pos > -1) {
        state[pos].quantity += action.payload.quantity
        return [...state]
      } else {
        return [...state, action.payload]
      }

    case types.DELETE_ITEM_CART:
      state = state.filter(item => item.id !== action.payload)
      return [...state]

    case types.UPDATE_ITEM_CART:
      let index = getIndexItem(state, action.payload)
      if (index > -1) {

        state[index].quantity = action.payload.quantity 
      }
      return [...state]

    default:
      break;
  }
}