import React from 'react'
import { Link } from 'react-router-dom'
import './logo.css'

export const Logo = () => {
  return (
    <div className="tcl-col-2">
      {/* <!-- Logo --> */}
      <div className="header-logo">
        <Link to="/">
          <img src="/assets/images/logo.png" alt="Go to homepage" />
        </Link>

      </div>
    </div>
  )
}
