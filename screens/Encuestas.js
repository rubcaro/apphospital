import React from "react";
import {
  View,
  Button,
  ActivityIndicator,
  StyleSheet,
  AsyncStorage,
  TouchableNativeFeedback,
  Text
} from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

export default class Encuestas extends React.Component {
  static navigationOptions = {
    title: "Encuestas disponibles"
  };

  constructor() {
    super();
    this.state = {
      encuestas: null,
      show: false
    };
  }

  async componentDidMount() {
    fetch("http://206.189.220.82/api/encuestas")
      .then(response => response.json())
      .then(data => {
        // this.setState({ encuestas: data });
        this._reviewEncuesta(data);
      });
  }

  _reviewEncuesta = async data => {
    var encuestas1 = [];
    const results = data.map(async (encuesta, index) => {
      return this._retrieveData(`encuesta-${encuesta.id}`).then(data => {
        if (data == null) {
          console.log(encuesta);
          encuestas1[index] = encuesta;
        }
      });
    });
    Promise.all(results).then(() => {
      this.setState({ encuestas: encuestas1 });
    });
  };

  _loopData() {}

  _retrieveData = async id => {
    try {
      const value = await AsyncStorage.getItem(id);
      if (value !== null) {
        return value;
      }
    } catch (error) {
      alert("error");
    }
  };

  render() {
    if (!this.state.encuestas) {
      return (
        <ActivityIndicator
          animating={true}
          style={styles.indicator}
          size="large"
        />
      );
    }
    return (
      <View style={styles.container}>
        {this.state.encuestas.map((encuesta, index) => (
          <TouchableNativeFeedback
            onPress={() =>
              this.props.navigation.navigate("Opinion", {
                encuesta_id: encuesta.id
              })
            }
            background={TouchableNativeFeedback.SelectableBackground()}
            useForeground={true}
            key={index}
          >
            <View style={styles.encuesta}>
              <Text style={styles.nombreEncuesta}>{encuesta.nombre}</Text>
              <IconFontAwesome name="pencil-square-o" style={styles.logo} />
            </View>
          </TouchableNativeFeedback>
        ))}
        {/* <Button
          title="pruhgveba"
          onPress={() => console.log(this.state.encuestas)}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 80
  },
  container: {
    backgroundColor: "white",
    height: "100%",
    paddingHorizontal: 20
  },
  logo: {
    fontSize: 35,
    color: "#5B5B5B",
    marginRight: 10,
  },
  encuesta: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderLeftWidth: 5,
    borderLeftColor: '#6DC8E3',
    borderTopWidth: 0.3,
    borderTopColor: '#B7B7B7',
    borderRightWidth: 0.3,
    borderRightColor: '#B7B7B7',
    borderBottomWidth: 0.3,
    borderBottomColor: '#B7B7B7',
    paddingVertical: 12,
    paddingLeft: 20,
    marginTop: 30,
    elevation: 2
  },
  nombreEncuesta: {
    color: '#5B5B5B',
    fontSize: 20,
    width: 250,
    fontWeight: "400"
  }
});
