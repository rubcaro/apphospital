import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  NativeModules,
  LayoutAnimation
} from "react-native";

import CodigoAzul from "./../components/CodigoAzul";
import Reclamos from "./../components/Reclamos";
import Accidente from "./../components/Accidente";
import Evacuacion from "./../components/Evacuacion";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const customLinearLayout = {
  duration: 200,
  create: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.scaleXY
  },
  update: {
    type: LayoutAnimation.Types.linear
  }
};

export default class ReglamentoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Reglamentos",
      header: navigation.getParam("header", "")
    };
  };
  constructor() {
    super();
    this.state = {
      currentScreen: 0
    };
  }

  backFunction = () => {
    this.setState({ currentScreen: 0 });
    this.props.navigation.setParams({ header: "" });
    LayoutAnimation.configureNext(customLinearLayout);
  };

  changeScreen(screenNumber) {
    this.setState({ currentScreen: screenNumber });
    this.props.navigation.setParams({ header: null });
    LayoutAnimation.configureNext(customLinearLayout);
  }

  render() {
    if (this.state.currentScreen === 1) {
      return <CodigoAzul back={this.backFunction} />;
    }
    if (this.state.currentScreen === 2) {
      return <Reclamos back={this.backFunction} />;
    }
    if (this.state.currentScreen === 3) {
      return <Accidente back={this.backFunction} />;
    }
    if (this.state.currentScreen === 4) {
      return <Evacuacion back={this.backFunction} />;
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.changeScreen(1)}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText1}>CÓDIGO AZUL</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.changeScreen(2)}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText2}>
              RECLAMOS, SUGERENCIAS O FELICITACIONES
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.changeScreen(3)}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText3}>ACCIDENTE CORTOPUNZANTE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.changeScreen(4)}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText4}>PLAN DE EVACUACIÓN</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  buttonText1: {
    backgroundColor: "#0D2084",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
    color: "white",
    marginBottom: 15
  },
  buttonText2: {
    backgroundColor: "#A415B9",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
    color: "white",
    marginBottom: 15
  },
  buttonText3: {
    backgroundColor: "#119727",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
    color: "white",
    marginBottom: 15
  },
  buttonText4: {
    backgroundColor: "#393B3A",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
    color: "white",
    marginBottom: 15
  }
});
