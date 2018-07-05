import React from "react";
import { View, Text, AsyncStorage, Button } from "react-native";

export default class PreguntasScreen extends React.Component {
  static navigationOptions = {
    title: "Preguntas Frecuentes"
  };

  componentDidMount() {
    this._retrieveData();
  }

  _storeData = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      // Error saving data
    }
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getAllKeys();
      if (value !== null) {
        // We have data!!
        alert(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  render() {
    return (
      <View>
        <Text>Preguntas </Text>
        <Button title="Store storage" onPress={() => this._storeData()} />
      </View>
    );
  }
}
