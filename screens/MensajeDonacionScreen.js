import React from "react";
import { View, Text } from "react-native";

export default class BancoSangreScreen extends React.Component {
  static navigationOptions = {
    title: "Banco de Sangre"
  };
  
  render() {
    return (
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 25}}>{this.props.navigation.getParam('messageTitle')}</Text>
        <Text>{this.props.navigation.getParam('messageBody')}</Text>
      </View>
    );
  }
}
