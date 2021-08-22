import React from 'react'
import { BudgetExpenses } from './BudgetExpenses'
import { BudgetIncome } from './BudgetIncome'

export const BudgetList = () => {
  return (
    <div className="container clearfix">
      <BudgetIncome />

      <BudgetExpenses />
    </div>
  )
}
