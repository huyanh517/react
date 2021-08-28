import React from 'react'
import { UserList } from '../components/UserList'

export const UserListPage = ({users}) => {
  return (
    <UserList users={users} />
  )
}
