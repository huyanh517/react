
import api from './api';

const PostService = {
  getList(params) {
    return api.call().get('/wp/v2/posts', {
      params: {
        ...params,
        lang: 'vi'
      }
    })
  },

  getArticleLatest() {
    return PostService.getList({
      per_page: 3,
      page: 1
    })
  },

  getArticlePopular() {
    return PostService.getList({
      per_page: 3,
      page: 1
    })
  }
}

export default PostService