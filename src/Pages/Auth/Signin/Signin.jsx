import React, { useContext, useState } from 'react'
import Button from '../../../Components/Button/Button'
import SPInput from '../../../Components/Input/SPInput'
import SPLink from '../../../Components/Link/SPLink'
import SPSnackBar from '../../../Components/SnackBar/SPSnackBar'
import { UserContext } from '../../../Store/context'
import { useNavigate } from 'react-router-dom'
import ShowSnackBar from '../../../Helper/ShowSnackbar'
import authImage from '../../../Assets/authImage.png'

const Signin = () => {
  const { setLoggedInUser } = useContext(UserContext)
  const {isVisible, showSnackBar} = ShowSnackBar()
  const navigate = useNavigate()
  const [snackText, setSnackText] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const loginEventHandler = async () => {
    if (!email && !password) return
    setIsLoading(true)
    try {
      const result = await fetch(
        `${process.env.REACT_APP_SERVER}/auth/?email=${email}&password=${password}`
      )
      const { data, message } = await result.json()
      localStorage.setItem('user', JSON.stringify(data))
      setLoggedInUser(data)
      setSnackText(message)
      showSnackBar(2000)
      navigate('/')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className='flex justify-center items-center h-full'>
      <div className='flex flex-col gap-2'>
        <img className='h-60' src={authImage} alt='' />
        <section>
          <div className='flex flex-col my-4'>
            <SPInput
              inputName='Email'
              value={email}
              onChangeEvent={(e) => setEmail(e.target.value)}
            />
            <SPInput
              inputName='Password'
              type='PASSWORD'
              value={password}
              onChangeEvent={(e) => setPassword(e.target.value)}
            />
          </div>
        </section>
        <Button
          buttonName={'Sign In'}
          eventHandler={loginEventHandler}
          type='PRIMARY'
          isLoading={isLoading}
        />
        <SPLink redirectTo='/signup'>New User...?</SPLink>
      </div>
      <SPSnackBar text={snackText} isVisible={isVisible} />
    </main>
  )
}

export default Signin
