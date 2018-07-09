import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

export default class OpcionesScreen extends React.Component {
  static navigationOptions = {
    title: "Configuraciones"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Notificaciones</Text>
        <View style={styles.switch}>
          <Switch onValueChange={() => {}} value={false} />
          <Text>Desactivar notificaciones</Text>
        </View>
        <View style={styles.switch}>
          <Switch value={false} />
          <Text>Desactivar sonido</Text>
        </View>
        <View style={styles.hr} />
        <Text style={styles.title}>Mi perfil</Text>
        <View>
          <Text style={styles.subtitle}>Modificar datos</Text>
          <Text>
            Realizar cambios a los datos que se encuentran en el perfil
          </Text>
        </View>
        <View style={styles.hr} />
        <View>
          <Text style={styles.subtitle}>Cambiar cuenta</Text>
          <Text>Ingresar desde una cuenta distinta de usuario</Text>
        </View>
        <View style={styles.hr} />
        <Text style={styles.title}>Información</Text>
        <Text style={{paddingBottom: 2}}>Términos y condiciones</Text>
        <View style={styles.hr} />  
        <Text>Acerca de</Text>
        <View style={styles.hr} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 25,
    height: '100%'
  },
  hr: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#D5D4D4",
    width: "100%",
    marginVertical: 15
  },
  switch: {
    flexDirection: "row",
    marginTop: 5
  },
  title: {
    fontSize: 17,
    paddingBottom: 12
  },
  subtitle: {
    fontWeight: "bold",
    marginBottom: 5
  }
});
