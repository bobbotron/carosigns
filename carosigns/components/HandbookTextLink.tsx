import React from "react";
import { StyleSheet, Text, Linking } from "react-native";

const styles = StyleSheet.create({
  deductionLink: {
    textDecorationLine: "underline",
  },
});

export default function HandbookTextLink() {
  const openLink = () =>
    Linking.openURL("https://canadianrallyo.ca/handbook-signs/");

  return (
    <Text style={styles.deductionLink} onPress={openLink}>
      Handbooks
    </Text>
  );
}
