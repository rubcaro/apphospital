import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import MapView from "react-native-maps";
import Communications from "react-native-communications";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Contacto extends React.Component {
  static navigationOptions = {
    title: "Contacto"
  };
  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.title}>Teléfonos de contacto</Text>
        <Text style={styles.subtitle}>Fono urgencias</Text>
        <View style={styles.phones}>
          <TouchableOpacity
            onPress={() => Communications.phonecall("612293295", true)}
            style={styles.phones}
          >
            <Icon name="phone" style={styles.icon} />
            <Text style={styles.phoneNumber}>61 2 293295</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>Fono mesa central</Text>
        <View style={styles.phones}>
          <TouchableOpacity
            onPress={() => Communications.phonecall("612293000", true)}
            style={styles.phones}
          >
            <Icon name="phone" style={styles.icon} />
            <Text style={styles.phoneNumber}>61 2 293000</Text>
          </TouchableOpacity>
        </View>
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
    // ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  phones: {
    backgroundColor: "white",
    flexDirection: "row",
    marginBottom: 6,
    marginLeft: 5
  },
  icon: {
    fontSize: 25,
    marginRight: 10
  },
  background: {
    backgroundColor: "white",
    paddingTop: 8
  },
  title: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: "center"
  },
  subtitle: {
    marginBottom: 8,
    fontSize: 18
  },
  phoneNumber: {
    fontSize: 20
  }
});
