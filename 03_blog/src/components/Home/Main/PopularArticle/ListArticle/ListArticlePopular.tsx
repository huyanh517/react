import React from 'react'
import { ListArticlePopularLeft } from './ListArticlePopularLeft'
import { ListArticlePopularRight } from './ListArticlePopularRight'

export const ListArticlePopular = () => {
  return (
    <div className="popular-news__list spacing">
      <ListArticlePopularLeft />
      <ListArticlePopularRight />
    </div>
  )
}
