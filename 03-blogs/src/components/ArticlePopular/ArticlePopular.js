import React from 'react'

import { ArticlePopularList } from './ArticlePopularList'
import { Title } from './Title';

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
