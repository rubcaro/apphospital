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
              latitude: -53.122948,
              longitude: -70.894893,
              latitudeDelta: 0.0100,
              longitudeDelta: 0.0100
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
    alignItems: "center",
    marginTop: 10
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  phones: {
    flexDirection: "row",
    marginBottom: 6,
    // marginLeft: 5
  },
  icon: {
    fontSize: 25,
    marginRight: 10,
    color: 'white'
  },
  background: {
    backgroundColor: "#6DC8E3",
    paddingTop: 8,
    alignItems: 'center'
  },
  title: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: "center",
    color: 'white',
    fontWeight: 'bold',
    marginTop: 15
  },
  subtitle: {
    marginBottom: 8,
    fontSize: 18,
    color: 'white'
  },
  phoneNumber: {
    fontSize: 20,
    color: 'white'
  }
});
