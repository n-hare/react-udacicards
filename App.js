import React from 'react'
import { Provider } from 'react-redux'
import { compose, createStore } from 'redux'
import { AsyncStorage, Text, View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Entypo } from '@expo/vector-icons'
import { persistStore, autoRehydrate } from 'redux-persist'

import { setLocalNotification, resetNotifcation } from './utils/api'
import reducers from './reducers/decks'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import SingleDeck from './components/SingleDeck'
import NewQuestion from './components/NewQuestion'
import Quiz from './components/Quiz'



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
  Home: {
    screen: Tabs,
  },
  Deck: {
    screen: SingleDeck
     },
  Quiz: {
    screen: Quiz
  },
  NewQuestion: {
    screen: NewQuestion
  }
},
  // example from https://reactnavigation.org/docs/navigators/stack
  {
   headerMode: 'none',
   mode: 'screen',
  }
)

const store = createStore(reducers, undefined, compose(autoRehydrate()))
persistStore(store, {storage: AsyncStorage})
export default class App extends React.Component {

  componentDidMount() {
    //resetNotifcation()
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <MainNav />
      </Provider>
    )
  }
}

