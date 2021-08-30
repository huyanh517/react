import React from 'react'
import { Link } from 'react-router-dom'

export const ArticleAuthorName = ({ name, authorLink }) => {
  return (
    <div className="article-item__author-name">
      <Link to={authorLink}>
        <strong>{name}</strong>
      </Link>
    </div>
  )
}
