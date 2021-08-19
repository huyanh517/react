import React from 'react'
import { Button } from '../Button/Button'

export const MainTitle = ({ value, isShowButton }) => {
  return (
    <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
      <h2>{value}</h2>
      {isShowButton ? <Button type="default" value="View more" /> : null}
    </div>
  )
}
