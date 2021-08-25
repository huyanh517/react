import React from 'react'
import { Item } from './Item';
import LIST_DATA from '../../data'

export const ProductList = () => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-primary">

        { LIST_DATA.map(item => (
          <Item
            key={item.id}
            id={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
            description={item.description}
            inStock={item.inStock}
            price={item.price}
          />
        ))}

      </div>
    </div>
  )
}
