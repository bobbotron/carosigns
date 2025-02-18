import { StyleSheet, Text, Linking } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  deductionLink: {
    textDecorationLine: "underline",
  },
});

export default function MasterGeneralHandbookTextLink() {
  const openLink = () =>
    Linking.openURL(
      "https://www.canadianrallyo.ca/kcfinder/upload/files/Rally%20Handbook%202025%20(v1.0)%20(2).pdf"
    );

  return (
    <Text style={styles.deductionLink} onPress={openLink}>
      Handbook
    </Text>
  );
}
