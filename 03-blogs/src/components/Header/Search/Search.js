import React, { useState } from 'react'
import './search.css'
import { Input } from '../../../shared/Input/Input'
import { IconSearch } from '../../../shared/IconSearch';

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const inputChangeHandler = (event) => {
    setSearchValue(event.target.value)
  }
  console.log(searchValue)

  return (
    <div className="tcl-col-4">
      {/* <!-- Header Search --> */}
      <form action="/search.html" method="get">
        <Input
          type='search'
          placeholder='Search articles here...'
          onChange={inputChangeHandler}
          className="hello"
          Icon={<IconSearch />}
        />
      </form>
    </div>
  )
}
