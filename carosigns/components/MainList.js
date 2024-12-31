import React, { Fragment } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import StreamHeading from "./StreamHeading";

export default function MainList(props) {
  const styles = StyleSheet.create({
    container: {},
    button: {
      marginTop: 10,
      marginBottom: 0,
      fontSize: 20,
    },
    workingButton: {
      marginTop: 10,
      marginBottom: 0,
      fontSize: 20,
      backgroundColor: "rgb(80, 140, 200)",
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

  const t = props.levels.map((n) => (
    <Fragment key={n.name}>
      {n.type === "stream" && <StreamHeading key={n.name} stream={n} />}
      {(n.type === "normal" || n.type === "working") && (
        <Button
          key={n.name}
          style={n.type === "normal" ? styles.button : styles.workingButton}
          labelStyle={styles.buttonLabel}
          mode="contained"
          onPress={() => props.levelListener(n)}
        >
          {n.name}
        </Button>
      )}
    </Fragment>
  ));

  return (
    <View style={styles.container}>
      <>{t}</>
    </View>
  );
}
