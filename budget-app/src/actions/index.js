import * as types from '../constants/ActionTypes'

export const actSubmitForm = (item) => {
  return {
    type: types.SUBMIT_FORM,
    payload: item
  }
}

export const actDeleteBudget = id => {
  return {
    type: types.DELETE_BUDGET,
    payload: id
  }
}