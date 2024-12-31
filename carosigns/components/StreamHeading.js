import React from "react";
import { Text } from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet } from "react-native";

export default function StreamHeading(props) {
  const style = StyleSheet.create({
    heading: {
      textAlign: "center",
      marginTop: 20,
      fontSize: 18,
    },
  });
  return (
    <>
      <Text style={style.heading}>
        <MaterialIcons name={props.stream.icon} size={20} color="black" />{" "}
        {props.stream.name}
      </Text>
    </>
  );
}
