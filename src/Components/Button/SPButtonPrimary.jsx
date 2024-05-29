import Happy from '../../Assets/happy.png'
import { constants } from '../../Utils/constants'
const SPButtonPrimary = ({
  showImg,
  showImgEventHandler,
  isLoading,
  buttonName,
  color,
}) => (
  <div className='flex flex-col items-center relative'>
    {showImg && buttonName === constants.ADD_TO_CART && (
      <img src={Happy} alt='sorry' className='w-24 absolute bottom-0' />
    )}
    <button
      onClick={() => showImgEventHandler()}
      className={`text-white rounded-lg flex justify-center items-center gap-4 px-4 py-2 w-full text-xl ${color.color} rounded-sm font-bold  hover:${color.hover} ${isLoading && 'opacity-50 cursor-not-allowed'}`}
    >
      {buttonName}
      {isLoading && (
        <div class='animate-spin h-6 w-6 border-white rounded-full border-t-[3px] border-[3px] border-t-black'></div>
      )}
    </button>
  </div>
)

export default SPButtonPrimary
