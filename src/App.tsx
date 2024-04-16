import { useMemo, useState } from 'react'
import './App.css'
import { RELATED_WORDS } from './data'
import { RelatedWords } from './components/related-words'
import { DaySelect } from './components/day-select'
import { Header } from './components/header'

function App() {
  const [currentDate, setCurrentDate] = useState('2024-04-15')
  const [lives, setLives] = useState(5)
  const [isLevelCompleted, setIsLevelCompleted] = useState(false)
  const allDates = useMemo(() => Object.keys(RELATED_WORDS), [isLevelCompleted])

  return (
    <main className="flex flex-col py-32 text-center items-center min-h-screen justify-center gap-5 px-3">
      <Header lives={lives} />
      <h1 className="text-4xl">Related words</h1>
      <DaySelect
        allDates={allDates}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      <RelatedWords
        isLevelCompleted={isLevelCompleted}
        setIsLevelCompleted={setIsLevelCompleted}
        lives={lives}
        setLives={setLives}
        day={currentDate}
      />
    </main>
  )
}

export default App
