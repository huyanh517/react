import * as types from '../constants/ActionTypes'
import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'

let initialState = []

export const items = (state = initialState, action) => {
  let id = null

  switch (action.type) {
    case types.DELETE_ITEM:
      id = action.id
      _.remove(state, item => item.id === id)
      return [...state]

    case types.SUBMIT_FORM:
      let { item } = action
      id = uuidv4()
      state.push({
        id,
        sign: item.sign,
        name: item.name,
        price: item.price
      })  
      return [...state]

    default:
      return state
  }
}