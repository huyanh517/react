import React from 'react'

export const ArticleStats = ({ viewCount }) => {
  return (
    <ul className="article-item__stats">
      <li>
        <i className="icons ion-ios-eye"></i>
        <span className="text">{viewCount} Views</span>
      </li>
    </ul>
  )
}
