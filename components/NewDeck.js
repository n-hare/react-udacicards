import React from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native'
import { blue, white } from '../utils/colours'

class NewDeck extends React.Component {

  state = {
    title: ''
  }


  render() {
    return (

        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Text style={{fontSize: 48, textAlign: 'center'}}>Please name the new deck</Text>
            <TextInput
              style={{borderBottomWidth: 1, borderColor: '#000', fontSize: 24, margin: 25}}
              value={this.state.input}
              onChangeText={(text) => this.setState({title:text})} // React Native Docs
            />
          <TouchableOpacity style={[styles.btn, {backgroundColor: blue}]}>
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

export default NewDeck

