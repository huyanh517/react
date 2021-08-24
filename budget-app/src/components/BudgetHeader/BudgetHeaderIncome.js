import React from 'react'
import { formatPrice } from '../../helper';

export const BudgetHeaderIncome = ({ total }) => {
  return (
    <div className="budget__income clearfix">
      <div className="budget__income--text">Income</div>
      <div className="right">
        <div className="budget__income--value">{formatPrice(total)}</div>
        <div className="budget__income--percentage">&nbsp;</div>
      </div>
    </div>
  )
}
