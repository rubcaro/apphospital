import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
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
      preguntas: null
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
    // console.log(encuesta);
    this.setState({ encuesta_id: encuesta.id });
    return preguntas;
  }

  async _fetchData() {
    console.log("http://206.189.220.82/api/encuesta/" + this.props.navigation.getParam('encuesta_id'));
    let response = await fetch("http://206.189.220.82/api/encuesta/" + this.props.navigation.getParam('encuesta_id'));
    let res = await response.json();
    let data = await res[0];
    return data;
  }

  componentDidMount() {
    this._fetchData()
      .then(data => {
        let preguntas = this.createPreguntas(data);
        console.log('vgvhvg'+preguntas);
        this.setState({ preguntas: preguntas });
      })
      .then(console.log(this.state.preguntas))
      .catch(eror => console.log(error));
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
    console.log(respuesta.respuestas.length);
    console.log(respuesta.respuestas );
    if (respuesta.respuestas.length !== 2) {
      alert("Responda todas las preguntas por favor");
    } else {
      fetch("http://206.189.220.82/api/ingresar-resultado", {
        body: JSON.stringify(respuesta),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this._storeData();
          alert("Encuesta enviada correctamente");
        })
        .catch(error => {
          console.log(error);
          alert(
            "Lo sentimos, su encuesta no se ha podido enviar. Vuelva a intentar"
          );
        });
    }
  }

  _storeData = async () => {
    try {
      await AsyncStorage.setItem(`encuesta-${this.props.navigation.getParam('encuesta_id')}`, "1");
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    const { navigation } = this.props;
    const encuestaId = navigation.getParam('encuesta_id', 'NO-ID');
    if (!this.state.preguntas) {
      return (
        <ActivityIndicator
          animating={true}
          style={styles.indicator}
          size="large"
        />
      );
    }
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
  },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 80
  }
});
