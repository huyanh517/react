import React from 'react'
import { LatestArticle } from './LastestArticle/LatestArticle'
import { NewArticle } from './NewArticle/NewArticle'
import { PopularArticle } from './PopularArticle/PopularArticle'

export const Main = () => {
  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <LatestArticle />
        <PopularArticle />
        <NewArticle />
      </div>
    </div>
  )
}
