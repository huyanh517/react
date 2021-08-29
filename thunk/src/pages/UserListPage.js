import React, { useEffect, useState } from 'react'
import { UserList } from '../components/UserList'
import { useDispatch, useSelector } from 'react-redux';
import { actGetDataAsync } from '../actions';
import { IconLoading } from '../components/IconLoading';

export const UserListPage = () => {

  const dispatch = useDispatch()

  const [loadingUser, setLoadingUser] = useState(false)

  const users = useSelector(state => state.listUsers)

  useEffect(() => {
    setLoadingUser(true)

    dispatch(actGetDataAsync())
      .then(() => {
        setLoadingUser(false)
      }, 250)
  }, [dispatch])

  if (loadingUser) {
    return (
        <IconLoading width='80' />
    )
  }

  return (
    <UserList users={users} />
  )
}
