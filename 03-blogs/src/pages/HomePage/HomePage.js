import React from 'react'
import { useSelector } from 'react-redux';
import { ArticleNew } from '../../components/ArticleNews/ArticleNew';
import { ArticlePopular } from '../../components/ArticlePopular/ArticlePopular';
import { ArticleLatest } from './../../components/ArticleLatest/ArticleLatest';

export const HomePage = () => {

  const posts = useSelector(state => state.posts)
  console.log(posts)
  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleNew />
    </>
  )
}
