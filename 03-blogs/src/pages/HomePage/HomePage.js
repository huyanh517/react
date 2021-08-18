import React from 'react'
import { ArticleNew } from '../../components/ArticleNews/ArticleNew';
import { ArticlePopular } from '../../components/ArticlePopular/ArticlePopular';
import { ArticleLatest } from './../../components/ArticleLatest/ArticleLatest';

export const HomePage = () => {
  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleNew />
    </>
  )
}
