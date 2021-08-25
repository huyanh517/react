import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actDeleteItemCart } from '../../actions'
import { actUpdateItemCart } from './../../actions/index';

export const CartBodyItem = ({
  id,
  index,
  title,
  quantity,
  price
}) => {

  const dispatch = useDispatch()
  const [quantityVal, setQuantityVal] = useState(quantity)

  const handleChangeQuantity = event => setQuantityVal(event.target.value)

  const handleDeleteItem = id => dispatch(actDeleteItemCart(id))


  let item = {
    id,
    title,
    quantity: quantityVal,
    price
  }
  const handleUpdateItem = () => {
    dispatch(actUpdateItemCart(item))
  }

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{title}</td>
      <td>{price} USD</td>
      <td>
        <input
          onChange={handleChangeQuantity}
          value={quantityVal}
          name="cart-item-quantity-1"
          type="number"
          min="1"
        />
      </td>
      <td><strong>{price * Number(quantityVal)} USD</strong></td>
      <td>
        <a
          className="label label-info update-cart-item"
          href="/#"
          data-product=""
          onClick={() => handleUpdateItem(item)}
        >Update</a
        >
        <a
          className="label label-danger delete-cart-item"
          href="/#"
          data-product=""
          onClick={() => handleDeleteItem(id)}
        >Delete</a
        >
      </td>
    </tr>
  )
}
