import React from 'react'
import { useSelector } from 'react-redux'
import { CartBodyItem } from './CartBodyItem'

export const CartBody = () => {

  const listItemCart = useSelector(state => state)
  console.log(listItemCart)

  return (
    <tbody id="my-cart-body">

      {listItemCart && listItemCart.map((item, index) => (
        <CartBodyItem
          index={index}
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
        />
      ))}

    </tbody>
  )
}
