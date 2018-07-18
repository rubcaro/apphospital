import React from "react";
import { View, Text, AsyncStorage, Button } from "react-native";
import { Accordion } from "native-base";

export default class PreguntasScreen extends React.Component {
  static navigationOptions = {
    title: "Preguntas Frecuentes"
  };

  constructor() {
    super();
    this.state = {
      dataArray: [
        {
          title: "Primera pregunta",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat velit sed accumsan tristique. Vivamus elementum blandit tincidunt. Donec vel diam malesuada, semper enim ac."
        },
        {
          title: "Segunda pregunta",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat velit sed accumsan tristique. Vivamus elementum blandit tincidunt. Donec vel diam malesuada, semper enim ac."
        },
        {
          title: "Tercera pregunta",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat velit sed accumsan tristique. Vivamus elementum blandit tincidunt. Donec vel diam malesuada, semper enim ac."
        },
        {
          title: "Primera pregunta",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat velit sed accumsan tristique. Vivamus elementum blandit tincidunt. Donec vel diam malesuada, semper enim ac."
        },
        {
          title: "Segunda pregunta",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat velit sed accumsan tristique. Vivamus elementum blandit tincidunt. Donec vel diam malesuada, semper enim ac."
        },
        {
          title: "Tercera pregunta",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat velit sed accumsan tristique. Vivamus elementum blandit tincidunt. Donec vel diam malesuada, semper enim ac."
        }
      ]
    };
  }

  componentDidMount() {
    // this._retrieveData();
  }

  // _storeData = async () => {
  //   try {
  //     await AsyncStorage.clear();
  //   } catch (error) {

  //   }
  // };

  // _retrieveData = async () => {
  //   try {
  //     const value = await AsyncStorage.getAllKeys();
  //     if (value !== null) {

  //       alert(value);
  //     }
  //   } catch (error) {
  //   }
  // };
  render() {
    return (
      <View>
        <Accordion
          dataArray={this.state.dataArray}
          expanded={0}
        />
      </View>
    );
  }
}
