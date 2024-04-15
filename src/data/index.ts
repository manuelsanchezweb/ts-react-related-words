interface WordGroup {
  [key: string]: string[]
}

interface RelatedWordsMap {
  [date: string]: WordGroup
}

export const RELATED_WORDS: RelatedWordsMap = {
  '2024-04-15': {
    dog: ['cat', 'pet', 'animal', 'puppy'],
    wine: ['grapes', 'cheese', 'red', 'glass'],
    javascript: ['typescript', 'react', 'node', 'frontend'],
    boy: ['girl', 'child', 'mother', 'father'],
  },
  '2024-04-14': {
    sky: ['blue', 'cloud', 'air', 'plane'],
    beer: ['ale', 'lager', 'drink', 'bar'],
    python: ['snake', 'language', 'programming', 'script'],
    water: ['wet', 'liquid', 'bottle', 'manantial'],
  },
  '2024-04-13': {
    earth: ['planet', 'world', 'home', 'nature'],
    coffee: ['cafe', 'morning', 'drink', 'cup'],
    energy: ['power', 'electricity', 'battery', 'plug'],
    book: ['read', 'pages', 'library', 'author'],
  },
  '2024-04-12': {
    moon: ['night', 'dark', 'sky', 'stars'],
    tea: ['green', 'drink', 'cup', 'hot'],
    code: ['developer', 'programming', 'computer', 'keyboard'],
    music: ['sound', 'listen', 'notes', 'song'],
  },
  '2024-04-11': {
    sun: ['day', 'light', 'hot', 'sky'],
    milk: ['white', 'drink', 'cow', 'lactose'],
    test: ['exam', 'pass', 'fail', 'cheat'],
    movie: ['film', 'watch', 'popcorn', 'cinema'],
  },
  '2024-04-10': {
    love: ['heart', 'kiss', 'hug', 'romance'],
    cake: ['sweet', 'bake', 'birthday', 'candle'],
    tv: ['watch', 'show', 'remote', 'screen'],
    phone: ['call', 'text', 'mobile', 'smart'],
  },
}
