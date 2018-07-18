import React from "react";
import {
  View,
  Button,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Reclamos = props => {
  return (
    <ScrollView>
      <Text style={styles.header}>RECLAMOS, SUGERENCIAS O FELICITACIONES</Text>
      <Text style={styles.pregunta}>¿Cómo se realiza un registro?</Text>
      <View style={styles.item}>
        <Icon style={styles.icon} name="long-arrow-right"/>
        <Text style={styles.itemText}>Dirigirse a la Oficina OIRS ubicada en el primer piso del edificio B.</Text>
      </View>
      <View style={styles.item}>
        <Icon style={styles.icon} name="long-arrow-right"/>
        <Text style={styles.itemText}>Dirigirse a los buzones ubicados en las salas de espera.</Text>
      </View>
      <View style={styles.item}>
        <Icon style={styles.icon} name="long-arrow-right"/>
        <Text style={styles.itemText}>A través de la página web del hospital www.hospitalclinicomagallanes.cl</Text>
      </View>
      <TouchableOpacity onPress={props.back}>
        <Text style={styles.button}>VOLVER</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "white",
    backgroundColor: "#A415B9",
    paddingVertical: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20
  },
  pregunta: {
    color: "#707070",
    fontSize: 23,
    textAlign: "center",
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: 35,
    paddingHorizontal: 50
  },
  item: {
    flexDirection: 'row', 
    marginBottom: 20,
    paddingHorizontal: 20
  },
  icon: {
    color: '#A415B9',
    fontSize: 29,
    marginRight: 10
  },
  itemText: {
    fontSize: 17
  },
  button: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#A415B9',
    alignSelf: 'flex-start',
    borderRadius: 32,
    paddingVertical: 7,
    paddingHorizontal: 25,
    marginTop: 20,
    marginLeft: 20
  }
});

export default Reclamos;
