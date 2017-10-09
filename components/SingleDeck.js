import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import {  Entypo } from '@expo/vector-icons'
import { Constants } from 'expo'
import DeckTitle from './DeckTitle'
import { blue, green, white } from '../utils/colours'

class SingleDeck extends React.Component {
  render() {
    const { deck } = this.props.navigation.state.params
    return (
      <View style={[styles.container, {paddingTop: Constants.statusBarHeight + 11}]}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={{fontSize: 18}}><Entypo name='chevron-left' size={18} color={green} />All Decks</Text>
        </TouchableOpacity>
        <View style={[styles.container, {padding: 22}]}>
          <DeckTitle deck={deck} />
          <TouchableOpacity style={[styles.btn, {backgroundColor: blue}]}>
            <Text style={styles.btnText}>Add Card</Text>
          </TouchableOpacity>
          {deck.questions.length > 0 &&
          <TouchableOpacity style={[styles.btn, {backgroundColor: green}]} onPress={() => this.props.navigation.navigate('Quiz', { deck: deck } )}>
            <Text style={styles.btnText}>Start Quiz</Text>
          </TouchableOpacity>}
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  btn: {
    borderRadius: 10,
    height: 45,
    padding: 25,
    marginBottom: 15,
    marginLeft: 25,
    marginRight: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    color: white,
    fontSize: 18
  }
})

export default SingleDeck

