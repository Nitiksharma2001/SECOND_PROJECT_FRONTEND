import TryCatch from '../Index'

const getData = async (productId) => {
  const result = await fetch(`${process.env.REACT_APP_SERVER}/products/${productId}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  return await result.json()
}

export default (productId) => TryCatch({ fetchData: () => getData(productId) })
