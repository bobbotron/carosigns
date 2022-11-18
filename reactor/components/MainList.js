import { View, StyleSheet, } from "react-native";
import { Button, Text } from "react-native-paper";
import { useSelector } from "react-redux";
import SignsDB from "../data/SignDb";

export default function MainList(props) {
  const { favorites } = useSelector((state) => state.signsReducer);

  const t = props.levels.map((n) => (
    <Button
      key={n.name}
      style={styles.button}
      labelStyle={styles.buttonLabel}
      mode="contained"
      onPress={() => props.levelListener(n)}
    >
      {n.name}
    </Button>
  ));

  const favLevel = {
    name: "My Saved Signs",
    isFavorites: true,
    signs: SignsDB.Signs.filter((s) => favorites.includes(s.name)),
  };
  const favListener = () => props.levelListener(favLevel);

  return (
    <View style={styles.container}>
      <>
        {t}
        {favorites.length === 0 ? (
          <></>
        ) : (
          <Button
            style={styles.button}
            buttonColor="#da5711"
            labelStyle={styles.buttonLabel}
            mode="contained"
            onPress={favListener}
          >
            {favLevel.name}
          </Button>
        )}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    marginTop: 10,
    marginBottom: 0,
    fontSize: 20,
  },
  buttonLabel: {
    fontSize: 18,
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
