import React from 'react'

const SPImg = ({ imageSrc, height = 'h-56', width = 'w-60' }) => {
  return (
    <img
      src={imageSrc}
      className={`${height} ${width} rounded object-cover`}
      alt='Not Found'
    />
  )
}

export default SPImg
