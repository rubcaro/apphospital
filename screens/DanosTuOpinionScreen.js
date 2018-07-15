import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  ActivityIndicator,
  AsyncStorage,
  Alert,
  ProgressBarAndroid,
  NativeModules,
  LayoutAnimation,
  TouchableNativeFeedback
} from "react-native";
import { Radio, ListItem, Left } from "native-base";

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

export default class DanosTuOpinionScreen extends React.Component {
  static navigationOptions = {
    title: "Nombre de la encuesta",
    header: null
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
      preguntas: null,
      currentPregunta: null,
      currentIndexPregunta: 0,
      showEncuesta: false
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
    console.log(
      "http://206.189.220.82/api/encuesta/" +
        this.props.navigation.getParam("encuesta_id")
    );
    let response = await fetch(
      "http://206.189.220.82/api/encuesta/" +
        this.props.navigation.getParam("encuesta_id")
    );
    let res = await response.json();
    let data = await res[0];
    return data;
  }

  componentDidMount() {
    this._fetchData()
      .then(data => {
        let preguntas = this.createPreguntas(data);
        this.setState({
          currentPregunta: preguntas[this.state.currentIndexPregunta]
        });
        console.log(this.state.currentPregunta);
        this.setState({ preguntas: preguntas });
      })
      .then(console.log(this.state.preguntas))
      .catch(error => console.log(error));
  }
  handleRadio(indexAlternativa) {
    this.setState((prevState, props) => {
      prevState.preguntas[this.state.currentIndexPregunta].alternativas.map(
        alternativa => (alternativa.selected = false)
      );
      prevState.preguntas[this.state.currentIndexPregunta].alternativas[
        indexAlternativa
      ].selected = true;

      return { preguntas: prevState.preguntas };
    });
  }

  sendEncuesta() {
    Alert.alert(
      "Confirmación de envío",
      "¿Está seguro que desea enviar la encuesta?",
      [
        { text: "Cancelar", onPress: () => {}, style: "cancel" },
        { text: "Enviar", onPress: () => this.storeResult() }
      ]
    );
  }

  storeResult() {
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
    console.log(this.state.preguntas);
    if (respuesta.respuestas.length !== this.state.preguntas.length) {
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
      await AsyncStorage.setItem(
        `encuesta-${this.props.navigation.getParam("encuesta_id")}`,
        "1"
      );
    } catch (error) {
      // Error saving data
    }
  };

  nextPregunta() {
    let newIndex = this.state.currentIndexPregunta + 1;
    Promise.resolve()
      .then(() => {
        this.setState({
          currentIndexPregunta: newIndex
        });
      })
      .then(() => {
        this.setState({
          currentPregunta: this.state.preguntas[this.state.currentIndexPregunta]
        });
        console.log(
          this.state.currentIndexPregunta + " " + this.state.preguntas.length
        );
      });
    // LayoutAnimation.linear();
    LayoutAnimation.configureNext(customLinearLayout);
  }

  backPregunta() {
    let newIndex = this.state.currentIndexPregunta - 1;
    Promise.resolve()
      .then(() => {
        this.setState({
          currentIndexPregunta: newIndex
        });
      })
      .then(() => {
        this.setState({
          currentPregunta: this.state.preguntas[this.state.currentIndexPregunta]
        });
      });
    LayoutAnimation.configureNext(customLinearLayout);
  }

  checkSendButton() {
    if (this.state.currentIndexPregunta === this.state.preguntas.length - 1) {
      return {
        backgroundColor: "#6DC8E3",
        paddingHorizontal: 60,
        paddingVertical: 10,
        marginHorizontal: 70,
      };
    } else {
      return {
        backgroundColor: "#6DC8E3",
        paddingHorizontal: 60,
        paddingVertical: 10,
        opacity: 0.5,
        marginHorizontal: 70,
      }
    }
  }

  checkSendButtonDisabled() {
    if (this.state.currentIndexPregunta === this.state.preguntas.length - 1) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { navigation } = this.props;
    const encuestaId = navigation.getParam("encuesta_id", "NO-ID");
    if (!this.state.preguntas) {
      return (
        <ActivityIndicator
          animating={true}
          style={styles.indicator}
          size="large"
        />
      );
    }
    if (!this.state.showEncuesta) {
      return (
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            alignItems: "center"
          }}
        >
          {/* <View style={styles.instructionsContainer}> */}
          <Text style={styles.textInstructions}>
            Por favor, responda estas preguntas (tiempo estimado, 5 minutos)
          </Text>
          {/* </View> */}

          <TouchableNativeFeedback
            onPress={() => {
              this.setState({ showEncuesta: true });
              LayoutAnimation.spring();
            }}
            background={TouchableNativeFeedback.SelectableBackground()}
            useForeground={true}
          >
            <View style={styles.startButton}>
              <Text style={styles.startButtonText}>COMENZAR</Text>
            </View>
          </TouchableNativeFeedback>
          {/* <Button
            title="comenzar"
            onPress={() => {
              this.setState({ showEncuesta: true });
              LayoutAnimation.spring();
            }}
          /> */}
        </View>
      );
    }
    return (
      <View style={{ backgroundColor: "white", height: "100%" }}>
        <View style={styles.header}>
          {this.state.currentIndexPregunta !== 0 && (
            <TouchableNativeFeedback
              onPress={() => {
                this.setState({ showEncuesta: true });
                LayoutAnimation.spring();
              }}
              background={TouchableNativeFeedback.SelectableBackground()}
              useForeground={true}
              onPress={() => this.backPregunta()}
            >
              <View style={[styles.buttonHeader, styles.buttonBack]}>
                <Text style={styles.buttonHeaderText}>Anterior</Text>
              </View>
            </TouchableNativeFeedback>
          )}
          <Text style={styles.textHeader}>
            {this.state.currentIndexPregunta + 1} de{" "}
            {this.state.preguntas.length}
          </Text>
          {this.state.currentIndexPregunta <
            this.state.preguntas.length - 1 && (
            <TouchableNativeFeedback
              onPress={() => {
                this.setState({ showEncuesta: true });
                LayoutAnimation.spring();
              }}
              background={TouchableNativeFeedback.SelectableBackground()}
              useForeground={true}
              onPress={() => this.nextPregunta()}
            >
              <View style={[styles.buttonHeader, styles.buttonNext]}>
                <Text style={styles.buttonHeaderText}>Siguiente</Text>
              </View>
            </TouchableNativeFeedback>
          )}
        </View>

        <View style={styles.preguntaContainer}>
          <Text style={styles.pregunta}>
            {this.state.currentPregunta.pregunta}
          </Text>
          {this.state.currentPregunta.alternativas.map(
            (alternativa, indexAlternativa) => (
              <ListItem
                key={indexAlternativa}
                style={styles.listRadio}
                onPress={() => this.handleRadio(indexAlternativa)}
              >
                <Radio
                  selected={alternativa.selected}
                  style={{ marginRight: 5 }}
                  selectedColor="#6DC8E3"
                />
                <Text style={styles.alternativa}>
                  {alternativa.alternativa}
                </Text>
              </ListItem>
            )
          )}
        </View>
        {/* {this.state.preguntas.map((pregunta, indexPregunta) => (
          <View key={indexPregunta} style={styles.preguntaContainer}>
            <Text style={styles.pregunta}>{pregunta.pregunta}</Text>
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
                  selectedColor="#6DC8E3"
                />
                <Text style={styles.alternativa}>{alternativa.alternativa}</Text>
              </ListItem>
            ))}
          </View>
        ))} */}
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          color="#6DC8E3"
          progress={
            ((this.state.currentIndexPregunta + 1) * 100) /
            this.state.preguntas.length /
            100
          }
        />
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}
          useForeground={true}
          onPress={() => this.sendEncuesta()}
          disabled={this.checkSendButtonDisabled()}
        >
          <View style={this.checkSendButton()}>
            <Text style={styles.buttonEnviarText}>Enviar</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listRadio: {
    flexDirection: "row",
  },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 80
  },
  instructionsContainer: {
    backgroundColor: "#E3F5FA",
    paddingHorizontal: 25,
    paddingVertical: 15
  },
  textInstructions: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#313131",
    textAlign: "center",
    paddingHorizontal: 30,
    marginTop: 150,
    marginBottom: 70
  },
  startButton: {
    backgroundColor: "#6DC8E3",
    paddingHorizontal: 60,
    paddingVertical: 10
  },
  startButtonText: {
    color: "white",
    fontSize: 20
  },
  pregunta: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 25
  },
  alternativa: {
    fontSize: 15
  },
  preguntaContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    height: 400
    // flex: 3
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center"
    // position: 'absolute',
    // top: 400,
  },
  next: {
    marginLeft: 150,
    width: 200
  },
  prev: {},
  header: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "#EBEBEB",
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttonHeader: {
    backgroundColor: "#6DC8E3",
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  buttonNext: {
    alignSelf: "flex-end",
    position: "absolute",
    top: 0,
    right: 0
  },
  buttonBack: {
    alignSelf: "flex-start"
  },
  buttonHeaderText: {
    color: "white",
    fontSize: 15
  },
  textHeader: {
    fontSize: 15,
    position: "absolute",
    left: 150
  },
  buttonEnviar: {
    backgroundColor: "#6DC8E3",
    paddingHorizontal: 60,
    paddingVertical: 10,
    opacity: 0.5
  },
  buttonEnviarText: {
    color: "white",
    textAlign: "center",
    fontSize: 20
  }
});
