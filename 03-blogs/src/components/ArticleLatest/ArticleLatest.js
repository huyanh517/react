import React from 'react'
import { useSelector } from 'react-redux'
import { MainTitle } from '../../shared/MainTitle/MainTitle'
import { ArticleLatestList } from './ArticleLatestList'

export const ArticleLatest = () => {
  const posts = useSelector(state => state.Post.articleLatest)
  
  return (
    <div className="latest-news section">
      <div className="tcl-container">

        <MainTitle>Latest Articles</MainTitle>

        <ArticleLatestList posts={posts} />
        
      </div>
    </div>
  )
}
