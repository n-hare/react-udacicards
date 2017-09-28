import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class DeckTitle extends React.Component {

  render() {
    return (
      <View style={styles.card} >
        <Text style={{fontSize: 36}}>{this.props.deck.title}</Text>
        <Text style={{fontSize: 24}}>{this.props.deck.questions.length} {this.props.deck.questions.length === 1 ? 'Card': 'Cards'}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 30,
    alignItems: 'center'
  }
})

export default DeckTitle