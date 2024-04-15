export const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

export const getAllTheValuesFromKey = (wordsToShow: {
  [key: string]: string[]
}) => {
  const values: string[] = []
  for (const key in wordsToShow) {
    values.push(...wordsToShow[key])
  }
  return values
}
