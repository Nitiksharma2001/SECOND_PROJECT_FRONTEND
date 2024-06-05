import { useContext } from 'react'
import { UserContext } from '../../Store/context'
import { Link, useNavigate } from 'react-router-dom'
import SPLink from '../../Components/UI/Link/SPLink'
import Button from '../../Components/UI/Button/Button'
function Navbar() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext)
  const navigate = useNavigate()
  const handleLogout = () => {
    setLoggedInUser(null)
    localStorage.clear()
    navigate('/signin')
  }

  const navbarRedirect = [
    {
      linkName: 'Cart',
      redirectTo: '/cart',
      authRequired: true,
      type: 'SPLINK',
    },
    {
      buttonName: 'Log Out',
      authRequired: true,
      type: 'SPBUTTON',
      eventHandler: handleLogout,
    },
    {
      linkName: 'Sign In',
      authRequired: false,
      redirectTo: '/signin',
      type: 'SPLINK',
    },
  ]
  return (
    <nav className='flex justify-between items-center py-2 px-5 bg-white text-black mb-4 sticky top-0 z-10'>
      <section className='flex justify-center items-center hover:cursor-pointer'>
        <img src='/companyLogo.png' className='w-10 mr-2' alt='sorry' />
        <Link to='/products' className='hover:text-blue-600 font-bold text-3xl'>
          Ecommerce
        </Link>
      </section>

      <section className='flex gap-6 items-center'>
        {navbarRedirect
          .filter(
            (redirect) =>
              ((!redirect.authRequired && !loggedInUser) ||
                (redirect.authRequired && loggedInUser)) &&
              redirect.type === 'SPLINK'
          )
          .map((redirect) => {
            return (
              <SPLink redirectTo={redirect.redirectTo} key={redirect.linkName}>
                {redirect.linkName}
              </SPLink>
            )
          })}

        {navbarRedirect
          .filter(
            (button) =>
              button.type === 'SPBUTTON' &&
              ((!button.authRequired && !loggedInUser) ||
                (button.authRequired && loggedInUser))
          )
          .map((button) => (
            <Button
              key={button.buttonName}
              buttonName={button.buttonName}
              eventHandler={button.eventHandler}
            />
          ))}
      </section>
    </nav>
  )
}

export default Navbar
