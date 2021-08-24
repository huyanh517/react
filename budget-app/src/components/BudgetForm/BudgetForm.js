import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actSubmitForm } from './../../actions/index';
import classNames from 'classnames';

export const BudgetForm = () => {

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    id: '',
    sign: '+',
    name: '',
    price: ''
  })


  const handleChange = event => {
    const target = event.target
    let value = target.value
    const name = target.name

    if (name === 'price' && value !== '') {
      value = Number(value)
    }

    if (value < 0) {
      return
    }

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!formData.name || !formData.price) {
      return
    }
    // let item = {
    //   id: formData.id,
    //   name: formData.name,
    //   sign: formData.sign,
    //   price: formData.price
    // }
    dispatch(actSubmitForm(formData))

    setFormData({
      id: '',
      sign: '+',
      name: '',
      price: ''
    })
  }

  const isShowRed = formData.sign === '-'

  return (
    <div className="add">
      <div className="add__container">
        <form onSubmit={handleSubmit}>
          <select
            className={classNames('add__type', {
              'red-focus': isShowRed
            })}
            value={formData.sign}
            onChange={handleChange}
            name='sign'
          >
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
          <input
            type="text"
            className={classNames('add__description', {
              'red-focus': isShowRed
            })}
            placeholder="Add description"
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="number"
            className={classNames('add__value', {
              'red-focus': isShowRed
            })}
            placeholder="Value"
            name='price'
            value={formData.price}
            onChange={handleChange}
          />
          <button className={classNames('add__btn', {
            'red': isShowRed
          })}>
            <i className="ion-ios-checkmark-outline"></i>
          </button>
        </form>
      </div>
    </div>
  )
}
