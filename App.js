import React from 'react'
import { Text, View } from 'react-native'
import DeckList from './components/DeckList'
import SingleDeck from './components/SingleDeck'
import NewDeck from './components/NewDeck'
import { TabNavigator } from 'react-navigation'
import {  Entypo } from '@expo/vector-icons'

const Tabs = TabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: <Entypo name='documents' size={30}  />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: <Entypo name='plus' size={30}  />
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Tabs />
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
