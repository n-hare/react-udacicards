import { CREATE_DECK, CREATE_QUESTION } from '../actions'
import { REHYDRATE } from 'redux-persist/constants'

function decks( state={}, action ) {
  switch (action.type) {
    case CREATE_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: action.questions
        }
      }
    case CREATE_QUESTION:
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: [
            ...state[action.title.questions],
             { question: action.question, answer: action.answer}
          ]
        }
      }
    case REHYDRATE: {
      console.log('REHYDRATE:', state, action)
      return {
        ...state, ...action.payload
      }
    }
    default:
      return state
  }
}

export default decks