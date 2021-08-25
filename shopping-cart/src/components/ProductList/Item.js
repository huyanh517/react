import React, { useState } from 'react'
import { ItemDescription } from './ItemDescription'
import { ItemPrice } from './ItemPrice'
import { ItemQuantity } from './ItemQuantity'
import { ItemThumbnail } from './ItemThumbnail'
import { ItemTitle } from './ItemTitle'

export const Item = ({
  id,
  thumbnail,
  title,
  description,
  inStock = false,
  price
}) => {

  const [quantity, setQuantity] = useState('')

  const handleChangeQuantity = quantityVal => setQuantity(quantityVal)
  
  return (
    <>
      <div className="panel-heading">
        <h1 className="panel-title">List Products</h1>
      </div>
      <div className="panel-body" id="list-product">

        <div className="media product">

          <ItemThumbnail thumbnail={thumbnail} />

          <div className="media-body">

            <ItemTitle title={title} />

            <ItemDescription description={description} />

            <ItemQuantity inStock={inStock} onChangeQuantityHandle={handleChangeQuantity} />

            <ItemPrice
              inStock={inStock}
              id={id}
              title={title}
              price={price}
              quantity={quantity}
            />

          </div>
        </div>
      </div>
    </>
  )
}
