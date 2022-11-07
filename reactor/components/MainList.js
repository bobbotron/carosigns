import { View, StyleSheet, Image, Alert } from "react-native";
import { Button } from "react-native-paper";

export default function AssetExample(props) {
  const t = props.levels.map((n) => (
    <Button
    key={n.name}
          style={styles.button}
          labelStyle={styles.buttonLabel}
          mode="contained"
          onPress={() => props.levelListener(n)}
        >{n.name}</Button>
  ));

  return (
    <View style={styles.container}>
      <>
        {t}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    marginTop: 10,
    marginBottom: 0,
    fontSize: 20
  },
  buttonLabel: {
    fontSize: 18
  },
  paragraph: {
    // margin: 24,
    // marginTop: 0,
    // fontSize: 14,
    // fontWeight: "normal",
    // textAlign: "center",
  },
  logo: {
    marginTop: 20,
    height: 128,
    width: 128,
  },
});
