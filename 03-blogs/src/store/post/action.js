import PostService from "../../services/post"
import {mappingPostData} from '../../helper'

//ACTION_TYPE
export const ACT_FETCH_ARTICLE_LATEST = 'ACT_FETCH_ARTICLE_LATEST'
export const ACT_FETCH_ARTICLE_POPULAR = 'ACT_FETCH_ARTICLE_POPULAR'

//ACTION_SYNC
export const actFetchArticleLatest = items => {
  return {
    type: ACT_FETCH_ARTICLE_LATEST,
    payload: {
      items
    }
  }
}

export const actFetchArticlePopular = items => {
  return {
    type: ACT_FETCH_ARTICLE_POPULAR,
    payload: {
      items
    }
  }
}

//ACTION_ASYNC
export const actFetchArticleLatestAsync = () => {
  return async dispatch => {
    const response = await PostService.getArticleLatest()
    const posts = response.data.map(mappingPostData)
    dispatch(actFetchArticleLatest(posts))
  }
}

export const actFetchArticlePopularAsync = () => {
  return async dispatch => {
    const response = await PostService.getArticlePopular()
    const posts = response.data.map(mappingPostData)
    dispatch(actFetchArticlePopular(posts))
  }
}