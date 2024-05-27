import { useEffect, useState } from 'react'

const FetchProduct = (productId) => {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const getData = async () => {
      console.log(productId)
      const result = await fetch(
        `${process.env.REACT_APP_SERVER}/products/${productId}`,
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      )
      const { data } = await result.json()
      setProduct(data)
    }
    getData()
  }, [])

  return product
}

export default FetchProduct
