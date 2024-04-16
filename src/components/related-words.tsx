import { useEffect, useMemo, useState } from 'react'
import { RELATED_WORDS } from '../data'
import { getAllTheValuesFromKey, shuffleArray } from '../utils'
import confetti from 'canvas-confetti'

type RelatedWordsProps = {
  day: string
  lives: number
  setLives: React.Dispatch<React.SetStateAction<number>>
  isLevelCompleted: boolean
  setIsLevelCompleted: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 *
 * @param day the date we will use to get the related words
 * @returns a list of related words for the given day with the format of key: value1, value2, value3, value4
 */
export const RelatedWords = ({
  day,
  lives,
  setLives,
  isLevelCompleted,
  setIsLevelCompleted,
}: RelatedWordsProps) => {
  const [selectedWords, setSelectedWords] = useState<string[]>([])
  const [foundWords, setFoundWords] = useState<string[]>([])

  const wordsToShow = RELATED_WORDS[day]
  if (!wordsToShow) {
    return <div>No data for this day</div>
  }

  const values = useMemo(
    () => shuffleArray(getAllTheValuesFromKey(wordsToShow)),
    [wordsToShow]
  )

  useEffect(() => {
    const completedDays = JSON.parse(
      localStorage.getItem('completedDays') || '{}'
    )
    if (completedDays[day]) {
      setIsLevelCompleted(true)
    } else {
      setFoundWords([])
      setSelectedWords([])
      setIsLevelCompleted(false)
    }
  }, [day, values])

  const getKeyThroughValue = (value: string) => {
    for (const key in wordsToShow) {
      if (wordsToShow[key].includes(value)) {
        return key
      }
    }
  }

  const checkWord = (value: string) => {
    const currentWordGroup = getKeyThroughValue(value)
    setSelectedWords((prevSelected) => {
      const lastSelectedWord = prevSelected[prevSelected.length - 1]
      const lastSelectedWordGroup = getKeyThroughValue(lastSelectedWord)

      if (!lastSelectedWordGroup) {
        return [value]
      } else if (lastSelectedWordGroup !== currentWordGroup) {
        setLives((prevLives: number) => prevLives - 1)

        // lose a life
        return [value]
      } else {
        const newSelectedWords = [...prevSelected, value]
        if (newSelectedWords.length === 4) {
          setFoundWords((prevFound) => {
            const updatedFoundWords = [...prevFound]
            newSelectedWords.forEach((word) => {
              if (!prevFound.includes(word)) {
                updatedFoundWords.push(word)
              }
            })
            return updatedFoundWords
          })
          return []
        }
        return newSelectedWords
      }
    })
  }

  useEffect(() => {
    if (foundWords.length === values.length && values.length > 0) {
      const completedDays = JSON.parse(
        localStorage.getItem('completedDays') || '{}'
      )
      if (!completedDays[day]) {
        completedDays[day] = true
        localStorage.setItem('completedDays', JSON.stringify(completedDays))
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
        setIsLevelCompleted(true)
        setFoundWords([])
        setSelectedWords([])
        setLives(5)
      }
    }
  }, [foundWords, values.length, day])

  // Reset foundWords and selectedWords when the day changes
  useEffect(() => {
    setFoundWords([])
    setSelectedWords([])
  }, [day])

  useEffect(() => {
    if (lives === 0) {
      setTimeout(() => {
        if (
          confirm('You lost all your lives, do you want to restart the game?')
        ) {
          window.location.reload()
        }
      }, 300)
    }
  }, [lives])

  return (
    <>
      {isLevelCompleted && (
        <>
          <div className="text-green-700">
            You have already completed this level
          </div>
          The keys are: <strong>{Object.keys(wordsToShow).join(', ')}</strong>
        </>
      )}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-3 gap-4">
        {values.map((value, index) => {
          const isWordSelected = selectedWords.includes(value)
          const isWordFound = foundWords.includes(value)

          return (
            <li key={index}>
              <button
                className={`border border-1 border-black border-pixel p-2 w-full text-[0.8rem]
                
                ${isWordSelected ? 'bg-gray-300 pointer-events-none' : ''} 
  
                ${isLevelCompleted ? '!bg-green-500 pointer-events-none' : ''}
                }
  
                ${isWordFound ? '!bg-green-500 pointer-events-none' : ''}
                
                `}
                onClick={() => checkWord(value)}
              >
                {value}
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
