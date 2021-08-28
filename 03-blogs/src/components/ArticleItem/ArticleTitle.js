import React from 'react'
import { Link } from 'react-router-dom'

export const ArticleTitle = () => {
  return (
    <h2 className="article-item__title">
      <Link to="/post/detail"
      >Only Someone Who's Seen The Mummy Will Pass This
      </Link>
    </h2>
  )
}
