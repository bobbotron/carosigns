import { StyleSheet, Text, Linking } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  deductionLink: {
    textDecorationLine: "underline",
  },
});

export default function MasterGeneralHandbookTextLink() {
  const openLink = () =>
    Linking.openURL("https://canadianrallyo.ca/handbook-signs/");

  return (
    <Text style={styles.deductionLink} onPress={openLink}>
      Handbook
    </Text>
  );
}
