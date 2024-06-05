import React, { useContext, useState } from 'react'
import Button from '../Button/Button'
import { UserContext } from '../../../Store/context'
import { currencyFormatter } from '../../../Utils/currencyFormatter'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product, eventHandler, hover = true }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { conversionRate } = useContext(UserContext)

  const navigate = useNavigate()

  const { loggedInUser } = useContext(UserContext)

  const [isAddedToCart, setIsAddedToCart] = useState(false)

  const addToCart = async () => {
    if (!loggedInUser) {
      return navigate('/signin')
    }
    setIsAddedToCart(true)
    try {
      await axios.put(
        `${process.env.REACT_APP_SERVER}/cart/${product._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${loggedInUser.token}`,
            'Content-type': 'application/json; charset=UTF-8'
          }
        }
      )
    } finally {
      setIsAddedToCart(false)
    }
  }

  return (
    <main className='flex hover:scale-105 duration-150 ease-in flex-col gap-3 w-86 rounded-lg p-4 shadow-lg w-[21rem]'>
      <img
        className='h-56 rounded object-cover hover:cursor-pointer'
        src={product.imageURL}
        onClick={eventHandler}
        alt='/imageNotExist.png'
      />
      <h1 className='font-extrabold text-3xl '>{product.name}</h1>
      <p className='text-1xl text-justify'>{product.description.substring(0, 200) + '.....'}</p>
      <div className='flex flex-col w-full items-stretch gap-2 text-2xl transfor'>
        <span
          className='font-bold text-pink-500'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {`${isHovered ? currencyFormatter(product.price * conversionRate, 'INR') : currencyFormatter(product.price, 'USD')}`}
        </span>
        <Button
          eventHandler={addToCart}
          buttonName='Add To Cart'
          isLoading={isAddedToCart}
          type='PRIMARY'
        />
      </div>
    </main>
  )
}

export default ProductCard
