import React from 'react'
import './menu.css'

export const Menu = () => {
  return (
    <div className="tcl-col-6">
      {/* <!-- Nav --> */}
      <div className="header-nav">
        <ul className="header-nav__lists">
          <li>
            <a href="/#">Our Team</a>
            <ul>
              <li><a href="/#">Ninh {'<3'} </a></li>
              <li><a href="/#">Xơn</a></li>
              <li><a href="/#">Duy Manh</a></li>
            </ul>
          </li>
          <li><a href="/#">Login</a></li>
          {/* <li>
            <a href="/#">Contact</a>
            <ul>
              <li><a href="/#">Contact 1</a></li>
              <li><a href="/#">Contact 2</a></li>
              <li>
                <a href="/#">Contact 3</a>
                <ul>
                  <li><a href="/#">Contact 11</a></li>
                  <li><a href="/#">Contact 12</a></li>
                  <li><a href="/#">Contact 13</a></li>
                </ul>
              </li>
            </ul>
          </li> */}
        </ul>
        <ul className="header-nav__lists">
          <li className="user"><a href="login.html"><i className="icons ion-person"></i> Tài khoản</a></li>
        </ul>
      </div>
    </div>
 
  )
}
