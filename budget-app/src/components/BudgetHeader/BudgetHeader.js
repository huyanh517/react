import React from 'react'

import { useSelector } from 'react-redux'
import { calTotalPrice } from '../../helper'
import { BudgetHeaderRemain } from './BudgetHeaderRemain';
import { BudgetHeaderIncome } from './BudgetHeaderIncome';
import { BudgetHeaderExpenses } from './BudgetHeaderExpenses';
import { calRatio } from './../../helper';

export const BudgetHeader = () => {
  const listData = useSelector(state => state.items)

  const listDataIncome = listData.filter(item => item.price > 0)

  const listDataExpenses = listData.filter(item => item.price < 0)

  const totalPriceIncome = calTotalPrice(listDataIncome)

  const totalPriceExpenses = calTotalPrice(listDataExpenses)

  const totalRemain = totalPriceIncome - totalPriceExpenses

  const ratio = calRatio(totalPriceExpenses, totalPriceIncome)

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
