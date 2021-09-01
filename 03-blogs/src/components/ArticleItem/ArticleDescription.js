import React from 'react'

export const ArticleDescription = ({ shortDescHTML }) => {
  return (
    <p className="article-item__desc">
      {shortDescHTML}
    </p>
  )
}
