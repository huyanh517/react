import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { ArticleNew } from '../../components/ArticleNews/ArticleNew';
import { ArticlePopular } from '../../components/ArticlePopular/ArticlePopular';
import { ArticleLatest } from './../../components/ArticleLatest/ArticleLatest';
import { actFetchArticleLatestAsync, actFetchArticlePopularAsync, actFetchCategoriesAsync } from './../../store/post/action';

export const HomePage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actFetchArticleLatestAsync())
    dispatch(actFetchArticlePopularAsync())
    dispatch(actFetchCategoriesAsync())
  }, [dispatch])

  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleNew />
    </>
  )
}
