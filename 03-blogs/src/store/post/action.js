import PostService from "../../services/post"
import {mappingPostData} from '../../helper'
import { mappingCategoryData } from './../../helper/index';

//ACTION_TYPE
export const ACT_FETCH_ARTICLE_LATEST = 'ACT_FETCH_ARTICLE_LATEST'
export const ACT_FETCH_ARTICLE_POPULAR = 'ACT_FETCH_ARTICLE_POPULAR'
export const ACT_FETCH_CATEGORIES = 'ACT_FETCH_CATEGORIES'

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

export const actFetchCategories = items => {
  return {
    type: ACT_FETCH_CATEGORIES,
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

export const actFetchCategoriesAsync = () => {
  return async dispatch => {
    const response = await PostService.getListCategories()
    const categories = response.data.map(mappingCategoryData)
    dispatch(actFetchCategories(categories))
  }
}