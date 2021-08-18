import React from 'react'
import { ArticleLatestList } from './ArticleLatestList'
import { Title } from './Title'

export const ArticleLatest = () => {
  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <Title />
        <ArticleLatestList />
      </div>
    </div>
  )
}
