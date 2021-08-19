import React from 'react'
import { Button } from '../../shared/Button/Button'
import { MainTitle } from '../../shared/MainTitle/MainTitle'
import { ArticleNewList } from './ArticleNewList'


export const ArticleNew = () => {
  const clickHandler = () => {
    console.log("Test")
  }

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle btnLabel="View More" >New Articles</MainTitle>
        
        <div className="tcl-row">
          <ArticleNewList />
        </div>
     
        <div className="text-center">
          <Button
            type="primary"
            size="large"
            Loading
            onClick={clickHandler}
          >
            Loading
          </Button>
        </div>
      </div>
    </div>
  )
}
