import React from 'react'
import { Title } from '../ArticleLatest/Title'
import { ArticlePopularList } from './ArticlePopularList'

export const ArticlePopular = () => {
  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        {/* <!-- Main Title --> */}
        <Title />
        {/* <!-- End Main Title --> */}

        <div className="popular-news__list spacing">
          <ArticlePopularList />
        </div>
      </div>
    </div>
  )
}
