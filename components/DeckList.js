import React from 'react'
import { FlatList, Text, View } from 'react-native'
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
        <FlatList data={this.state.decks} renderItem={(deck) => <DeckTitle deck={deck.item} /> } keyExtractor={(item) => item.title } />
      </View>
    )
  }
}

export default DeckList
