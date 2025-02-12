import { Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
  },
});

export default function SignIcon(props) {
  return (
    <>
      <TouchableOpacity onPress={props.onPress}>
        <Image source={props.sign.icon} style={styles.tinyLogo} />
      </TouchableOpacity>
    </>
  );
}
