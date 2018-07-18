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

const Accidente = props => {
  return (
    <ScrollView>
      <Text style={styles.header}>ACCIDENTE CORTOPUNZANTE</Text>
      <Text style={styles.pregunta}>¿Qué se debe hacer en caso de un accidente cortopunzante?</Text>
      <View style={styles.item}>
        <Icon style={styles.icon} name="long-arrow-right"/>
        <Text style={styles.itemText}>Lavar la herida con abundante agua.</Text>
      </View>
      <View style={styles.item}>
        <Icon style={styles.icon} name="long-arrow-right"/>
        <Text style={styles.itemText}>Avisar al jefe directo.</Text>
      </View>
      <View style={styles.item}>
        <Icon style={styles.icon} name="long-arrow-right"/>
        <Text style={styles.itemText}>Concurrir al servicio de urgencias.</Text>
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
    backgroundColor: "#119727",
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
    color: '#119727',
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
    backgroundColor: '#119727',
    alignSelf: 'flex-start',
    borderRadius: 32,
    paddingVertical: 7,
    paddingHorizontal: 25,
    marginTop: 20,
    marginLeft: 20
  }
});

export default Accidente;
