import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const ArticleCategories = ({ categories }) => {

  const hashCategoryById = useSelector(state => state.Category.hashCategoryById)

  return (
    <ul className="article-item__categories">

      {
        categories.map(categoryId => {
          let category = hashCategoryById[categoryId]

          if (!category) {
            return null
          }

          return <li key={category.id}>
            <Link to={`/category/${category.slug}`} className='btn btn-category' >{category.name}</Link>
          </li>
        })
      }

    </ul>
  )
}
