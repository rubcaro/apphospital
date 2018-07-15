import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  NativeModules,
  LayoutAnimation
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Communications from "react-native-communications";

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

export default class EmergenciaScreen extends React.Component {
  static navigationOptions =  ({ navigation }) => {
    return {
      title: "Emergencia Hospitalaria",
      header: navigation.getParam('header','')
    }
  };

  constructor() {
    super();
    this.state = {
      showOne: false
    };
  }

  render() {
    if (this.state.showOne) {
      return (
        <View style={{ backgroundColor: "red", height: "100%" }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ showOne: !this.state.showOne });
            this.props.navigation.setParams({header: ''})
            LayoutAnimation.configureNext(customLinearLayout);
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 20
              }}
            >
              1 GRAVE
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View
        style={{ backgroundColor: "#6DC8E3", justifyContent: "flex-start" }}
      >
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
        <TouchableOpacity
          onPress={() => {
            this.setState({ showOne: !this.state.showOne });
            this.props.navigation.setParams({header: null})
            LayoutAnimation.configureNext(customLinearLayout);
          }}
        >
          <Image source={require("./../assets/img/prueba.png")} />
        </TouchableOpacity>
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
    marginBottom: 100,
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
    color: "white",
    marginLeft: 10,
    marginTop: 10
  }
});
