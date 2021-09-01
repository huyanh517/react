import React from 'react'
import { ArticleItem } from '../ArticleItem/ArticleItem'

export const ArticleNewList = ({ posts }) => {
  return (
    <>

      {
        posts.map(post => (
          <div className="tcl-col-12 tcl-col-md-6" key={post.id}>
            <ArticleItem
              post={post}
              isStyleCard
            />
          </div>
        ))
      }

    </>
  )
}
