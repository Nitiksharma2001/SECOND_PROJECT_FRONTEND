import React from 'react'
import { SPColors } from '../../Utils/colors'

export const Button = ({
  buttonName,
  eventHandler,
  color = SPColors.SPRed,
  type = 'PRIMARY',
  isLoading = false,
}) => {
  switch (type) {
    case 'PRIMARY':
      return (
        <button
          onClick={eventHandler}
          className={`text-white px-6 py-2 text-xl ${color.color} rounded-sm font-bold hover:cursor-pointer hover:${color.hover}`}
        >
          {buttonName}
        </button>
      )
  }
}
export default Button
