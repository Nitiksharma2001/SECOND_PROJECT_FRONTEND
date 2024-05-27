const SPCurrencyConvert = async (sourceCode = 'USD', destCode = 'INR') => {
  // const result = await fetch(
  //   `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_CURRENCY_API_KEY}/pair/${sourceCode}/${destCode}`
  // )
  // const { conversion_rate } = await result.json()

  // return conversion_rate

  return 83.144
}

export default SPCurrencyConvert
