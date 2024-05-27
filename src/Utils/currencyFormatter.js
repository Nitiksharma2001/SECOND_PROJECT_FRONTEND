export const currencyFormatter = (price, currency) => {
  let USDollar = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
  })

  return USDollar.format(Math.round(price))
}
