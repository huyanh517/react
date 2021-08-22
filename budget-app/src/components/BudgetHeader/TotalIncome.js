import React from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'

export const TotalIncome = () => {
  const items = useSelector(state => state.items)

  const itemIncomes = _.filter(items, item => item.sign === 'inc')

  let totalIncome = _.sumBy(itemIncomes, item => parseInt(item.price))
  

  return (
    <div className="budget__income clearfix">
      <div className="budget__income--text">Income</div>
      <div className="right">
        <div className="budget__income--value">+ {totalIncome}</div>
        <div className="budget__income--percentage">&nbsp;</div>
      </div>
    </div>
  )
}
