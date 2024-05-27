import { useState, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SPCurrencyConvert from '../APIs/SPCurrencyConvert'

export const UserContext = createContext()

export const MakeContext = ({ children }) => {
  const navigate = useNavigate()
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [conversionRate, setConversionRate] = useState(0)

  useEffect(() => {
    if (!loggedInUser) {
      const user = localStorage.getItem('user')
      if (user) {
        setLoggedInUser(JSON.parse(user))
      }
    }
    const getData = async () => {
      const result = await SPCurrencyConvert()
      setConversionRate(result)
    }

    getData()
  }, [])
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, conversionRate }}>
      {children}
    </UserContext.Provider>
  )
}
