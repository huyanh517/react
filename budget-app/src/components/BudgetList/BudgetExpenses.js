import React from 'react'
import { Item } from './Item'

export const BudgetExpenses = ({ listData, total }) => {
  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>

      {listData.map(item => <Item data={item} key={item.id} total={total} />)}

    </div>
  )
}
