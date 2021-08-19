import React from 'react'
import './latest-news-list.css'
import { ArticleItem } from '../ArticleItem/ArticleItem'

export const ArticleLatestList = () => {
  return (
    <div className="latest-news__list spacing">
      <div className="latest-news__card">
        <ArticleItem
          isShowAuthorImg
        />
      </div>

      <div className="latest-news__card">
        <ArticleItem
          isShowAuthorImg
        />
      </div>

      <div className="latest-news__card">
        <ArticleItem
          isShowAuthorImg
        />
      </div>

    </div>
  )
}
