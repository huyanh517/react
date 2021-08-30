import React from 'react'
import { ArticleItem } from '../ArticleItem/ArticleItem'

export const ArticlePopularList = ({ posts }) => {

  const postPopularLeftSide = []
  postPopularLeftSide.push(posts[0])
  postPopularLeftSide.push(posts[1])

  return (
    <>
      <div className="popular-news__list--left">
        <div className="popular-news__list--row">

          {
            postPopularLeftSide.map((post, index) => (
              <div className="popular-news__list--card" key={index} >
                <ArticleItem
                  post={post}
                  isShowAuthorImg
                  isShowCategories
                  isShowDescription
                  isShowStats
                  isStyleCard
                />
              </div>
            ))
          }

        </div>
      </div>
      <div className="popular-news__list--right">
        <div className="popular-news__list--row">
          <div className="popular-news__list--card">
            <ArticleItem
              post={posts[2]}
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
