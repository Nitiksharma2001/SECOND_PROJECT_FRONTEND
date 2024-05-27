import { useContext } from 'react'
import { UserContext } from '../Store/context'
import { useNavigate } from 'react-router-dom'

const Login = (email, password) => {
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const getData = async () => {
    if (email && password) {
      const result = await fetch(
        `${process.env.REACT_APP_SERVER}/auth/?email=${email}&password=${password}`,
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      )
      const { data } = await result.json()
      setUser(data)
      localStorage.setItem('user', JSON.stringify(data.data))
      navigate('/')
    }
  }
  getData()
}

export default Login
