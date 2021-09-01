
import CategoryService from './../../services/category';
import { handleHashCategoryById } from '../../helper'
// ACTION TYPES
export const ACT_FETCH_ALL_CATEGORIES = 'ACT_FETCH_ALL_CATEGORIES'

//ACTION

export const actFetchAllCategories = hashCategoryById => {
  return {
    type: ACT_FETCH_ALL_CATEGORIES,
    payload: {
      hashCategoryById
    }
  }
}

//ASYNC

export const actFetchAllCategoriesAsync = () => {
  return async dispatch => {
    try {
      const response = await CategoryService.getList()
      const categories = response.data
      const hashCategoryById = handleHashCategoryById(categories)
      dispatch(actFetchAllCategories(hashCategoryById))
    } catch (error) {

    }
  }
}