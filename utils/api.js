import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'UdaciCards:flashcards'



export function getDeck(deckKey) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDecks)
    .then((results) => {
      return results[deckKey]
    })
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDecks)
}

function formatDecks(results) {
  return results === null
    ? setDefaultData()
    : JSON.parse(results)
}

function setDefaultData() {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData))
  return dummyData
}

const dummyData = {
  react: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  es6: {
    title: 'ES6',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

  //AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({react: dummyData})))

// export function setData() {
//   AsyncStorage.clear()
//   // return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({"react": dummyData}))
// }


