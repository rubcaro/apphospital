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

const Evacuacion = props => {
  return (
    <ScrollView>
      <Text style={styles.header}>PLAN DE EVACUACIÓN</Text>
      <Text style={styles.pregunta}>¿Qué es lo que se debe saber sobre el Plan de evacuación?</Text>
      <View style={styles.item}>
        <Icon style={styles.icon} name="long-arrow-right"/>
        <Text style={styles.itemText}>Las vías de evacuación de su servicio o unidad.</Text>
      </View>
      <View style={styles.item}>
        <Icon style={styles.icon} name="long-arrow-right"/>
        <Text style={styles.itemText}>Las zonas de seguridad de su servicio o unidad.</Text>
      </View>
      <View style={styles.item}>
        <Icon style={styles.icon} name="long-arrow-right"/>
        <Text style={styles.itemText}>En caso de no estar en su servicio o unidad debe: "Seguir al lider que lo guiará a la zona de seguridad".</Text>
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
    backgroundColor: "#393B3A",
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
    color: '#393B3A',
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
    backgroundColor: '#393B3A',
    alignSelf: 'flex-start',
    borderRadius: 32,
    paddingVertical: 7,
    paddingHorizontal: 25,
    marginTop: 20,
    marginLeft: 20
  }
});

export default Evacuacion;
