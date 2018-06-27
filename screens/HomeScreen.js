import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Button,
  TouchableNativeFeedback
} from "react-native";
import { createDrawerNavigator } from "react-navigation";

import items from "./../data/items";
import MenuItem from "./../components/MenuItem";
import Title from "./../components/Title";

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Title nav={navigation} />
    };
  };
  showItems = () => {
    return items.map((item, index) => (
      <TouchableNativeFeedback
        onPress={() => this.props.navigation.navigate(item.navigation)}
        background={TouchableNativeFeedback.SelectableBackground()}
        useForeground={true}
        key={index}
      >
        <View>
          <MenuItem {...item} />
        </View>
      </TouchableNativeFeedback>
    ));
  };
  render() {
    return <ScrollView style={styles.container}>{this.showItems()}</ScrollView>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8"
    // marginTop: Constants.statusBarHeight
  }
});
