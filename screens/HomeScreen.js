import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Button,
  TouchableNativeFeedback,
  SafeAreaView
} from "react-native";
import { createDrawerNavigator } from "react-navigation";

import SideMenu from "./SideMenu";
import items from "./../data/items";
import MenuItem from "./../components/MenuItem";
import Title from "./../components/Title";

class SideBar extends React.Component {
  render() {
    return (
      <View>
        <Text>Soy un sidebar</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Title nav={navigation} />,
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
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  render() {
    return <ScrollView style={styles.container}>
            {this.showItems()}
          </ScrollView>;
  }
}

const HomeScreenStackNavigator = createDrawerNavigator(
  {
    HomeScreen: HomeScreen
  },
  {
    contentComponent: props => (
      <ScrollView>
        <SafeAreaView>
          <SideMenu/>
        </SafeAreaView>
      </ScrollView>
    )
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8"
    // marginTop: Constants.statusBarHeight
  }
});

export default HomeScreenStackNavigator;
