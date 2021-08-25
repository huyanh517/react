export const calTotalPriceInCart = listData => {
  let sum = 0
  for (let i = 0; i < listData.length; i++) {
    let data = listData[i].price
    let quantity = listData[i].quantity
    quantity = Number(quantity)
    sum += data * quantity
    sum = Number(sum)
  }
  return sum
}

export const calAmountItemInCart = listData => {
  let amount = 0
  for (let i = 0; i < listData.length; i++) {
    let data = listData[i].quantity
    amount += data
  }
  return amount
}