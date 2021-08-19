import React from 'react'
import { Button } from '../../shared/Button/Button'
import { IconLoading } from '../../shared/Button/IconLoading'
import { ArticleNewList } from './ArticleNewList'
import { Title } from './Title'

export const ArticleNew = () => {
  const clickHandler = () => {
    console.log("Test")
  }

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <Title />
        
        <div className="tcl-row">
          <ArticleNewList />
        </div>
     
        <div className="text-center">
          <Button
            type="primary"
            size="large"
            value="Load more"
            icon={<IconLoading />}
            onClick={clickHandler}
          />
        </div>
      </div>
    </div>
  )
}
