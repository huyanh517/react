import React from 'react'
import { ArticleItem } from '../ArticleItem/ArticleItem'

export const ArticleLatestList = () => {
  return (
    <div className="latest-news__list spacing">
      <div className="latest-news__card">
        <ArticleItem
          isShowButton={false}
          isShowAvatar={true}
          isShowDescription={false}
          isShowIcon={false}
          isStyleCard={false}
          isStyleRow={false}
        />
        
      </div>

      <div className="latest-news__card">
        <ArticleItem
          isShowButton={false}
          isShowAvatar={true}
          isShowDescription={false}
          isShowIcon={false}
          isStyleCard={false}
          isStyleRow={false}
        />
        
      </div>

      <div className="latest-news__card">
        <ArticleItem
          isShowButton={false}
          isShowAvatar={true}
          isShowDescription={false}
          isShowIcon={false}
          isStyleCard={false}
          isStyleRow={false}
        />
        
      </div>

    </div>
  )
}
