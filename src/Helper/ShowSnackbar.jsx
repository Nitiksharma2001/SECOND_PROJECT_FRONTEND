import { useState } from 'react'

const ShowSnackbar = () => {
  const [isVisible, setIsVisible] = useState(false)

  const showSnackBar = (time = 2000) => {
    setIsVisible(true)
    setTimeout(() => {
      setIsVisible(false)
    }, time)
  }
  return { isVisible, showSnackBar }
}

export default ShowSnackbar
