import React from 'react'
import { formatPrice } from './../../helper';

export const BudgetHeaderRemain = ({ total }) => {
  return (
    <div className="budget__value">{formatPrice(total)}</div>
  )
}
