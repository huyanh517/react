import api from "./api"

export const UserService = {
  getList() {
    return api.get('/users')
  },

  getDetail(userName) {
    return api.get(`/users/${userName}`)
  }
}