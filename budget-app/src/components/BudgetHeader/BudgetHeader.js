import React from 'react'
import { BudgetHeaderRemain } from './BudgetHeaderRemain';
import { BudgetHeaderIncome } from './BudgetHeaderIncome';
import { BudgetHeaderExpenses } from './BudgetHeaderExpenses';
import { useBudgetData } from './../../hooks/useBudgetData';

export const BudgetHeader = () => {
  
  const {
    totalRemain,
    totalPriceIncome,
    totalPriceExpenses,
    ratio
  } = useBudgetData()

  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in <span className="budget__title--month">%Month%</span>:
        </div>

        <BudgetHeaderRemain total={totalRemain} />

        <BudgetHeaderIncome total={totalPriceIncome} />

        <BudgetHeaderExpenses total={totalPriceExpenses} ratio={ratio} />

      </div>
    </div>
  )
}
