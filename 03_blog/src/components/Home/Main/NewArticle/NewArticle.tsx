import React from 'react'
import { ButtonLoadMore } from '../LoadMoreBtn/ButtonLoadMore'
import { ListArticleNew } from './ListArticle/ListArticleNew'
import { TitleNew } from './Title/TitleNew'

export const NewArticle = () => {
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <TitleNew />
        <ListArticleNew />
        <ButtonLoadMore />
      </div>
    </div>
  )
}
