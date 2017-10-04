import React from 'react'
import { Text, View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import {  Entypo } from '@expo/vector-icons'

import { setData, getDecks } from './utils/api'
import DeckList from './components/DeckList'
import SingleDeck from './components/SingleDeck'
import NewDeck from './components/NewDeck'

import { AsyncStorage } from 'react-native'


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

const MainNav = StackNavigator({
  Home: { screen: Tabs },
  Deck: { screen: SingleDeck },

})

export default class App extends React.Component {
  componentDidMount() {
    AsyncStorage.removeItem('UdaciCards:flashcards')

  }
  render() {
    return (
      <MainNav />
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
