import React from 'react'
import './latest-news-list.css'
import { ArticleItem } from '../ArticleItem/ArticleItem'

export const ArticleLatestList = ({ posts }) => {
  return (
    <div className="latest-news__list spacing">

      {
        posts.map(post => (
          <div className="latest-news__card" key={post.id}>
            <ArticleItem
              isShowAuthorImg
              post={post}
            />
          </div>
        ))
      }

    </div>
  )
}
