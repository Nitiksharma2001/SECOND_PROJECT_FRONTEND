import React from 'react'

const SPInput = ({ inputName, value, onChangeEvent }) => {
  return (
    <>
      <label htmlFor={inputName}>
        {inputName}
      </label>
      <input
        className='border-solid border-slate-400 border-2 px-2 py-1 rounded shadow-md'
        type='text'
        name={inputName.toLowerCase()}
        value={value}
        onChange={onChangeEvent}
        id={inputName}
      />
    </>
  )
}

export default SPInput
