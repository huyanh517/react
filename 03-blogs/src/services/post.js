
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
      page: 1,
      orderby: 'post_views'
    })
  },

  getArticleGeneral({
    perPage = 2,
    currentPage = 1
  } = {}) {
    return PostService.getList({
      per_page: perPage,
      page: currentPage
    })
  }

}

export default PostService