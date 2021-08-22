import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actSubmitForm } from './../../actions/index';
import classNames from 'classnames';

export const BudgetForm = () => {

  const dispatch = useDispatch()

  const [newItem, setNewItem] = useState({
    id: '',
    name: '',
    sign: '',
    price: 0
  })

  const handleChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    setNewItem({
      ...newItem,
      [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    let item = {
      id: newItem.id,
      name: newItem.name,
      sign: newItem.sign,
      price: newItem.price
    }
    dispatch(actSubmitForm(item))
  }

  const classSign = classNames('add__type', {
    'red-focus': newItem.sign === 'exp',
  })

  const classDesc = classNames('add__description', {
    'red-focus': newItem.sign === 'exp',
  })

  const classPrice = classNames('add__value', {
    'red-focus': newItem.sign === 'exp',
  })

  return (
    <>
      {/* <!-- Trường hợp chọn dấu - --> */}
      <div className="add">
        <div className="add__container">
          <form onSubmit={handleSubmit}>
            <select
              className={classSign}
              name="sign"
              onChange={handleChange}
            >
              <option value="">Sign</option>
              <option value="inc">+</option>
              <option value="exp">-</option>
            </select>
            <input
              type="text"
              name="name"
              className={classDesc}
              placeholder="Add description"
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              min="0"
              className={classPrice}
              placeholder="Value"
              onChange={handleChange}
            />
            <button className="add__btn red">
              <i className="ion-ios-checkmark-outline"></i>
            </button>

          </form>
        </div>
      </div>
    </>
  )
}
