import classNames from 'classnames'
import React from 'react'
import './article-item.css'
import { ArticleAuthorImg } from './ArticleAuthorImg'
import { ArticleAuthorName } from './ArticleAuthorName'
import { ArticleCategories } from './ArticleCategories'
import { ArticleDateTime } from './ArticleDateTime'
import { ArticleDescription } from './ArticleDescription'
import { ArticleStats } from './ArticleStats'
import { ArticleThumbnail } from './ArticleThumbnail'
import { ArticleTitle } from './ArticleTitle'

export const ArticleItem = (
  {
    isShowCategories,
    isShowStats,
    isShowAuthorImg,
    isShowDescription,
    isStyleCard,
    isStyleRow
  }) => {
  
  const classes = classNames('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow
  })
  
  return (
    <article className={classes}>
      <ArticleThumbnail />

      <div className="article-item__content">

        {isShowCategories && <ArticleCategories />}
        {isShowStats && <ArticleStats />}
        
        <ArticleTitle />
        
        {isShowDescription && <ArticleDescription />}

        <div className="article-item__info">
          
          {isShowAuthorImg && <ArticleAuthorImg />}

          <div className="article-item__info-right">
            <ArticleAuthorName />
            <ArticleDateTime />
          </div>
        </div>
      </div>
    </article>
  )
}
