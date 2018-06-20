import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { createDrawerNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import IconEntypo from "react-native-vector-icons/Entypo";


export default class Title extends React.Component {
  render() {
    return (
      <View style={styleTitle.container}>
        <TouchableOpacity onPress={() => alert("sidebar")} >
          <Icon name="bars" style={styleTitle.icon}/>
        </TouchableOpacity>
        <Text style={styleTitle.title}>Hospital Clínico Magallanes</Text>
        <TouchableOpacity onPress={() => this.props.nav.navigate('Opciones')} >
          <IconEntypo name="dots-three-vertical" style={styleTitle.icon}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styleTitle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  icon: {
    color: 'white',
    fontSize:20
  }
})