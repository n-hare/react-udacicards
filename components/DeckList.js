import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import DeckTitle from './DeckTitle'
import { white } from '../utils/colours'
import { getDecks } from '../utils/api'

class DeckList extends React.Component {

//     state = { decks: [
//   {
//     title: 'React',
//     questions: [
//       {
//         question: 'What is React?',
//         answer: 'A library for managing user interfaces'
//       },
//       {
//         question: 'Where do you make Ajax requests in React?',
//         answer: 'The componentDidMount lifecycle event'
//       }
//     ]
//   },
//   {
//     title: 'ES6',
//     questions: [
//       {
//         question: 'What is a closure?',
//         answer: 'The combination of a function and the lexical environment within which that function was declared.'
//       }
//     ]
//   }
// ]}
state = {
  decks: {}
}

componentDidMount() {
  getDecks().then((results) => this.setState({decks: results}))
}

  render() {
    return (
      <View style={styles.container}>
        { this.state.decks ?
        <FlatList data={this.state.decks} renderItem={(deck) => <DeckTitle deck={deck.item} customStyles={{borderBottomWidth: 1}} navigation={this.props.navigation} /> } keyExtractor={(item) => item.title } />
        : <Text>No cards, create a new deck</Text> }
        <Text>{JSON.stringify(this.state.decks.React)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
    justifyContent: 'flex-start',
  }
})

export default DeckList
