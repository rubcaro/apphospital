import React from "react";
import { View, Button, ActivityIndicator, StyleSheet } from "react-native";

export default class Encuestas extends React.Component {
  constructor() {
    super();
    this.state = {
      encuestas: null
    };
  }

  componentDidMount() {
    fetch("http://206.189.220.82/api/encuestas")
      .then(response => response.json())
      .then(data => {
        this.setState({ encuestas: data });
        console.log(this.state.encuestas[0]);
      });
  }

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
        {this.state.encuestas.map((encuesta,index) => (
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
