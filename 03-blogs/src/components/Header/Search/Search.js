import React, { useState } from 'react'
import './search.css'
import { Input } from '../../../shared/Input/Input'
import { IconSearch } from '../../../shared/IconSearch';
import { useHistory } from 'react-router';

export const Search = () => {
  const [queryStr, setQueryStr] = useState("");

  const history = useHistory()

  const handleChange = event => {
    setQueryStr(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (!queryStr) {
      return
    }

    const queryStrURI = encodeURIComponent(queryStr)
    history.push(`/search?q=${queryStrURI}`)
  }

  return (
    <div className="tcl-col-4">
      {/* <!-- Header Search --> */}
      <form onSubmit={handleSubmit}>
        <Input
          type='search'
          placeholder='Search articles here...'
          onChange={handleChange}
          className="hello"
          icon={<IconSearch />}
        />
      </form>
    </div>
  )
}
