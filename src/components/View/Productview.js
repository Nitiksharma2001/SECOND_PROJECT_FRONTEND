import React from 'react'

const Productview = ({ product, user, added, setAdded, id }) => {
  const addToCart = async () => {
    console.log(user.token)
    fetch(`${process.env.REACT_APP_SERVER}/cart/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setAdded(true)
        }
      })
  }
  return (
    <div className='single-product'>
      <div className='card' style={{ width: '22rem' }}>
        <div className='card-body card-container'>
          <img src={product.imageURL} alt='error' className='card-img-top img ' />
          <h5 className='card-title'>{product.name}</h5>
          <p className='card-text'>{product.description}</p>
          <h5 className='card-title'>{product.price}&#8377;</h5>
          {user && (added ? (
            <button className='btn btn-primary'>
              <>&#10003;</>
            </button>
          ) : (
            <button onClick={addToCart} className='btn btn-primary'>
              Add To Cart
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Productview
