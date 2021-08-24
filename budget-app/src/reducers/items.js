import * as types from '../constants/ActionTypes'
import {v4 as uuidv4} from 'uuid'

let initState = []

export const items = (state = initState, action) => {
  let item = action.payload
  switch (action.type) {
    case types.SUBMIT_FORM:
      return [...state, {
        id: uuidv4(),
        name: item.name,
        price: item.sign === '+' ? item.price : item.price * (-1)
      }]
    
    case types.DELETE_BUDGET:
      state = state.filter(item => item.id !== action.payload)
      return [...state]
    
    default:
      return state
  }
}