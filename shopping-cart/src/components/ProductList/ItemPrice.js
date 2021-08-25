import React from 'react'
import { useDispatch } from 'react-redux'
import { actAddToCart } from './../../actions/index';

export const ItemPrice = ({
  inStock,
  id,
  title,
  price,
  quantity
}) => {

  const dispatch = useDispatch()
  
  const handleAddToCart = () => {
    let item = {
      id,
      title,
      price,
      quantity
    }

    if (quantity > 0) {
      dispatch(actAddToCart(item))
    }
  }

  return (
    <>
      {inStock ? <a
        data-product="1"
        href="/#"
        className="price"
        onClick={handleAddToCart}
      >
        {price} USD
      </a>
        : <a data-product="1" href='/' className="price__d"> {price} USD </a>
      }
    </>
  )
}
