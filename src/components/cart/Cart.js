import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from '../context'
import DeleteIcon from '@mui/icons-material/Delete'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const [userCart, setUserCart] = useState(null)
  const { user } = useContext(UserContext)
  var cntProductsPrice = 0,
    cntProducts = 0
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      return navigate('/')
    }
    fetch(`${process.env.REACT_APP_SERVER}/cart`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserCart(data.data)
      })
  }, [])

  const deleteProduct = (id) => {
    fetch(`${process.env.REACT_APP_SERVER}/cart/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserCart((prev) => prev.filter((product) => product._id !== id))
      })
  }

  return (
    <>
      <h1>Xavier Cart</h1>
      {userCart &&
        userCart.map((product) => {
          cntProducts++
          cntProductsPrice += product.price
          return (
            <div
              className='product-cart'
              style={{ display: 'flex' }}
              key={product._id}
            >
              <img
                src={product.imageURL}
                alt='error'
                style={{ margin: '0 10px' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>{product.name}</div>
                <div>
                  &#x20B9;{product.price}
                  <span
                    className='btnn'
                    onClick={() => deleteProduct(product._id)}
                  >
                    <DeleteIcon />
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      <div>
        <div>Subtotal : {cntProducts}</div>
        &#x20B9;{cntProductsPrice}
      </div>
      <button className='btn btn-primary'>Proceed to Checkout</button>
    </>
  )
}

export default Cart
