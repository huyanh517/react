import * as types from '../constants/ActionTypes'

export const actAddToCart = item => {
  return {
    type: types.ADD_TO_CART,
    payload: item
  }
}

export const actDeleteItemCart = id => {
  return {
    type: types.DELETE_ITEM_CART,
    payload: id
  }
}

export const actUpdateItemCart = item => {
  return {
    type: types.UPDATE_ITEM_CART,
    payload: item
  }
}