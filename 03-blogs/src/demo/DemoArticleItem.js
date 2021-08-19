import React from 'react'
import { ArticleItem } from './../components/ArticleItem/ArticleItem';

export const DemoArticleItem = () => {
  return (
    <div className='tcl-container'>
      <div className='tcl-col-4'>
        <ArticleItem isShowAuthorImg />
      </div>
    </div>
  )
}
