import React from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from './../../shared/Button/Button';

export const ArticleCategories = ({ categories }) => {
  console.log(categories)

  const history = useHistory()

  const handleClick = category => {
    history.push(`/category/${category}`)
  }

  return (
    <ul className="article-item__categories">
      {
        categories.map((category, index) => (
          <li key={index}>
            <Button
              // as='a'            
              onClick={() => handleClick(category)}
              type='category'
            >
              News
            </Button>
          </li>
        ))
      }



    </ul>
  )
}
