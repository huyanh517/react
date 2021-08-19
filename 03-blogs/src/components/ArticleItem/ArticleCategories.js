import React from 'react'
import { Button } from './../../shared/Button/Button';

export const ArticleCategories = () => {
  return (
    <ul className="article-item__categories">
      <li>
        <Button
          as='a'
          href='/'
          type='category'
        >
          News
        </Button>
      </li>

      <li>
        <Button
          as='a'
          href='/'
          type='category'
        >
          News
        </Button>
      </li>
      
    </ul>
  )
}
