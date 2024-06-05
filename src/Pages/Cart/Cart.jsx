import React from 'react'
import SPImg from '../../Components/UI/Image/SPImg'
import FetchCart from '../../Hooks/Cart/FetchCart'
import CartCard from '../../Components/UI/Card/CartCard'
import cartImage from '../../Assets/cartImage.png'

const Cart = () => {
  const { cartItems, deleteEventHandler } = FetchCart()

  const totalPrice =
    cartItems &&
    cartItems.reduce((accumulator, item) => {
      return (accumulator += item.price)
    }, 0)

  return (
    <main className='flex flex-col h-full mx-8 gap-4'>
      <section className='flex flex-col items-center gap-4 '>
        <SPImg
          height={'h-52'}
          width='w-40'
          imageSrc={cartImage}
        />
        <section className='grow-1 flex flex-col gap-4 w-full items-center'>
          {cartItems &&
            cartItems.map((cartItem) => {
              return (
                <CartCard
                  cartItem={cartItem}
                  deleteEventHandler={deleteEventHandler}
                />
              )
            })}
        </section>
      </section>
      <section className='text-3xl font-extrabold underline text-purple-600 w-full text-center'>
        <h1>
          Total Price is: <span className='text-4xl'>${totalPrice}</span>
        </h1>
      </section>
    </main>
  )
}

export default Cart
