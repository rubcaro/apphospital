import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import MapView, {Marker} from "react-native-maps";
// import MapView from "react-native-maps";
import Communications from "react-native-communications";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Contacto extends React.Component {
  static navigationOptions = {
    title: "Contacto"
  };
  render() {
    return (
      <View>
        <View style={styles.contact}>
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
        </View>

        <View style={styles.container}>
          <MapView
            initialRegion={{
              latitude: -53.121200,
              longitude: -70.895500,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
            }}
            style={styles.map}
          >
            <Marker
              title="Hospital Clínico Magallanes"
              coordinate={{
                latitude: -53.12224,
                longitude: -70.896567,
              }}
            />
          </MapView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: 400,
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  phones: {
    flexDirection: "row",
    
  },
  contact: {
    backgroundColor: "white",
    width: '80%',
    height: 200,
    position: "absolute",
    top: 10,
    left: 20,
    zIndex: 5,
    elevation: 3,
    alignItems: 'center',
    marginLeft: 15
  },
  icon: {
    fontSize: 25,
    marginRight: 10,
    color: "#5B5B5B"
  },
  background: {
    backgroundColor: "#6DC8E3",
    paddingTop: 8,
    alignItems: "center"
  },
  title: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: "center",
    color: "#5B5B5B",
    fontWeight: "bold",
    marginTop: 15
  },
  subtitle: {
    marginBottom: 8,
    fontSize: 18,
    color: "#5B5B5B"
  },
  phoneNumber: {
    fontSize: 20,
    color: "#5B5B5B"
  }
});
