import React from 'react'
import { Text, View } from 'react-native'
import DeckTitle from './DeckTitle'

class DeckList extends React.Component {

    state = { decks: [
  {
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
  {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
]}

  render() {
    return (
      <View>
          <Text>Deck</Text>
          {this.state.decks.map((deck, i) => ( <DeckTitle key={i} deck={deck} />)) }
      </View>
    )
  }
}

export default DeckList
