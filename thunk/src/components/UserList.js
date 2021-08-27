import React from 'react'
import styled from 'styled-components'

const TD = styled.td`
  padding-top: 20px !important;
`

export const UserList = ({users, handleShowDetail}) => {
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
        {users.map(user => (
          <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <th>
              <img alt='anh' src={user.avatar_url} width='50' />
            </th>
            <TD>{user.login}</TD>
            <TD>{user.type}</TD>
            <TD>
              <a
                onClick={() => handleShowDetail(user.login)}
                href='/#'
                className='btn btn-primary'>
                Show Details
              </a>
            </TD>
          </tr>
        ))}

      </tbody>
    </table>
  )
}
