import React from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native'
import { blue, white } from '../utils/colours'

class NewQuestion extends React.Component {

  state = {
    question: '',
    answer: ''
  }


  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={[styles.container, {justifyContent: 'center'}]}>
          <Text style={styles.formLabel}>Question</Text>
          <TextInput
            style={styles.formInput}
            value={this.state.question}
            onChangeText={(text) => this.setState({question:text})} // React Native Docs
          />
          <Text style={styles.formLabel}>Answer</Text>
          <TextInput
            style={styles.formInput}
            value={this.state.answer}
            onChangeText={(text) => this.setState({answer:text})} // React Native Docs
          />
        </View>
        <TouchableOpacity style={[styles.btn, {backgroundColor: blue}]}>
          <Text style={styles.btnText}>Create Question</Text>
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
    justifyContent: 'space-between'
  },
  formLabel: {
    fontSize: 24,
    textAlign: 'left',
    paddingBottom: 10
  },
  formInput: {
    borderBottomWidth: 1,
    borderColor: '#000',
    fontSize: 22,
    marginBottom: 35
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

export default NewQuestion

