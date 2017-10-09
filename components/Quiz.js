import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { blue, green, red, white } from '../utils/colours'

class Quiz extends React.Component {
  state = {
    correctAnswers: 0,
    complete: false,
    questions: this.props.navigation.state.params.deck.questions,
    questionNumber: 0,
    showAnswer: false
  }
  render() {
    const {deck} = this.props.navigation.state.params

    return (
      <View style={[styles.container, {padding: 20}]}>
      { this.state.complete ?
        <View style={styles.container}>
        <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
            <Text style={{fontSize: 36}}>Quiz Complete</Text>
            <Text style={{fontSize: 24}} >{`${this.state.correctAnswers}/${this.state.questions.length}`}</Text>
          </View>
          <TouchableOpacity style={[styles.btn, {backgroundColor: blue}]}
            onPress={() => this.setState({
              correctAnswers: 0,
              complete: false,
              questionNumber: 0,
              showAnswer: false
            })}
          >
            <Text style={styles.btnText}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {backgroundColor: green}]}
            onPress={() => this.props.navigation.navigate('Deck', { deck })}
          >
            <Text style={styles.btnText}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
        :
        <View style={styles.container}>
          <Text style={{fontSize: 18}} >{`${this.state.questionNumber + 1}/${this.state.questions.length}`}</Text>
          <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
            <Text style={{fontSize: 24, textAlign: 'center'}} >
              { this.state.showAnswer ?
                this.state.questions[this.state.questionNumber].answer :
                this.state.questions[this.state.questionNumber].question }
            </Text>
            <TouchableOpacity
              onPress={() => { this.setState(prevState => {
                return {showAnswer: !prevState.showAnswer}
              })}}
            >
              <Text style={[styles.btn, {color:red, fontSize: 18}]}> {this.state.showAnswer ? 'Question' : 'Answer'} </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.btn, {backgroundColor: green}]}
            onPress={() => { this.setState(prevState => {
              if (prevState.questionNumber < prevState.questions.length - 1) {
                return { questionNumber: ++prevState.questionNumber, correctAnswers: ++prevState.correctAnswers, showAnswer: false }
              } else {
                return { correctAnswers: ++prevState.correctAnswers, complete: true }
              }
            })}}
          >
            <Text style={styles.btnText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {backgroundColor: red}]}
              onPress={() => { this.setState(prevState => {
                if (prevState.questionNumber < prevState.questions.length - 1) {
                  return { questionNumber: ++prevState.questionNumber, showAnswer: false}
                } else {
                  return { complete: true}
                }
              }
            )}}
          >
            <Text style={styles.btnText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      }
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

export default Quiz
