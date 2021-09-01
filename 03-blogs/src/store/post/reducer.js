import { ACT_FETCH_ARTICLE_LATEST, ACT_FETCH_ARTICLE_POPULAR, ACT_FETCH_ARTICLE_GENERAL } from './action';

let initialState = {
  articleLatest: [],
  articlePopular: [],
  articlePaging: {
    list: [],
    currentPage: 1
  }
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

    case ACT_FETCH_ARTICLE_GENERAL:
      return {
        ...postState,
        articlePaging: {
          ...postState.articlePaging,
          list: action.payload.currentPage === 1
            ?
            action.payload.items
            : [
              ...postState.articlePaging.list,
              ...action.payload.items
            ],
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages
        }
      }

    default:
      return postState
  }
}

export default postReducer