import React from 'react'
import { connect } from 'react-redux'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native'
import {  Entypo } from '@expo/vector-icons'
import { Constants } from 'expo'
import { blue, white, green } from '../utils/colours'
import { createDeck } from '../actions'

class NewQuestion extends React.Component {

  state = {
    question: '',
    answer: ''
  }

  handleCreateQuestion = () => {
    const question = this.state.question.trim()
    const answer = this.state.answer.trim()
    const questions = [...this.props.navigation.state.params.deck.questions, {question, answer}]
    const title = this.props.navigation.state.params.deck.title
    const newQ = {
      title,
      questions
    }
    this.props.dispatch(createDeck(newQ))
    this.setState({question: '', answer: ''})
    this.props.navigation.navigate('Deck', { deck: newQ })
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={[styles.container, {paddingTop: Constants.statusBarHeight + 11}]}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Deck', {deck: this.props.deck})}>
            <Text style={{fontSize: 18}}><Entypo name='chevron-left' size={18} color={green} />Deck</Text>
          </TouchableOpacity>

        <View style={[styles.container, {justifyContent: 'center', padding: 20}]}>
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
        <TouchableOpacity style={[styles.btn, {backgroundColor: blue}]} onPress={this.handleCreateQuestion}>
          <Text style={styles.btnText}>Create Question</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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


const mapStateToProps = (state, props ) => {
  const key = props.navigation.state.params.deck.title
  return ({
      deck: state[key],
      ...props

  })
}

export default connect(mapStateToProps)(NewQuestion)

