import React from 'react'
import { Link } from 'react-router-dom'
import { DEFAULT_AVATAR } from '../../constants'

export const ArticleAuthorImg = ({ avatar, name, authorLink }) => {
  return (
    <div className="article-item__author-image">
      <Link aria-label="John Doe" to={authorLink}>
        <img
          src={avatar || DEFAULT_AVATAR}
          alt={name}
        />
      </Link>
    </div>
  )
}
