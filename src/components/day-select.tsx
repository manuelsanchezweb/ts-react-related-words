type DaySelectProps = {
  allDates: string[]
  currentDate: string
  setCurrentDate: React.Dispatch<React.SetStateAction<string>>
}

export const DaySelect = ({
  allDates,
  currentDate,
  setCurrentDate,
}: DaySelectProps) => {
  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentDate(event.target.value)
  }

  const hasCompletedThisDay = (dateToCheck: string) =>
    JSON.parse(localStorage.getItem('completedDays') || '{}')[dateToCheck]

  return (
    <select
      className="border border-1 border-black border-pixel p-2"
      value={currentDate}
      onChange={handleDateChange}
    >
      {allDates.map((date: string) => (
        <option key={date} value={date}>
          {date} {hasCompletedThisDay(date) ? ' ✅' : ' ❌'}
        </option>
      ))}
    </select>
  )
}
