import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import DeckTitle from './DeckTitle'
import { white } from '../utils/colours'
import { getDecks } from '../utils/api'

class DeckList extends React.Component {

   state = {
    decks: {}
  }

componentDidMount() {
  getDecks().then(results => this.setState({
    decks: Object.keys(results).map(key=>results[key])
  }))
  // getDeck('react').then(results => console.log(results))
}

  render() {
    return (
      <View style={styles.container}>
        { this.state.decks ?
        <FlatList data={this.state.decks} renderItem={(deck) => <DeckTitle deck={deck.item} customStyles={{borderBottomWidth: 1}} navigation={this.props.navigation} /> } keyExtractor={(item) => item.title } />
        : <Text>No cards, create a new deck</Text> }
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
