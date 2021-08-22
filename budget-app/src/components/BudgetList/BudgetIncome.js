import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash'
import { actDeleteItem } from '../../actions'

export const BudgetIncome = () => {

  const items = useSelector(state => state.items)
  const dispatch = useDispatch()

  const itemIncomes = _.filter(items, item => item.sign === 'inc')

  const handleClick = id => {
    dispatch(actDeleteItem(id))
  }

  const itemIncome = itemIncomes.map(item => (
    <div className="item clearfix" key={item.id}>
      <div className="item__description">{item.name}</div>
      <div className="right clearfix">
        <div className="item__value">+ {item.price}</div>
        <div className="item__delete">
          <button
            className="item__delete--btn"
            onClick={() => handleClick(item.id)}
          >
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
    </div>
  ))

  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>
      <div className="income__list">
        {itemIncome}
      </div>
    </div>
  )
}
