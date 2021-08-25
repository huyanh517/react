import React from 'react'
import "./footer.css"

export const Footer = () => {
  return (
    <footer id="footer" className="bg-white">
      <div className="tcl-container">
        <div className="footer">
          <div className="tcl-row">
            {/* <!-- Footer Column --> */}
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
              
              <p>© 2020, All Rights Reserved.</p>
              <p>
                Created by
                <a href="https://www.facebook.com/huyanh1598/" target="_blank"
                >Duy Manh</a>
              </p>
            </div>

            {/* <!-- Footer Column --> */}
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-2">
              <div className="footer-title">
                <p>Categories</p>
              </div>
              <ul className="footer-content__list">
                <li><a href="/#">ReactJs</a></li>
                <li><a href="/#">Javascript</a></li>
                <li><a href="/#">Angular</a></li>
                <li><a href="/#">HTML, HTML5</a></li>
              </ul>
            </div>

            {/* <!-- Footer Column --> */}
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
              <div className="footer-title">
                <p>Liên hệ</p>
              </div>
              <ul className="footer-content__list">
                <li>
                  219/78 Trần Văn Đang - Hà Nội
                </li>
                <li>0343 261 825</li>
              </ul>
            </div>

            {/* <!-- Footer Column --> */}
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-4">
              <div className="footer-title">
                <p>Fanpage</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
