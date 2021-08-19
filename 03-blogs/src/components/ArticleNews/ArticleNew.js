import React from 'react'
import { Button } from '../../shared/Button/Button'
import { IconLoading } from '../../shared/Button/IconLoading'
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
          <Button
            className="btn-primary btn-size-large"
            value="Load more"
            icon={<IconLoading />} />
        </div>
      </div>
    </div>
  )
}
