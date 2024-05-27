import { useEffect, useState } from 'react'

const FetchProducts = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(`${process.env.REACT_APP_SERVER}/products`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const { data } = await result.json()
      setProducts(data)
    }
    getData()
  }, [])

  return products
}

export default FetchProducts
