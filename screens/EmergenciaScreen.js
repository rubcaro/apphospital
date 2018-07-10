import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Communications from "react-native-communications";

export default class EmergenciaScreen extends React.Component {
  static navigationOptions = {
    title: "Emergencia Hospitalaria"
  };
  render() {
    return (
      <View style={{backgroundColor: '#6DC8E3', justifyContent: 'flex-start'}}>
        <Text style={styles.subtitle}>Teléfono</Text>
        <View style={styles.phones}>
          <TouchableOpacity
            onPress={() => Communications.phonecall("612293295", true)}
            style={styles.phones}
          >
            <Icon name="phone" style={styles.icon} />
            <Text style={styles.phoneNumber}>61 2 293295</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("./../assets/img/emergencias.jpg")}
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
  phones: {
    flexDirection: "row",
    marginBottom: 6,
    backgroundColor: "#6DC8E3",
    marginLeft: 10,
    marginTop: 5
  },
  icon: {
    fontSize: 25,
    marginRight: 10,
    color: "white"
  },
  phoneNumber: {
    fontSize: 20,
    color: "white"
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
    marginTop: 10
  },
});
