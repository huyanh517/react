import React from 'react'
import { Link } from 'react-router-dom'

export const ArticleTitle = ({ title, slugLink }) => {
  return (
    <h2 className="article-item__title">
      <Link to={slugLink}
      >
        {title}
      </Link>
    </h2>
  )
}
