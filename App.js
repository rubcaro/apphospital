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
  createDrawerNavigator
} from "react-navigation";
import firebase from 'react-native-firebase';
import { Notification } from 'react-native-firebase';
// import { DrawerItems, SafeAreaView } from "react-navigation";

import MenuItem from "./components/MenuItem";
import items from "./data/items";

import BancoSangreScreen from "./screens/BancoSangreScreen";
import ContactoScreen from "./screens/ContactoScreen";
import HomeScreen from "./screens/HomeScreen";

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

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    BancoSangre: BancoSangreScreen,
    Contacto: ContactoScreen
  },
  {
    InitialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#6DC8E3',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
);

firebase.messaging().hasPermission()
  .then(enabled => {
    if (enabled) {
      // user has permissions
    } else {
      firebase.messaging().requestPermission()
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
    // alert("Hola");
    firebase.messaging().subscribeToTopic("allDevices");
    this.messageListener = firebase.messaging().onMessage((message) => {
      const noti = new firebase.notifications.Notification()
      .setNotificationId('1')
      .setTitle(message.data.title)
      .setBody(message.data.body);
      noti.android.setChannelId('1')
        .android.setSmallIcon('ic_launcher');
      firebase.notifications().displayNotification(noti);
    });
    this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
        // Process your notification as required
        // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
        firebase.notifications().displayNotification(notification);
    });
    this.notificationListener = firebase.notifications().onNotification((notification) => {
        // Process your notification as required
        firebase.notifications().displayNotification(notification);
    });
  }
  componentWillUnmount() {
    this.messageListener();
    this.notificationDisplayedListener();
    this.notificationListener();
  }
  render() {
    return <RootStack />;
  }
}
