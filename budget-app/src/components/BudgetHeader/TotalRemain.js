import React from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'

export const TotalRemain = () => {

  const items = useSelector(state => state.items)

  const itemExpenses = _.filter(items, item => item.sign === 'exp')

  const itemIncome = _.filter(items, item => item.sign === 'inc')
  
  const totalExpenses = _.sumBy(itemExpenses, item => parseInt(item.price))

  const totalIncome = _.sumBy(itemIncome, item => parseInt(item.price))

  const total = totalIncome - totalExpenses

  return (
    <div className="budget__value">{total}</div>
  )
}
