import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../../shared/Button/Button'
import { MainTitle } from '../../shared/MainTitle/MainTitle'
import { ArticleNewList } from './ArticleNewList'
import { actFetchArticleGeneralAsync } from './../../store/post/action';


export const ArticleNew = () => {

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const { list: posts, currentPage, totalPages } = useSelector(state => state.Post.articlePaging)

  const hasMorePost = currentPage < totalPages

  const clickHandler = () => {
    setLoading(true)
    dispatch(actFetchArticleGeneralAsync({
      currentPage: currentPage + 1
    }))
      .then(() => setLoading(false))
  }


  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle btnLabel="View More" >New Articles</MainTitle>

        <div className="tcl-row">
          <ArticleNewList posts={posts} />
        </div>

        {
          hasMorePost
          &&
          <div className="text-center">
            <Button
              type="primary"
              size="large"
              loading={loading}
              onClick={clickHandler}
            >
              Loading
            </Button>
          </div>
        }
      </div>
    </div>
  )
}
