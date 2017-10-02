import React from 'react'
import { Text, View } from 'react-native'
import DeckList from './components/DeckList'
import SingleDeck from './components/SingleDeck'

export default class App extends React.Component {
  render() {
    return (
      <SingleDeck />
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
