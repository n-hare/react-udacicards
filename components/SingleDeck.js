import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import DeckTitle from './DeckTitle'
import { blue, green, white } from '../utils/colours'

class SingleDeck extends React.Component {

  render() {
    const { deck } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <DeckTitle deck={deck} />
        <TouchableOpacity style={[styles.btn, {backgroundColor: blue}]}>
          <Text style={styles.btnText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, {backgroundColor: green}]} onPress={() => this.props.navigation.navigate('Quiz', { deck: deck } )}>
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

