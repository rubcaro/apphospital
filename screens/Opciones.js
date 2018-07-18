import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableNativeFeedback,
  AsyncStorage,
  TouchableOpacity
} from "react-native";

export default class OpcionesScreen extends React.Component {
  static navigationOptions = {
    title: "Configuraciones"
  };

  constructor() {
    super();
    this.state = {
      notification: false,
      sound: false
    };
  }

  componentDidMount() {
    // Promise.resolve()
    //   .then(() => this._retrieveData())
    //   .then(() => console.log(this.state.notification));
    this._retrieveData();
    
  }

  controlNotification = () => {
    Promise.resolve()
      .then(() => this.setState({ notification: !this.state.notification }))
      .then(() => this._changeValue());

  }

  _changeValue = async () => {
    try {
      if (this.state.notification) {
        await AsyncStorage.setItem(
          "notificacion",
          "1"
        );
      } else {
        await AsyncStorage.removeItem(
          "notificacion",
        );
      }
    } catch (error) {
      alert("Lo sentimos, no se ha podido guardar su preferencia");
    }
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("notificacion");
      if (value !== null) {
        this.setState({notification: true})
        
        // console.log('dsfh');
      } 
    } catch (error) {
      alert("error");
    }
  };

  _clear = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {

    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Notificaciones</Text>
        <View style={styles.switch}>
          <Switch
            onValueChange={this.controlNotification}
            value={this.state.notification}
          />
          <Text>Desactivar notificaciones</Text>
        </View>
        <View style={styles.switch}>
          <Switch
            onValueChange={() => this.setState({ sound: !this.state.sound })}
            value={this.state.sound}
          />
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
        <TouchableNativeFeedback
          onPress={() => this.props.navigation.navigate("Login")}
          background={TouchableNativeFeedback.SelectableBackground()}
          useForeground={true}
        >
          <View>
            <Text style={styles.subtitle}>Cambiar cuenta</Text>
            <Text>Ingresar desde una cuenta distinta de usuario</Text>
          </View>
        </TouchableNativeFeedback>
        <View style={styles.hr} />

        <TouchableOpacity onPress={() => this._clear()}>
          <View>
            <Text style={styles.title}>Información</Text>
          </View>
        </TouchableOpacity>
        <Text style={{ paddingBottom: 2 }}>Términos y condiciones</Text>
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
    height: "100%"
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
