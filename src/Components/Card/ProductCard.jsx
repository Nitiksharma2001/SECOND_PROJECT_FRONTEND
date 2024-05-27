import React, { useContext, useState } from 'react'
import Button from '../Button/Button'
import { UserContext } from '../../Store/context'
import { currencyFormatter } from '../../Utils/currencyFormatter'
import axios from 'axios'

const ProductCard = ({ product, eventHandler, hover = true }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { conversionRate } = useContext(UserContext)

  const { loggedInUser } = useContext(UserContext)

  const addToCart = async () => {
    const result = await axios.put(
      `${process.env.REACT_APP_SERVER}/cart/${product._id}`, {},
      {
        headers: {
          Authorization: `Bearer ${loggedInUser.token}`,
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    )
    console.log(addToCart)
  }

  return (
    <main className='flex hover:scale-105 duration-150 ease-in flex-col gap-3 w-80 rounded-lg  p-4 shadow-lg'>
      <img
        className='h-56 rounded object-cover hover:cursor-pointer'
        src={product.imageURL}
        onClick={eventHandler}
        alt='/imageNotExist.png'
      />
      <h1 className='font-extrabold text-3xl '>{product.name}</h1>
      <p className='text-1xl text-justify'>
        {product.description.substring(0, 200) + '.....'}
      </p>
      <div className='flex justify-between items-center text-2xl transfor'>
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
          type='PRIMARY'
        />
      </div>
    </main>
  )
}

export default ProductCard
