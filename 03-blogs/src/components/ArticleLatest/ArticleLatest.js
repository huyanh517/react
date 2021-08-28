import React from 'react'
import { MainTitle } from '../../shared/MainTitle/MainTitle'
import { ArticleLatestList } from './ArticleLatestList'


export const ArticleLatest = () => {
  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle>Latest Articles</MainTitle>
        <ArticleLatestList />
      </div>
    </div>
  )
}
