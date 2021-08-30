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
import { formatDescription } from './../../helper/index';

export const ArticleItem = (
  {
    isShowCategories,
    isShowStats,
    isShowAuthorImg,
    isShowDescription,
    isStyleCard,
    isStyleRow,
    post,
   
  }) => {

  const classes = classNames('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow
  })

  if (!post) {
    return null
  }

  const { title, thumbnail, author, created, slug, authorId, description, categories, viewCount } = post

  const { nickname, avatar } = author

  const slugLink = '/post/' + slug

  const authorLink = '/user/' + authorId

  return (
    <article className={classes}>
      <ArticleThumbnail
        thumbnail={thumbnail}
        slugLink={slugLink}
        title={title}
      />

      <div className="article-item__content">

        {isShowCategories && <ArticleCategories categories={categories} />}
        {isShowStats && <ArticleStats viewCount={viewCount} />}

        <ArticleTitle title={title} slugLink={slugLink} />

        {isShowDescription && <ArticleDescription description={formatDescription(description)} />}

        <div className="article-item__info">

          {isShowAuthorImg && <ArticleAuthorImg
            avatar={avatar} name={nickname}
            authorLink={authorLink}
          />}

          <div className="article-item__info-right">
            <ArticleAuthorName name={nickname} authorLink={authorLink} />
            <ArticleDateTime created={created} />
          </div>
        </div>
      </div>
    </article>
  )
}
