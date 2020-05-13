import React from 'react';
import { 
  Platform,
  Keyboard, 
  TouchableWithoutFeedback, 
  KeyboardAvoidingView, 
  View, 
  StyleSheet, 
  Text, 
  TextInput 
} from 'react-native';

export default class App extends React.Component {
  state = {
    convertType: 'Mass',
    fromUnit: {name: 'lb', value: 453.59237},
    baseUnit: {name: 'g', value: 1.0},
    toUnit: {name: 'kg', value: 1000.0},
    fromUnitValue: '',
    toUnitValue: '',
  }

  onChangeFromUnitValue = fromUnitValue => {
    if (+fromUnitValue >= 0) {this.setState({fromUnitValue})}
    let result = (fromUnitValue * this.state.fromUnit.value) / this.state.toUnit.value 
    this.state.toUnitValue = result.toString()
  }

  onChangeToUnitValue = toUnitValue => {
    if (+toUnitValue >= 0) {this.setState({toUnitValue})}
    let result = (toUnitValue * this.state.toUnit.value) / this.state.fromUnit.value 
    this.state.fromUnitValue = result.toString()
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text style={styles.header}>{this.state.convertType}</Text>
            <Text style={styles.text}>{this.state.fromUnit.name}</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={this.onChangeFromUnitValue}
              value={this.state.fromUnitValue}
              keyboardType="numeric"
            />
            <Text style={styles.text}>{this.state.toUnit.name}</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={this.onChangeToUnitValue}
              value={this.state.toUnitValue}
              keyboardType="numeric"
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  text: {
    fontSize: 16,
    marginBottom: 40
  },
  textInput: {
    fontSize: 24,
    height: 50,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 20
  }
});