import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

class DeckTitle extends React.Component {

  render() {
    return (
      <TouchableOpacity style={[styles.card, {...this.props.customStyles}]} onPress={() => this.props.navigation.navigate('Deck', { deck: this.props.deck} )}>
        <Text style={{fontSize: 36 }}>
          {this.props.deck.title}
        </Text>
        <Text style={{fontSize: 18 }}>
          {this.props.deck.questions.length}&nbsp;
          {this.props.deck.questions.length === 1 ? 'Card' : 'Cards'}
          {JSON.stringify(this.props.handleTouch)}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    borderColor: '#000'
  }
})

export default DeckTitle
