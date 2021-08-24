import React from 'react'
import { Item } from './Item';

export const BudgetIncome = ({ listData }) => {
  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>
        {listData.map(item => <Item data={item} key={item.id} />)}
    </div>
  )
}
