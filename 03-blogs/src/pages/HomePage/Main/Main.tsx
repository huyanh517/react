import React from 'react'
import { LatestArticle } from '../../../components/LastestArticle/LatestArticle'
import { NewArticle } from '../../../components/NewArticle/NewArticle'
import { PopularArticle } from '../../../components/PopularArticle/PopularArticle'


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
