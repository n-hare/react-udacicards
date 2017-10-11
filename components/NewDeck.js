import React from 'react'
import { connect } from 'react-redux'
import { AsyncStorage, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native'
import { blue, white } from '../utils/colours'
import { createDeck } from '../actions'

class NewDeck extends React.Component {

  state = {
    title: ''
  }

  handleCreateDeck = () => {
    const title = this.state.title.trim()
    const newDeck = {
      title,
      "questions": []
    }
    this.props.dispatch(createDeck(newDeck))
    //AsyncStorage.mergeItem('UdaciCards:flashcards', JSON.stringify(newDeck))
    this.setState({title: ''})
    // line below from https://stackoverflow.com/questions/39226177/how-to-clear-focus-from-an-inputfield-in-react-native
     this.refs.input.blur()
     this.props.navigation.navigate('Deck', { deck: newDeck })
}
  render() {
    return (

      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={{fontSize: 48, textAlign: 'center'}}>Please name the new deck</Text>
        <TextInput
          style={{borderBottomWidth: 1, borderColor: '#000', fontSize: 24, margin: 25}}
          value={this.state.title}
          onChangeText={(text) => this.setState({title:text})} // React Native Docs
          ref="input"
        />

      <TouchableOpacity style={[styles.btn, {backgroundColor: blue}]} onPress={this.handleCreateDeck}>
        <Text style={styles.btnText}>Create Deck</Text>
      </TouchableOpacity>

      </KeyboardAvoidingView>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
    justifyContent: 'center'
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



export default connect()(NewDeck)

