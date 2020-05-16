import React from 'react'
import { 
  View, 
  StyleSheet,  
  Button
} from 'react-native'
import Category from './Category'
import conversions from './conversions'

export default class App extends React.Component {
  state = {
    showCategory: false,
    conversion: conversions[0]
  }

  toggleCategory = () => {
    this.setState(prevState => ({showCategory: !prevState.showCategory}))
  }

  render() {
    if (this.state.showCategory) return <Category onSubmit={this.toggleCategory} conversion={this.state.conversion}/>
    return (
      <View style = {styles.inner}>
        {conversions.map(conversion => (
          <Button
            title = {conversion.category}
            onPress = {this.toggleCategory}
          />
        ))}
      </View>
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