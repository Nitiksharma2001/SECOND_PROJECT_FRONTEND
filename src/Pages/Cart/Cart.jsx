import React from 'react'
import SPImg from '../../Components/Image/SPImg'
import FetchCart from '../../Hooks/FetchCart'
import CartCard from '../../Components/Card/CartCard'
const Cart = () => {
  const { cartItems, deleteEventHandler } = FetchCart()

  return (
    <main className='flex h-full'>
      <section className='flex flex-col items-center gap-4 mx-8'>
        <div>
          <SPImg height={'h-52'} width='w-40' imageSrc={'/cartImage.png'} />
        </div>
        <section className='grow-1 flex flex-col gap-4'>
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
    </main>
  )
}

export default Cart
