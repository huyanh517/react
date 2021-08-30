import React from 'react'
import './popular-news-list.css'
import { MainTitle } from '../../shared/MainTitle/MainTitle'
import { ArticlePopularList } from './ArticlePopularList'
import { useSelector } from 'react-redux'

export const ArticlePopular = () => {

  const posts = useSelector(state => state.Post.articlePopular)

  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">

        <MainTitle
          btnLabel='View More'
          className="custom"
        >
          Popular Articles
        </MainTitle>

        <div className="popular-news__list spacing">
          <ArticlePopularList posts={posts} />
        </div>
      </div>
    </div>
  )
}
