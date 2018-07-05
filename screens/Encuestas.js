import React from "react";
import {
  View,
  Button,
  ActivityIndicator,
  StyleSheet,
  AsyncStorage
} from "react-native";

export default class Encuestas extends React.Component {
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
      <View>
        {this.state.encuestas.map((encuesta, index) => (
          <Button
            title={encuesta.nombre}
            key={index}
            onPress={() =>
              this.props.navigation.navigate("Opinion", {
                encuesta_id: encuesta.id
              })
            }
          />
        ))}
        <Button
          title="pruhgveba"
          onPress={() => console.log(this.state.encuestas)}
        />
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
  }
});
