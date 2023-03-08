import { StyleSheet, Text, Linking } from "react-native";

const styles = StyleSheet.create({
  deductionLink: {
    textDecorationLine: "underline",
  },
});

export default function MasterGeneralHandbookTextLink() {
  const openLink = () =>
    Linking.openURL("https://www.canadianrallyo.ca/kcfinder/upload/files/MGH2022%20-%202022%2006%2027%20-%20FINAL%281%29.pdf");

  return (
    <Text style={styles.deductionLink} onPress={openLink}>
      Handbook
    </Text>
  );
}
