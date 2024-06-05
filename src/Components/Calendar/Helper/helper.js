export const datesComponents = (currentDate) => {
  // x + t <= 35
  // t <= 35 - x
  // totalDates + x <= 35
  const date = new CustomDateVariables(currentDate)
  let dates = new Array(
    Math.min(
      date.totalDaysInMonth + date.currentDay <= 35
        ? date.totalDaysInMonth
        : 35 - date.currentDay
    )
  )
    .fill(0)
    .map((item, index) => {
      return {
        date: index + 1,
        currentDate: date.fullDate,
      }
    })

  for (let i = 0; i < date.currentDay; i++) {
    dates = [
      {
        date: date.totalDaysInMonth - i,
        currentDate: date.prevDate,
      },
      ...dates,
    ]
  }
  let len = dates.length
  for (let i = 1; i <= 35 - len; i++) {
    dates = [
      ...dates,
      {
        date: i,
        currentDate: date.nextDate,
      },
    ]
  }

  return dates
}

export const dateAfterMonths = (currentDate, afterMonths = 1) => {
  const newDate = new Date(currentDate)
  newDate.setMonth(newDate.getMonth() + afterMonths)
  return newDate
}

export const totalDaysInMonth = (date) => {
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return new Date(year, month, 0).getDate()
}

export class CustomDateVariables {
  constructor(date) {
    this.orginalDate = date
    this.date = date.getDate()
    this.month = date.getMonth()
    this.year = date.getFullYear()
    this.totalDaysInMonth = totalDaysInMonth(date)
    this.currentDay = new Date(this.year, this.month, 1).getDay()
    this.fullDate = this.getDateFromFullDate(date)
    this.nextDate = this.getDateFromFullDate(dateAfterMonths(date, 1))
    this.prevDate = this.getDateFromFullDate(dateAfterMonths(date, -1))
  }

  getDateFromFullDate = (date) => {
    console.log([date.getFullYear(), date.getMonth(), date.getDate()].join('-'))
    return [date.getFullYear(), date.getMonth(), date.getDate()].join('-')
  }
}
