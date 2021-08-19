import React from 'react'
import { ArticleItem } from '../../shared/ArticleItem/ArticleItem'
import { Button } from '../../shared/Button/Button'

export const ArticlePopularList = () => {
  return (
    <>
      <div className="popular-news__list--left">
        <div className="popular-news__list--row">
          <div className="popular-news__list--card">
            <ArticleItem
              isShowIcon={true}
              isShowDescription={true}
              isShowButton={true}
              isShowAvatar={true}
              isStyleRow={false}
              isStyleCard={true}
            />
          </div>

          <div className="popular-news__list--card">
            <ArticleItem
              isShowIcon={true}
              isShowDescription={true}
              isShowButton={true}
              isShowAvatar={true}
              isStyleRow={false}
              isStyleCard={true}
            />
          </div>

        </div>
      </div>
      <div className="popular-news__list--right">
        <div className="popular-news__list--row">
          <div className="popular-news__list--card">
            <ArticleItem
              isShowIcon={true}
              isShowDescription={true}
              isShowButton={true}
              isShowAvatar={true}
              isStyleRow={true}
              isStyleCard={true}
            />
          </div>

        </div>
      </div>
    </>
  )
}
