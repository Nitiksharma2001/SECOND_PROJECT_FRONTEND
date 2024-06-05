import React, { useEffect, useState } from 'react'
import { monthsNames } from '../../Utils/constants'
import { daysInWeek } from '../../Utils/constants'
import Button from '../UI/Button/Button'
import {
  CustomDateVariables,
  dateAfterMonths,
  datesComponents,
  totalDaysInMonth,
} from './Helper/helper'

const SPCalendar = () => {
  const [customDate, setCustomDate] = useState(new Date())

  const currentDate = new CustomDateVariables(customDate)

  const onNext = () => {
    setCustomDate(dateAfterMonths(currentDate.orginalDate, +1))
  }
  const onPrev = () => {
    setCustomDate(dateAfterMonths(currentDate.orginalDate, -1))
  }

  const isDatesEqual = (xDate, yDate) => {
    return (
      xDate.getFullYear() === yDate.getFullYear() &&
      xDate.getDate() === yDate.getDate() &&
      xDate.getMonth() === yDate.getMonth()
    )
  }
  return (
    <main className='flex justify-center items-center h-full'>
      <main className='w-[50%] '>
        <section className='flex justify-between mx-3'>
          <Button buttonName={'Prev'} eventHandler={onPrev} />
          <div className='text-2xl font-bold'>
            <span>{monthsNames[currentDate.month]}</span>{' '}
            <span>{currentDate.year}</span>
          </div>
          <span className='mr-16'><Button buttonName={'Next'} eventHandler={onNext} /></span>
        </section>

        <section className='grid grid-cols-7 gap-y-4'>
          {Object.entries(daysInWeek).map(([_, v], i) => {
            return (
              <span key={i} className='font-bold py-2 px-3'>
                {v[0]}
              </span>
            )
          })}
          {datesComponents(currentDate.orginalDate).map((item, index) => (
            <div
              className={`
            ${(item.currentDate === currentDate.prevDate || item.currentDate === currentDate.nextDate) && 'text-slate-400'} 
            ${item.currentDate === currentDate.fullDate && 'text-black'} 
            `}
              key={index}
            >
              <span
                className={`py-2 px-3 rounded-full ${item.date === currentDate.date && isDatesEqual(currentDate.orginalDate, new Date()) && 'bg-blue-600 text-white'}`}
              >
                {item.date}
              </span>
            </div>
          ))}
        </section>
      </main>
    </main>
  )
}

export default SPCalendar
