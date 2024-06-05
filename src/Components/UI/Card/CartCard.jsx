import SPImg from '../Image/SPImg'
import Button from '../Button/Button'

const CartCard = ({ cartItem, deleteEventHandler }) => {
  return (
    <main className='flex gap-4 text-lg w-56 md:w-full md:justify-center'>
      <div className='flex flex-col border-2 border-slate-400 rounded-md md:w-[80%] md:justify-between shadow-lg p-2 md:flex-row lg:gap-4'>
        <SPImg
          height={'h-36'}
          width='40'
          imageSrc={cartItem.imageURL}
        />
        <div className='flex flex-col gap-2'>
          <h2 className='font-bold text-xl text-purple-600'>{cartItem.name}</h2>
          <p className='xl:block hidden'>{cartItem.description.substring(0, 200)}.....</p>
        </div>
        <div className='font-bold'>${cartItem.price}</div>
        <div className='flex gap-4'>
          <span className='w-full'>
            <Button
              buttonName='remove'
              eventHandler={() => deleteEventHandler(cartItem._id)}
            />
          </span>
        </div>
      </div>
    </main>
  )
}

export default CartCard
