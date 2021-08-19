import React from 'react'
import { MainTitle } from '../shared/MainTitle/MainTitle'

export const DemoMainTitle = () => {
  return (
    <div className="tcl-container">
      <MainTitle
        btnLabel="View more"
        btnProps={{
          type: "primary"
        }}
      >
        Title 1
      </MainTitle>
      
      <MainTitle>Title 2</MainTitle>
    </div>
  )
}
