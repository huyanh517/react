import api from './api';

export const PostService = {
  getList() {
    return api.get('/wp/v2/posts')
  }
}

