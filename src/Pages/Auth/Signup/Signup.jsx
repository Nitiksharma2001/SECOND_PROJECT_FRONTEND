import React, { useContext, useReducer, useState } from 'react'
import Button from '../../../Components/Button/Button'
import SPInput from '../../../Components/Input/SPInput'
import { UserContext } from '../../../Store/context'
import { Link, useNavigate } from 'react-router-dom'
import SPLink from '../../../Components/Link/SPLink'

const Signup = () => {
  const navigate = useNavigate()
  const { setLoggedInUser } = useContext(UserContext)

  const [isLoading, setIsLoading] = useState(false)

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const loginEventHandler = async () => {
    if (!userData.email && !userData.password && !userData.userName) return
    setIsLoading(true)
    try {
      const result = await fetch(`${process.env.REACT_APP_SERVER}/auth/`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const { data } = await result.json()
      navigate('/signin')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className='flex justify-center items-center h-full'>
      <div className='flex flex-col gap-4'>
        <img className='h-60' src='/authImage.png' alt='' />
        <section className='flex flex-col'>
          <SPInput
            inputName='Name'
            value={userData.name}
            onChangeEvent={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })
            }
          />
          <SPInput
            inputName='Email'
            value={userData.email}
            onChangeEvent={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })
            }
          />
          <SPInput
            inputName='Password'
            value={userData.password}
            onChangeEvent={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })
            }
          />
        </section>
        <Button
          buttonName={'Sign Up'}
          eventHandler={loginEventHandler}
          type='PRIMARY'
          isLoading={isLoading}
        />
        <SPLink redirectTo='/signin'>Already Have an Account...?</SPLink>
      </div>
    </main>
  )
}

export default Signup
