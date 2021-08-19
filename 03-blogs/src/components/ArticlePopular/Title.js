import React from 'react'
import { Button } from '../../shared/Button/Button'

export const Title = () => {
  return (
    <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
      <h2>Popular Articles</h2>
      <Button type="default" value="View more" />
    </div>
  )
}
