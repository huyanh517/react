import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { ArticleNew } from '../../components/ArticleNews/ArticleNew';
import { ArticlePopular } from '../../components/ArticlePopular/ArticlePopular';
import { ArticleLatest } from './../../components/ArticleLatest/ArticleLatest';
import { actFetchArticleLatestAsync, actFetchArticlePopularAsync } from './../../store/post/action';

export const HomePage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actFetchArticleLatestAsync())
    dispatch(actFetchArticlePopularAsync())
  }, [dispatch])

  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleNew />
    </>
  )
}
