import React from 'react'
import { Logo } from './Logo/Logo'
import { Menu } from './Menu/Menu'
import { Search } from './Search/Search'

export const Header = () => {
  return (
    <header id="header">
      <div className="tcl-container">
        <div className="tcl-row tcl-no-gutters header">
          <Logo />
          <Search />
          <Menu />
        </div>
      </div>
    </header>
  )
}
