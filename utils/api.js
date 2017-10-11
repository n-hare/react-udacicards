import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'UdaciCards:notifications'
const DECKS_STORAGE_KEY = 'UdaciCards:flashcards'

export function resetStorage() {
  return AsyncStorage.removeItem(DECKS_STORAGE_KEY)
}
export function resetNotifcation() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
}

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

export function updateDecks(update) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(update))
  .then(results => console.log(results))
}

function formatDecks(results) {
  // return results === null
  //   ? setDefaultData()
  //   : JSON.parse(results)

      return  results === null ? {} : JSON.parse(results)
}

function setDefaultData() {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData))
  return dummyData
}

export const dummyData = {
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

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
  return {
    title: 'Review ',
    body: "Don't forget to take a quiz today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(19)
              tomorrow.setMinutes(0)
              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}

