import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import MapView from "react-native-maps";
import Communications from "react-native-communications";

export default class Contacto extends React.Component {
  render() {
    return (
      <View>
        <Button
          title="Llamar"
          onPress={() => Communications.phonecall("0123456789", true)}
        />
        <View style={styles.container}>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            style={styles.map}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
