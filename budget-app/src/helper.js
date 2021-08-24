export const formatPrice = (price) => {
  let sign = '+'
  let priceFormat = price

  if (priceFormat < 0) {
    sign = '-'
    priceFormat = price * (-1)
  }

  if (price) {
    priceFormat = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(priceFormat)
    priceFormat = priceFormat.substring(0, priceFormat.length - 2)
  }

  return `${sign} ${priceFormat}`
}

export const calTotalPrice = (listData) => {
  let sum = 0
  for (let i = 0; i < listData.length; i++) {
    const data = listData[i].price
    sum += data
  }
  return sum
}

export const calRatio = (price, total) => {
  let percent = Math.round((price / total) * 100)
  if (percent < 0) {
    percent = percent * (-1)
  }
  return percent
}