import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { actGetDetailAsync } from '../actions'
import { IconLoading } from '../components/IconLoading'
import { UserDetail } from '../components/UserDetail'

export const UserDetailPage = () => {

  const userDetail = useSelector(state => state.detailUser)

  const { userName } = useParams()

  const dispatch = useDispatch()

  const [loadingUserDetail, setLoadingUserDetail] = useState(true)

  useEffect(() => {
    dispatch(actGetDetailAsync(userName))
      .then(() => {
        setTimeout(() => {
          setLoadingUserDetail(false)
        }, 0)
      })
  }, [dispatch, userName])

  if (loadingUserDetail) {
    return <IconLoading width='80' />
  }

  return (
    <UserDetail userDetail={userDetail} />
  )
}
