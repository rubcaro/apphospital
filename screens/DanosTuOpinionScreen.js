import React from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { Radio, ListItem, Left } from "native-base";

export default class DanosTuOpinionScreen extends React.Component {
  static navigationOptions = {
    title: "Danos tu opinión"
  };

  constructor() {
    super();
    this.state = {
      encuesta: {
        nombre: "",
        encuesta_id: "",
        preguntas: [
          {
            pregunta: "",
            alternativas: [""]
          }
        ]
      },
      respuesta: {
        encuesta_id: "",
        respuestas: [
          {
            pregunta_id: "",
            alternativa: ""
          }
        ]
      },
      encuesta_id: "",
      preguntas: [
        {
          pregunta_id: "",
          pregunta: "",
          alternativas: [
            {
              id: "",
              alternativa: "",
              selected: false
            }
          ]
        }
      ]
    };
  }

  createPreguntas(encuesta) {
    let preguntas = [];
    // console.log(encuesta);
    encuesta.preguntas.map(pregunta => {
      let alternativas = [];
      pregunta.alternativas.map(alternativa => {
        let nuevaAlternativa = {
          id: alternativa.id,
          alternativa: alternativa.alternativa,
          selected: false
        };
        alternativas.push(nuevaAlternativa);
      });
      preguntas.push({
        pregunta_id: pregunta.id,
        pregunta: pregunta.pregunta,
        alternativas: alternativas
      });
    });
    console.log(encuesta);
    this.setState({ encuesta_id: encuesta.id });
    return preguntas;
  }

  componentDidMount() {
    fetch("http://192.168.0.14:9999/api/encuesta/1")
      .then(res => res.json())
      .then(data => data[0])
      .then(encuesta => {
        let preguntas = this.createPreguntas(encuesta);
        this.setState({ preguntas: preguntas });
      });
  }
  handleRadio(indexPregunta, indexAlternativa) {
    this.setState((prevState, props) => {
      prevState.preguntas[indexPregunta].alternativas.map(
        alternativa => (alternativa.selected = false)
      );
      prevState.preguntas[indexPregunta].alternativas[
        indexAlternativa
      ].selected = true;

      return { preguntas: prevState.preguntas };
    });
  }

  sendEncuesta() {
    let respuesta = { encuesta_id: "", respuestas: [] };
    respuesta.encuesta_id = this.state.encuesta_id;
    this.state.preguntas.map(pregunta => {
      pregunta.alternativas.map(alternativa => {
        if (alternativa.selected) {
          respuesta.respuestas.push({
            pregunta_id: pregunta.pregunta_id,
            alternativa: alternativa.id
          });
        }
      });
    });
    fetch("http://192.168.0.14:9999/api/ingresar-resultado", {
      body: JSON.stringify(respuesta),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text>{this.state.encuesta.nombre}</Text>
        {/* <Text>{this.state.encuesta.preguntas[0].pregunta}</Text> */}
        {this.state.preguntas.map((pregunta, indexPregunta) => (
          <View key={indexPregunta}>
            <Text>{pregunta.pregunta}</Text>
            {pregunta.alternativas.map((alternativa, indexAlternativa) => (
              <ListItem
                key={indexAlternativa}
                style={styles.listRadio}
                onPress={() =>
                  this.handleRadio(indexPregunta, indexAlternativa)
                }
              >
                <Radio
                  selected={alternativa.selected}
                  style={{ marginRight: 5 }}
                />
                <Text>{alternativa.alternativa}</Text>
              </ListItem>
            ))}
          </View>
        ))}
        <Button title="Enviar" onPress={() => this.sendEncuesta()} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  listRadio: {
    flexDirection: "row"
  }
});
