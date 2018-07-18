import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView
} from "react-native";

export default class ReglamentoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "IAAS",
      header: navigation.getParam("header", "")
    };
  };
  constructor() {
    super();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>¿Que hacer al presentarse un caso?</Text>
        <View style={styles.instructionContainer}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>1</Text>
          </View>
          <Text style={styles.instruction}>Verificar el diagnóstico</Text>
        </View>
        <View style={styles.instructionContainer}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>2</Text>
          </View>
          <Text style={styles.instruction}>Definición de casos</Text>
        </View>
        <View style={styles.instructionContainer}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>3</Text>
          </View>
          <Text style={styles.instruction}>Iniciar búsqueda de casos</Text>
        </View>
        <View style={styles.instructionContainer}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>4</Text>
          </View>
          <Text style={styles.instruction}>Determinación preliminar del brote</Text>
        </View>
        <View style={styles.instructionContainer}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>5</Text>
          </View>
          <Text style={styles.instruction}>Estudio epidemológico</Text>
        </View>
        <View style={styles.instructionContainer}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>6</Text>
          </View>
          <Text style={styles.instruction}>Análisi preliminar</Text>
        </View>
        <View style={styles.instructionContainer}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>7</Text>
          </View>
          <Text style={styles.instruction}>Iniciar medidas de control</Text>
        </View>
        <View style={styles.instructionContainer}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>8</Text>
          </View>
          <Text style={styles.instruction}>Iniciar investigaciones</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  instructionContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    paddingHorizontal: 15,
  },
  circle: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: 35,
    height: 35,
    backgroundColor: '#6DC8E3',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    marginBottom: 10
  },
  circleText:{
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  instruction: {
    color: '#707070',
    fontSize: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 25
  }
});
