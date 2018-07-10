import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class BancoSangreScreen extends React.Component {
  static navigationOptions = {
    title: "Banco de Sangre"
  };

  render() {
    return (
      <View>
        <Image
          source={require("./../assets/img/afiche-banco-sangre.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 480,
    width: 370
  },
});