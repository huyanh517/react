import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { actDeleteItem } from '../../actions'

export const BudgetExpenses = () => {
  const items = useSelector(state => state.items)
  const dispatch = useDispatch()

  const itemExpenses = _.filter(items, item => item.sign === 'exp')

  const itemIncome = _.filter(items, item => item.sign === 'inc')
  
  const totalIncome = _.sumBy(itemIncome, item => parseInt(item.price))

  const handleClick = id => {
    dispatch(actDeleteItem(id))
  }  

  const itemExpense = itemExpenses.map(item => (
    <div className="item clearfix" key={item.id}>
      <div className="item__description">{item.name}</div>
      <div className="right clearfix">
        <div className="item__value">- {item.price}</div>
        <div className="item__percentage">{totalIncome && ((item.price/totalIncome)*100).toFixed(2)}%</div>
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
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>

      <div className="expenses__list">
        {itemExpense}
      </div>
    </div>
  )
}
