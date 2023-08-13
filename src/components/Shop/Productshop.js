import React from 'react'
import { Link } from 'react-router-dom'
const Productshop = ({ currProduct }) => {
  return (
    <div className='card' style={{ width: '22rem' }} key={currProduct._id}>
      <div className='card-body'>
        <img src={currProduct.imageURL} alt='error' className='card-img-top img ' />
        <h5 className='card-title'>{currProduct.name}</h5>
        <p className='card-text'>{currProduct.description.substring(0, Math.max(0, 100))}.......</p>
        <h5 className='card-title'>${currProduct.price};</h5>
        <Link to={`/view/${currProduct._id}`} className='btn btn-primary'>View</Link>
      </div>
    </div>
  )
}

export default Productshop
