import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { actGetDetailAsync } from '../actions'
import { IconLoading } from './IconLoading'

const TD = styled.td`
  padding-top: 20px !important;
`

export const UserList = ({ users }) => {

  const dispatch = useDispatch();

  const history = useHistory()

  const [loadingIdSelected, setLoadingIdSelected] = useState(0);

  const handleShowDetail = user => {
    
    if (loadingIdSelected !== 0) {
      return;
    }

    setLoadingIdSelected(user.id);

    dispatch(actGetDetailAsync(user.login))
      .then(() => {
        setLoadingIdSelected(0)
      })
  };

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
        {
          users.map(user => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <th>
                <img alt='anh' src={user.avatar_url} width='50' />
              </th>
              <TD>{user.login}</TD>
              <TD>{user.type}</TD>
              <TD>
                <Link
                  onClick={() => handleShowDetail(user)}
                  className='btn btn-primary'
                  to={`/user/${user.login}`}
                >
                  {loadingIdSelected === user.id && <IconLoading width='20' />}
                  Show Details
                </Link>
              </TD>
            </tr>
          ))
        }

      </tbody>
    </table>
  )
}
