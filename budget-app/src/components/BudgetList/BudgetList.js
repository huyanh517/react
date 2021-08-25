import React from 'react'
import { BudgetExpenses } from './BudgetExpenses'
import { BudgetIncome } from './BudgetIncome'
import { useBudgetData } from './../../hooks/useBudgetData';

export const BudgetList = () => {
  
  const {
    listDataIncome,
    listDataExpenses,
    totalPriceIncome
  } = useBudgetData()

  return (
    <div className="container clearfix">

      <BudgetIncome listData={listDataIncome} />

      <BudgetExpenses listData={listDataExpenses} total={totalPriceIncome} />

    </div>
  )
}
