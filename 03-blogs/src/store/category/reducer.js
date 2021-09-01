
import { ACT_FETCH_ALL_CATEGORIES } from './action';

let initialState = {
  hashCategoryById: {}
}

const categoryReducer = (categoryState = initialState, action) => {

  switch (action.type) {
    case ACT_FETCH_ALL_CATEGORIES:
      return {
        ...categoryState,
        hashCategoryById: action.payload.hashCategoryById
      }
      
    default:
      return categoryState
  }

}

export default categoryReducer