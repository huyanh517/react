import React from 'react'
import { Input } from '../shared/Input/Input'

export const DemoInput = () => {
  const inputChangeHandler = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className="tcl-container">
      <div className="tcl-col-4">
        <Input
          label="Username"
          placeHolder="Enter username"
          onChange={inputChangeHandler}
    
        />

        <Input
          label="Password"
          placeHolder="Enter password"
          type="password"
        />

        <Input
          type='search'
          placeHolder='Search articles here...'
        />
      </div>

    </div>
  )
}
