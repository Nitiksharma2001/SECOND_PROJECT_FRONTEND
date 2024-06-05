import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Store/context'

const FetchCart = () => {
  const [cartItems, setCartItems] = useState(null)
  const { loggedInUser } = useContext(UserContext)
  useEffect(() => {
    const getData = async () => {
      if (loggedInUser) {
        const result = await fetch(`${process.env.REACT_APP_SERVER}/cart`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${loggedInUser.token}`,
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
        const { data } = await result.json()
        setCartItems(data)
      }
    }
    getData()
  }, [loggedInUser])

  const deleteEventHandler = async (id) => {
    if (loggedInUser) {
      const result = await fetch(`${process.env.REACT_APP_SERVER}/cart/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${loggedInUser.token}`,
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      const { data } = await result.json()
      setCartItems((prev) => prev.filter((product) => product._id !== id))
    }
  }

  return { cartItems, deleteEventHandler }
}

export default FetchCart
