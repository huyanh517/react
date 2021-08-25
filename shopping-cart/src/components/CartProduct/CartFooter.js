import React from 'react'
import { useSelector } from 'react-redux'
import { calAmountItemInCart, calTotalPriceInCart } from './../../helper';

export const CartFooter = () => {

  const listItemCart = useSelector(state => state)

  return (
    <tfoot id="my-cart-footer">
      <tr>
        {!listItemCart && <th colSpan="6">Empty product in your cart</th>}
      </tr>
      <tr>
        <td colSpan="4">
          There are <b>{listItemCart && calAmountItemInCart(listItemCart)}</b> items in your shopping cart.
        </td>
        <td colSpan="2" className="total-price text-left">
          {listItemCart && calTotalPriceInCart(listItemCart)} USD
        </td>
      </tr>
    </tfoot>
  )
}
