import React from 'react'
import { useSelector } from 'react-redux'
import { calTotalPrice } from '../../helper'
import { BudgetExpenses } from './BudgetExpenses'
import { BudgetIncome } from './BudgetIncome'

export const BudgetList = () => {
  const listData = useSelector(state => state.items)

  const listDataIncome = listData.filter(item => item.price > 0)

  const listDataExpenses = listData.filter(item => item.price < 0)

  const totalPriceIncome = calTotalPrice(listDataIncome)
  // const ratio

  return (
    <div className="container clearfix">

      <BudgetIncome listData={listDataIncome} />

      <BudgetExpenses listData={listDataExpenses} total={totalPriceIncome} />

    </div>
  )
}
