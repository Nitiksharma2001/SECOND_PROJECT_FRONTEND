import TryCatch from '../Index'

const fetchProducts = async () => {
  const result = await fetch(`${process.env.REACT_APP_SERVER}/products`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  return await result.json()
}
export default () => TryCatch({ fetchData: fetchProducts })
