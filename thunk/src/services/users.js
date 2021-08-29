import api from "./api"

export const UserService = {
  getList() {
    return api.get('/users')
  },

  getDetail(userName) {
    if (userName) {
      return api.get(`/users/${userName}`)
    } else {
      return api.get('/')
    }
  }
}