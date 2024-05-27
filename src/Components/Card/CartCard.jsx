import SPImg from '../Image/SPImg'
import Button from '../Button/Button'

const CartCard = ({ cartItem, deleteEventHandler }) => {
  return (
    <main className='flex gap-4 text-lg'>
      <SPImg height={'h-36'} width='w-40' imageSrc={cartItem.imageURL} />
      <div className=''>
        <h2 className='font-bold text-xl text-purple-600'>{cartItem.name}</h2>
        <p className='lg:visible invisible'>{cartItem.description}</p>
      </div>
      <p className='font-bold'>${cartItem.price}</p>
      <div className='flex gap-4'>
        <div>4</div>
        <span>
          <Button
            buttonName='remove'
            eventHandler={() => deleteEventHandler(cartItem._id)}
          />
        </span>
      </div>
      <div className='font-bold'>${cartItem.price}</div>
    </main>
  )
}

export default CartCard
