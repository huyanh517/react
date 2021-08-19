import React from 'react'
import { ArticleItem } from '../ArticleItem/ArticleItem'

export const ArticlePopularList = () => {
  return (
    <>
      <div className="popular-news__list--left">
        <div className="popular-news__list--row">
          <div className="popular-news__list--card">
            <ArticleItem
              isShowAuthorImg
              isShowCategories
              isShowDescription
              isShowStats
              isStyleCard
            />
          </div>

          <div className="popular-news__list--card">
            <ArticleItem
              isShowAuthorImg
              isShowCategories
              isShowDescription
              isShowStats
              isStyleCard
            />
          </div>

        </div>
      </div>
      <div className="popular-news__list--right">
        <div className="popular-news__list--row">
          <div className="popular-news__list--card">
            <ArticleItem
              isShowAuthorImg
              isShowCategories
              isShowDescription
              isShowStats
              isStyleCard
              isStyleRow
            />
          </div>

        </div>
      </div>
    </>
  )
}
