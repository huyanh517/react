import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const TD = styled.td`
  padding-top: 20px !important;
`

export const UserList = ({ users }) => {
  const history = useHistory()
  
  const handleShowDetail = user => {
    history.push(`/user/${user.login}`)
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
                <button
                  onClick={() => handleShowDetail(user)}
                  className='btn btn-primary'
                  // to={`/user/${user.login}`}
                >
                  Show Details
                </button>
              </TD>
            </tr>
          ))
        }

      </tbody>
    </table>
  )
}
