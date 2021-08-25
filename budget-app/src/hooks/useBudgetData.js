import { useSelector } from "react-redux"
import { calTotalPrice } from "../helper"
import { calRatio } from './../helper';


export const useBudgetData = () => {
  const listData = useSelector(state => state.items)

  const listDataIncome = listData.filter(item => item.price > 0)

  const listDataExpenses = listData.filter(item => item.price < 0)

  const totalPriceIncome = calTotalPrice(listDataIncome)

  const totalPriceExpenses = calTotalPrice(listDataExpenses)

  const totalRemain = totalPriceIncome - totalPriceExpenses

  const ratio = calRatio(totalPriceExpenses, totalPriceIncome)

  return {
    listDataIncome,
    listDataExpenses,
    totalPriceExpenses,
    totalPriceIncome,
    totalRemain,
    ratio
  }
}

// const listData = useSelector(state => state.items)

//   const listDataIncome = listData.filter(item => item.price > 0)

//   const listDataExpenses = listData.filter(item => item.price < 0)

//   const totalPriceIncome = calTotalPrice(listDataIncome)