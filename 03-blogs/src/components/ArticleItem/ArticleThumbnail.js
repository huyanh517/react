import React from 'react'
import { Link } from 'react-router-dom'

export const ArticleThumbnail = ({ thumbnail, slugLink, title }) => {
  return (
    <div className="article-item__thumbnail">
      <Link to={slugLink}>
        <img
          src={thumbnail}
          alt={title}
        />
      </Link>
    </div>
  )
}
