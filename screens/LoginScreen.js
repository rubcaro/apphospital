import React from "react";
import { View, Text, Image, StyleSheet, TextInput, Button } from "react-native";

export default class LoginScreen extends React.Component {

  static navigationOptions = {
    title: "Ingreso"
  };

  constructor() {
    super();
    this.state = {
      user: "",
      password: ""
    };
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={input => this.setState({ user: input })}
          value={this.state.user}
        />
        <TextInput
          onChangeText={input => this.setState({ password: input })}
          value={this.state.password}
          secureTextEntry={true}
        />
        <Button title="Ingrear" onPress={() => this.props.navigation.navigate('Home')}/>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 480,
    width: 370
  }
});
