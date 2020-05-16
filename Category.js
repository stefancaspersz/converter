import React from 'react'
import { 
  Platform,
  Keyboard, 
  TouchableWithoutFeedback, 
  KeyboardAvoidingView, 
  View, 
  StyleSheet, 
  Text, 
  TextInput,
  Button
} from 'react-native'

export default class Category extends React.Component {
  state = {
    fromUnit: {name: 'lb', value: 0.45359237},
    toUnit: {name: 'kg', value: 1.0},
    fromUnitValue: '',
    toUnitValue: ''
  }

  handleSubmit = () => {
    this.props.onSubmit()
  }

  onChangeFromUnitValue = fromUnitValue => {
    if (+fromUnitValue >= 0) {
      this.setState({fromUnitValue})
      let result = (this.state.fromUnit.value * fromUnitValue) / this.state.toUnit.value
      this.setState({toUnitValue: result.toString()})
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior = {Platform.OS == "ios" ? "padding" : "height"}
        style = {styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style = {styles.inner}>
            <Text style = {styles.header}>{this.props.conversion.category}</Text>
            <Text style = {styles.text}>{this.state.fromUnit.name}</Text>
            <TextInput
              style = {styles.textInput}
              onChangeText = {this.onChangeFromUnitValue}
              value = {this.state.fromUnitValue}
              keyboardType = "numeric"
            />
            <Text style = {styles.text}>{this.state.toUnit.name}</Text>
            <Text style = {styles.text}>{this.state.toUnitValue}</Text>
            <Button
              title = "Back"
              onPress = {this.handleSubmit}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 20,
    flex: 1,
    justifyContent: "center"
  },
  header: {
    fontSize: 24,
  },
  text: {
    fontSize: 16,
  },
  textInput: {
    fontSize: 16,
    borderColor: "#000000",
    borderWidth: 1,
  }
});