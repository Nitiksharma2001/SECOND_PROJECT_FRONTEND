import React, { useState } from 'react'
import { SPColors } from '../../../Utils/colors'
import SPButtonPrimary from './SPButtonPrimary'

export const Button = ({
  buttonName,
  eventHandler,
  color = SPColors.SPRed,
  type = 'PRIMARY',
  isLoading = false
}) => {
  const [showImg, setShowImg] = useState(false)

  const showImgEventHandler = (time = 1000) => {
    setShowImg(true)
    eventHandler()
    setTimeout(() => {
      setShowImg(false)
    }, time)
  }

  switch (type) {
    case 'PRIMARY':
      return (
        <SPButtonPrimary
          showImg={showImg}
          showImgEventHandler={showImgEventHandler}
          buttonName={buttonName}
          color={color}
          isLoading={isLoading}
        />
      )
  }
}
export default Button
