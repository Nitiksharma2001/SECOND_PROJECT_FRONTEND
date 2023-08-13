import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../components/context'
import './View.css'
import Productview from './Productview'
const View = () => {
  const { user, setUser } = useContext(UserContext)
  const [product, setProduct] = useState(null)
  const [added, setAdded] = useState(false)

  const id = useParams().id
  useEffect(() => {
    if (!user) {
      const localUser = localStorage.getItem('user')
      if (localUser) {
        setUser(JSON.parse(localUser))
      }
    }
    fetch(`${process.env.REACT_APP_SERVER_URL}/view/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.product)
      })
  }, [id])
  
  return (
    <>
      {product ? (
        <Productview product={product} user={user} added={added} id={id} setAdded={setAdded}/>
      ) : (
        <h1>Loading........</h1>
      )}
    </>
  )
}

export default View
