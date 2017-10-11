import React from 'react'
import { connect } from 'react-redux'
import { FlatList, StyleSheet, View, Text } from 'react-native'

import { createDeck } from '../actions'
import DeckTitle from './DeckTitle'
import { white } from '../utils/colours'

class DeckList extends React.Component {

  render() {
    return (
      <View style={[styles.container, {justifyContent: 'flex-start'}]}>
        { this.props.decks.length > 0 ?
        <FlatList data={this.props.decks} renderItem={(deck) => <DeckTitle deck={deck.item} customStyles={{borderBottomWidth: 1}} navigation={this.props.navigation} /> } keyExtractor={(item) => item.title } />
        : <View style={[styles.container, {justifyContent: 'center'}]}>
            <Text style={{fontSize: 24, textAlign: 'center'}}>{'No Cards\nCreate a new deck'}</Text>
          </View> }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  }
})


const mapStateToProps = (state, {navigation} ) => {

  return ({
      decks: Object.keys(state).map(key=>state[key]),
      navigation
  })
}


export default connect(mapStateToProps)(DeckList)
