import { Link } from 'react-router-dom'

const SPLink = ({ redirectTo, children }) => {
  return (
    <Link
      to={redirectTo}
      className='hover:text-blue-600 hover:cursor-pointer text-xl'
    >
      {children}
    </Link>
  )
}

export default SPLink
