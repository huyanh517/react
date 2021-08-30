import * as types from '../constants'
import { PostService } from './../services/posts';

export const actGetPost = items => {
  return {
    type: types.FETCH_LIST_POST,
    payload: {
      items
    }
  }
}

export const actGetPostAsync = () => {
  return async dispatch => {
    try {
      
      const response = await PostService.getList()
      console.log(response)
      if (response.status === 200) {
        const posts = response.data
        dispatch(actGetPost(posts))
      }

    } catch (error) {
      console.log(error)
    }
  }
}