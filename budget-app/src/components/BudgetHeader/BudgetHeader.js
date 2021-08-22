import React from 'react'
import { TotalExpenses } from './TotalExpenses'
import { TotalIncome } from './TotalIncome'
import { TotalRemain } from './TotalRemain'

export const BudgetHeader = () => {
  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in <span className="budget__title--month">%Month%</span>:
        </div>

        <TotalRemain />

        <TotalIncome />

        <TotalExpenses />
      </div>
    </div>
  )
}
