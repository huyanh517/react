import { ACT_FETCH_ARTICLE_LATEST, ACT_FETCH_ARTICLE_POPULAR } from './action';

let initialState = {
  articleLatest: [],
  articlePopular: []
}

const postReducer = (postState = initialState, action) => {
  switch (action.type) {
    case ACT_FETCH_ARTICLE_LATEST:
      return {
        ...postState,
        articleLatest: action.payload.items
      }
       
    case ACT_FETCH_ARTICLE_POPULAR:
      return {
        ...postState,
        articlePopular: action.payload.items
      }
    
    default:
      return postState
  }
}

export default postReducer