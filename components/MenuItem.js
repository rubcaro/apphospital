import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const Item = props => (
  <View style={style.container}>
    <Image source={props.path} style={style.img} />
    <View>
      <Text style={style.title}>{props.title}</Text>
      <Text>{props.description}</Text>
    </View>
  </View>
);

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    maxHeight: 100,
    minHeight: 100,
    paddingVertical: 15,
    marginTop: 10
  },
  img: {
    width: 60,
    height: 60,
    marginRight: 15
  },
  title: {
    fontWeight: "bold",
    fontSize: 20
  }
});

export default Item;
