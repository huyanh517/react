import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';

import { actGetDetail } from '../actions/index'
// import { IconLoading } from './IconLoading';
import { Link } from 'react-router-dom';

const TD = styled.td`
padding-top: 20px !important;
`

export const UserDetail = ({ userDetail }) => {

  const dispatch = useDispatch()

  const handleBack = () => {
    dispatch(actGetDetail(null))
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
          <th scope="row">{userDetail && userDetail.id}</th>
          <th>
            <img alt='anh' src={userDetail && userDetail.avatar_url} width='50' />
          </th>
          <TD>{userDetail && userDetail.login}</TD>
          <TD>{userDetail && userDetail.type}</TD>
          <TD>
            <Link
              onClick={handleBack}
              to='/'
              className='btn btn-primary'>
              Back 
            </Link>
          </TD>
        </tr>

      </tbody>
    </table>
  )
}
