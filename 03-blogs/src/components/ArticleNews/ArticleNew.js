import React from 'react'
import { Button } from '../../shared/Button/Button'
import { ArticleNewList } from './ArticleNewList'
import { Title } from './Title'

export const ArticleNew = () => {
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* <!-- Main Title --> */}
        <Title />
        {/* <!-- End Main Title --> */}

        {/* <!-- End Row News List --> */}
        <div className="tcl-row">
          <ArticleNewList />
        </div>
        {/* <!-- End Row News List --> */}

        {/* <!-- Btn Loadmore --> */}
        <div className="text-center">
          <Button />
        </div>
      </div>
    </div>
  )
}
