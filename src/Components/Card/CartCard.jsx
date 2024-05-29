import SPImg from '../Image/SPImg'
import Button from '../Button/Button'

const CartCard = ({ cartItem, deleteEventHandler }) => {
  return (
    <main className='flex gap-4 text-lg'>
      <SPImg height={'h-36'} width='40' imageSrc={cartItem.imageURL} />
      <div className=''>
        <h2 className='font-bold text-xl text-purple-600'>{cartItem.name}</h2>
        <p className='lg:visible invisible'>{cartItem.description}</p>
      </div>
      <div className='font-bold'>${cartItem.price}</div>
      <div className='flex gap-4'>
        <span>
          <Button
            buttonName='remove'
            eventHandler={() => deleteEventHandler(cartItem._id)}
          />
        </span>
      </div>
    </main>
  )
}

export default CartCard
