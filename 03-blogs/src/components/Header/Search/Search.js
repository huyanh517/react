import React, {useState} from 'react'
import { Input } from '../../../shared/Input/Input'

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
        <div className="header-search">
          <Input
            type="text"
            placeHolder="Search articles here ..."
            ariaLabel="Search"
            isShowIcon={true}
            isShowHidePassword={false}
            onChange={inputChangeHandler}
          />
        </div>
      </form>
    </div>
  )
}
