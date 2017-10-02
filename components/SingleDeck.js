import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import DeckTitle from './DeckTitle'
import { blue, green, white } from '../utils/colours'

class SingleDeck extends React.Component {

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
      <View style={styles.container}>
        <DeckTitle deck={this.state.decks[0]} />
          <TouchableOpacity style={[styles.btn, {backgroundColor: blue}]}>
            <Text style={styles.btnText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {backgroundColor: green}]}>
            <Text style={styles.btnText}>Start Quiz</Text>
          </TouchableOpacity>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
  },
  btn: {
    borderRadius: 10,
    height: 45,
    padding: 10,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    color: white,
    fontSize: 18
  }
})

export default SingleDeck

