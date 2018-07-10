import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableNativeFeedback
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      user: "",
      password: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#FFFFFF", "#F7FCFD", "#A8DEEE", "#6DC8E3"]}
          style={styles.linearGradient}
        >
          <Image
            style={styles.logo}
            source={require("./../assets/img/logo-hospital.png")}
          />
          <View style={styles.form}>
            <View style={styles.inputContainer1}>
              <Icon style={styles.icon} name="user" />
              <TextInput
                onChangeText={input => this.setState({ user: input })}
                value={this.state.user}
                style={styles.input}
                underlineColorAndroid="white"
                autoFocus={true}
              />
            </View>
            <View style={styles.inputContainer2}>
              <MaterialIcon style={styles.icon} name="key-variant" />
              <TextInput
                onChangeText={input => this.setState({ password: input })}
                value={this.state.password}
                secureTextEntry={true}
                underlineColorAndroid="white"
                style={styles.input}
              />
            </View>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate("Home")}
              background={TouchableNativeFeedback.SelectableBackground()}
              useForeground={true}
            >
              <View style={styles.button} >
                <Text style={styles.buttonText}>INGRESAR</Text>
                <MaterialIcon style={styles.arrowIcon} name="arrow-right"/>
              </View>
            </TouchableNativeFeedback>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5
    height: "100%",
    alignItems: "center",
    width: "100%"
  },
  container: {},
  logo: {
    top: 120,
    height: 150,
    width: 140
  },
  form: {
    top: 160,
    width: 220
  },
  input: {
    backgroundColor: "white",
    color: "#555555"
  },
  icon: {
    color: "#6DC8E3",
    fontSize: 18,
    paddingTop: 15,
    paddingLeft: 15,
    marginRight: 22
  },
  inputContainer1: {
    backgroundColor: "white",
    flexDirection: "row",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderWidth: 1,
    borderColor: "#D1D1D1"
  },
  inputContainer2: {
    backgroundColor: "white",
    flexDirection: "row",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 1,
    borderColor: "#D1D1D1"
    // borderTopWidth: 1,
    // borderTopColor:
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 35,
    flexDirection: 'row',
    paddingVertical: 10,
    elevation: 1
  },
  arrowIcon: {
    color: '#646464',
    fontSize: 22,
    flex: 1
  },
  buttonText: {
    flex:3,
    textAlign: 'center',
    fontSize: 15
  }
});
