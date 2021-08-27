import * as types from '../constants/index'
import { UserService } from './../services/users';

export const actGetData = items => {
  return {
    type: types.GET_DATA_FROM_API,
    payload: {
      items
    }
  }
}

export const actGetDataAsync = () => {
  return async dispatch => {
    try {
      const response = await UserService.getList()
      
      if (response.status === 200) {
        const users = response.data
        dispatch(actGetData(users))
      }
    }
    catch (error) {
      console.log(error)
    }
  }
}

export const actGetDetail = item => {
  return {
    type: types.GET_DETAIL_FROM_API,
    payload: {
      item
    }
  }
}

export const actGetDetailAsync = userName => {
  return async dispatch => {
    try {
      const response = await UserService.getDetail(userName)

      if (response.status === 200) {
        const userDetail = response.data
        dispatch(actGetDetail(userDetail))
      }
    } catch (error) {
      console.log('error', error)
    }
  }
}