export const CREATE_DECK = 'CREATE_DECK'
export const CREATE_QUESTION = 'CREATE_QUESTION'

export function createDeck({title, questions}) {
  return {
    type: CREATE_DECK,
    title,
    questions
  }
}

export function createQuestion( {title, question, answer} ) {
  return {
    type: CREATE_QUESTION,
    title,
    question,
    answer
  }
}