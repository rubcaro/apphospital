import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  Linking,
  Modal,
  Button
} from "react-native";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconFoundation from "react-native-vector-icons/Foundation";
import IconSimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";

export default class SideMenu extends React.Component {
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View>
            <Text>sdfjdsfnkjdsfkjnk</Text>
            <Button title="Volver" onPress={() =>  this.setModalVisible(!this.state.modalVisible)}/>
          </View>
        </Modal>
        <View style={styles.logoContainer}>
          <Image source={require("./../assets/img/logo-hospital.png")} />
        </View>
        <View style={styles.hr} />
        <View style={styles.container}>
          <Text style={styles.title}>Visítanos en</Text>
          <TouchableNativeFeedback
            onPress={() =>
              Linking.openURL("http://hospitalclinicomagallanes.cl").catch(
                err => console.error("An error occurred", err)
              )
            }
            background={TouchableNativeFeedback.SelectableBackground()}
            useForeground={true}
          >
            <View style={styles.item}>
              <IconMaterial name="web" style={styles.logo} />
              <Text>Hospital Clínico Magallanes</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() =>
              Linking.openURL("https://twitter.com/HCMagallanes").catch(err =>
                console.error("An error occurred", err)
              )
            }
            background={TouchableNativeFeedback.SelectableBackground()}
            useForeground={true}
          >
            <View style={styles.item}>
              <IconFontAwesome name="twitter" style={styles.logo} />
              <Text>Twitter</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() =>
              Linking.openURL(
                "http://www.facebook.com/hospital.magallanes"
              ).catch(err => console.error("An error occurred", err))
            }
            background={TouchableNativeFeedback.SelectableBackground()}
            useForeground={true}
          >
            <View style={styles.item}>
              <IconFontAwesome name="facebook" style={styles.logo} />
              <Text>Facebook</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.hr} />
        <View style={styles.container}>
          <Text style={styles.title}>Aplicación</Text>
          <View style={styles.item}>
            <IconMaterial name="share-variant" style={styles.logo} />
            <Text>Compartir App</Text>
          </View>
          <View style={styles.item}>
            <IconFoundation name="like" style={styles.logo} />
            <Text>Me gusta</Text>
          </View>
        </View>
        <View style={styles.hr} />
        <View style={styles.container}>
          <Text style={styles.title}>Información</Text>
          <TouchableNativeFeedback
            onPress={() =>  this.setModalVisible(true)}
            background={TouchableNativeFeedback.SelectableBackground()}
            useForeground={true}
          >
            <View style={styles.item}>
              <IconSimpleLineIcon name="info" style={styles.logo} />
              <Text>Acerca de</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 10,
    alignItems: "center"
  },
  logo: {
    fontSize: 22,
    color: "#6DC8E3",
    marginRight: 10
  },
  hr: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#D5D4D4",
    width: "100%",
    marginVertical: 15
  },
  title: {
    color: "#A8AAAB",
    fontSize: 16,
    marginBottom: 15
  },
  container: {
    marginLeft: 20
  },
  item: {
    flexDirection: "row",
    paddingVertical: 6
  }
});
