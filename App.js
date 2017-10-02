import React from 'react'
import { Text, View } from 'react-native'
import DeckList from './components/DeckList'
import SingleDeck from './components/SingleDeck'
import NewDeck from './components/NewDeck'

export default class App extends React.Component {
  render() {
    return (
      <NewDeck />
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
