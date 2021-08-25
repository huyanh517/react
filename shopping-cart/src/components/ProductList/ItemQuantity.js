import React from 'react'

export const ItemQuantity = ({ inStock, onChangeQuantityHandle }) => {
  
  const handleChangeQuantity = event => {
    onChangeQuantityHandle(Number(event.target.value))
  }

  return (
    <>
      {inStock ? <input
        onChange={handleChangeQuantity}
        defaultValue='0'
        name="quantity-product-1"
        type="number"
        min="1"
      /> : <span style={{color: 'red', fontSize: '18px', fontWeight: 'bolder'}}>Out of Stock</span>
      }
    </>
  )
}
