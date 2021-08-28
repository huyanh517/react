import React, {useState} from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';

import { actGetDetail, actGetDetailAsync } from '../actions/index'
import { IconLoading } from './IconLoading';

const TD = styled.td`
padding-top: 20px !important;
`

export const UserDetail = ({ userDetail }) => {

  const dispatch = useDispatch()

  const [loadingBack, setLoadingBack] = useState(false)

  const handleBack = () => {
    setLoadingBack(true)
    
    dispatch(actGetDetailAsync())
      .then(() => {
        dispatch(actGetDetail(null))
        setLoadingBack(false)
      })
    
  }

  return (
    <table className="table mt-5 table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Avatar</th>
          <th scope="col">Username</th>
          <th scope="col">User Type</th>
          <th scope="col">User Link Github</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <th scope="row">{userDetail.id}</th>
          <th>
            <img alt='anh' src={userDetail.avatar_url} width='50' />
          </th>
          <TD>{userDetail.login}</TD>
          <TD>{userDetail.type}</TD>
          <TD>
            <a
              onClick={handleBack}
              href='/#'
              className='btn btn-primary'>
              {loadingBack && <IconLoading width='20' />}
              Back
            </a>
          </TD>
        </tr>

      </tbody>
    </table>
  )
}
