import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Button } from './../../shared/Button/Button';

export const ArticleCategories = ({ categories }) => {
  
  const cates = useSelector(state => state.Post.categories)

  const history = useHistory()

  const handleClick = category => {
    cates.map(cate => {
      if (cate.id === category) {
        history.push(`/category/${cate.slug}`)
      }
      return -1
    })
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
              {cates.map(cate => {
                if (cate.id === category) {
                  return cate.name
                }
                return ''
              })}
            </Button>
          </li>
        ))
      }

    </ul>
  )
}
