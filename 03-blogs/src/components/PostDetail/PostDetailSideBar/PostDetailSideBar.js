import React from 'react'
import { ArticleRelated } from '../../ArticleItem/ArticleRelated'
import { PostDetailAuthor } from './PostDetailAuthor'

export const PostDetailSideBar = () => {
  return (
    <div className="post-detail__side">

      <PostDetailAuthor />

      <div className="spacing" />

      <ArticleRelated />

    </div>
  )
}
