import * as types from '../constants/ActionTypes'

export const actSubmitForm = (item) => {
  return {
    type: types.SUBMIT_FORM,
    item
  }
}

export const actDeleteItem = (id) => {
  return {
    type: types.DELETE_ITEM,
    id
  }
}