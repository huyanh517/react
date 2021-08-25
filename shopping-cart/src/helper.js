export const calTotalPriceInCart = listData => {
  let sum = 0
  for (let i = 0; i < listData.length; i++) {
    let data = listData[i].price
    let quantity = listData[i].quantity  
    sum += data * quantity
    
  }
  return sum
}

export const calAmountItemInCart = listData => {
  let amount = 0
  for (let i = 0; i < listData.length; i++) {
    let data = listData[i].quantity
    data = Number(data)
    amount += data
  }
  return amount
}