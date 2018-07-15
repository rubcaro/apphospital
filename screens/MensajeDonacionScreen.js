import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class MensajeDonacionScreen extends React.Component {
  static navigationOptions = {
    title: "",
    header: null
  };

  render() {
    return (
      <View style={{ backgroundColor: "white", height: "100%" }}>
        <View style={styles.iconsContainer}>
          <Image style={styles.image} source={require("./../assets/img/logo-hospital.png")} />
          <Image style={styles.image} source={require("./../assets/img/logo-banco-sangre.png")} />
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>{this.props.navigation.getParam("messageBody")}</Text>
        </View>
        <Text style={styles.italic}>Tu donación puede salvar una vida</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("BancoSangre");
          }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Descubre como donar</Text>
          </View>
        </TouchableOpacity>
        {/* <Text style={{ fontWeight: "bold", fontSize: 25 }}>
          {this.props.navigation.getParam("messageTitle")}
        </Text>
        <Text>{this.props.navigation.getParam("messageBody")}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent: 'center',
    marginTop: 40
  },
  messageContainer: {
    borderLeftWidth: 6,
    borderLeftColor: '#BE1522',
    paddingLeft: 10,
    marginBottom: 40,
    marginHorizontal: 20
  },
  messageText: {
    fontSize: 30
  },
  image: {
    height: 80,
    width: 80,
    marginRight: 15
  },
  italic: {
    fontStyle: 'italic',
    marginBottom: 50,
    fontSize: 20,
    textAlign: 'center'
  },
  button: {
    backgroundColor: "#BE1522",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
    alignSelf: "center"
  },
  buttonText: {
    // fontWeight: "bold",
    fontSize: 25,
    color: "white",
    textAlign: "center"
  },
});
