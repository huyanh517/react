import React from 'react'
import { formatPrice } from '../../helper';

export const BudgetHeaderExpenses = ({ total, ratio }) => {
  return (
    <div className="budget__expenses clearfix">
      <div className="budget__expenses--text">Expenses</div>
      <div className="right clearfix">
        <div className="budget__expenses--value">{formatPrice(total)}</div>
        <div className="budget__expenses--percentage">{ratio}%</div>
      </div>
    </div>
  )
}
