import React, { useEffect, useState } from 'react'

const SPSnackBar = ({ text, isVisible, isError = false }) => {
  return (
    <section
      className={`absolute text-black ${isVisible ? 'top-20' : 'invisible top-0'} left-4 border-black bg-green-300 p-2 text-xl font-semibold tranistion duration-300 ease-out `}
    >
      {text}
    </section>
  )
}

export default SPSnackBar
