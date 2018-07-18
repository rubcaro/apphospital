import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import {
  createStackNavigator,
  DrawerItems,
  SafeAreaView,
  createDrawerNavigator,
  withNavigation
} from "react-navigation";
import firebase from "react-native-firebase";
import { Notification } from "react-native-firebase";

import MenuItem from "./components/MenuItem";
import Title from "./components/Title";
import items from "./data/items";
import NavigationService from "./data/NavigationService";

import BancoSangreScreen from "./screens/BancoSangreScreen";
import ContactoScreen from "./screens/ContactoScreen";
import HomeScreen from "./screens/HomeScreen";
import Opciones from "./screens/Opciones";
import Preguntas from "./screens/PreguntasScreen";
import Emergencia from "./screens/EmergenciaScreen";
import Opinion from "./screens/DanosTuOpinionScreen";
import SideMenu from "./screens/SideMenu";
import Encuestas from "./screens/Encuestas";
import MensajeDonacion from "./screens/MensajeDonacionScreen";
import LoginScreen from "./screens/LoginScreen";
import ReglamentoScreen from "./screens/ReglamentoScreen";
import IaasScreen from './screens/IaasScreen';

// import { YellowBox } from 'react-native';
// YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <DrawerItems {...props} />
      <View>
        <Text>Hola</Text>
      </View>
    </SafeAreaView>
  </ScrollView>
);

firebase
  .messaging()
  .hasPermission()
  .then(enabled => {
    if (enabled) {
      // user has permissions
    } else {
      firebase
        .messaging()
        .requestPermission()
        .then(() => {
          // User has authorised
        })
        .catch(error => {
          // User has rejected permissions
        });
    }
  });

export default class App extends React.Component {
  componentDidMount() {
    firebase.messaging().subscribeToTopic("allDevices");
    let messageTitle = "";
    let messageBody = "";
    this.messageListener = firebase.messaging().onMessage(message => {
      const noti = new firebase.notifications.Notification()
        .setNotificationId("1")
        .setTitle(message.data.title)
        .setBody(message.data.body);
      noti.android.setChannelId("1").android.setSmallIcon("ic_logo");
      firebase.notifications().displayNotification(noti);
      messageTitle = message.data.title;
      messageBody = message.data.body;
    });
    this.notificationDisplayedListener = firebase
      .notifications()
      .onNotificationDisplayed(notification => {
        // Process your notification as required
        // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
      });
    this.notificationListener = firebase
      .notifications()
      .onNotification(notification => {
        // Process your notification as required
        // firebase.notifications().displayNotification(notification);
      });
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        firebase.notifications().removeAllDeliveredNotifications();
        NavigationService.navigate("MensajeDonacion", {
          messageTitle: messageTitle,
          messageBody: messageBody
        });
      });
  }
  componentWillUnmount() {
    this.messageListener();
    this.notificationDisplayedListener();
    this.notificationListener();
  }
  miFuncion() {
    this.props.navigation.navigate("BancoSangre");
  }
  render() {
    return (
      <RootStack
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: <Title nav={navigation} />
      })
    },
    Login: LoginScreen,
    BancoSangre: BancoSangreScreen,
    Contacto: ContactoScreen,
    Opciones: Opciones,
    Preguntas: Preguntas,
    Emergencia: Emergencia,
    Opinion: Opinion,
    Encuestas: Encuestas,
    App: App,
    MensajeDonacion: MensajeDonacion,
    Reglamento: ReglamentoScreen,
    Iaas: IaasScreen
  },
  {
    InitialRouteName: "Login",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#6DC8E3"
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);
