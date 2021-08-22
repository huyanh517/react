import React from 'react'
import { useSelector } from 'react-redux';
import _ from 'lodash'

export const TotalExpenses = () => {

  const items = useSelector(state => state.items)

  const itemExpenses = _.filter(items, item => item.sign === 'exp')

  const itemIncome = _.filter(items, item => item.sign === 'inc')
  
  const totalExpenses = _.sumBy(itemExpenses, item => parseInt(item.price))

  const totalIncome = _.sumBy(itemIncome, item => parseInt(item.price))

  const ratio = totalIncome && ((totalExpenses/totalIncome)*100).toFixed(2)

  return (
    <div className="budget__expenses clearfix">
      <div className="budget__expenses--text">Expenses</div>
      <div className="right clearfix">
        <div className="budget__expenses--value">- {totalExpenses}</div>
        <div className="budget__expenses--percentage">{ratio}%</div>
      </div>
    </div>
  )
}
