import React from "react";
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Communications from "react-native-communications";

const CodigoAzul = props => {
  return (
    <ScrollView>
      <Text style={styles.header}>CÓDIGO AZUL</Text>
      <TouchableOpacity onPress={() => Communications.phonecall("613093", true)}>
        <Text style={styles.llamar}>LLAMAR</Text>
      </TouchableOpacity>
      <Text style={styles.pregunta}>¿Cómo activo el código azul?</Text>
      <View style={styles.instructionContainer}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>1</Text>
        </View>
        <Text style={styles.instruction}>Llamo al número 613093</Text>
      </View>
      <View style={styles.instructionContainer}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>2</Text>
        </View>
        <Text style={styles.instruction}>Digo código azul</Text>
      </View>
      <View style={styles.instructionContainer}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>3</Text>
        </View>
        <Text style={styles.instruction}>Me identifico</Text>
      </View>
      <View style={styles.instructionContainer}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>4</Text>
        </View>
        <Text style={styles.instruction}>Señalo el lugar de la emergencia</Text>
      </View>
      <View style={styles.instructionContainer}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>5</Text>
        </View>
        <Text style={styles.instruction}>Digo si se trata de adulto o niño</Text>
      </View>
      <TouchableOpacity onPress={props.back}>
        <Text style={styles.button}>VOLVER</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    color: 'white',
    backgroundColor: '#27347B',
    paddingVertical: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 20
  },
  llamar: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#35B3EB',
    alignSelf: 'center',
    borderRadius: 32,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginBottom: 20
  },
  pregunta: {
    color: '#707070',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 25
  },
  instructionContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    paddingHorizontal: 15,
  },
  circle: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: 35,
    height: 35,
    backgroundColor: '#27347B',
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
  button: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#27347B',
    alignSelf: 'flex-start',
    borderRadius: 32,
    paddingVertical: 7,
    paddingHorizontal: 25,
    marginTop: 20,
    marginLeft: 20
  }
})

export default CodigoAzul;
