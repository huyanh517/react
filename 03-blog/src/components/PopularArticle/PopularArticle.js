import React from 'react'
import { ListArticlePopular } from './ListArticle/ListArticlePopular'
import { TitlePopular } from './Title/TitlePopular'

export const PopularArticle = () => {
  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        <TitlePopular />
        <ListArticlePopular />
      </div>
    </div>
  )
}
