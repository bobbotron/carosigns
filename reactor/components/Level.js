import { useState } from "react";
import { Appbar } from "react-native-paper";
import SignsDB from "../data/SignDb";
import SignIcon from "./SignIcon";
import { Dimensions, StyleSheet, Text } from "react-native";
import { Image } from "react-native";

export default function Level(props) {
  const win = Dimensions.get("window");

  const styles = StyleSheet.create({
    logo: {
      width: 300,
      height: 300,
      textAlign: "center",
    },
  });
  const [selectedSign, setSelectedSign] = useState(undefined);
  const backButtonListener =
    selectedSign === undefined
      ? props.backListener
      : () => {
          setSelectedSign(undefined);
        };
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={backButtonListener} />
        <Appbar.Content title={props.level.name} />
      </Appbar.Header>
      {selectedSign === undefined &&
        (SignsDB.CategoryMap[props.level.name].length === 0 ? (
          <Text>There's no signs set up for "{props.level.name}" yet!</Text>
        ) : (
          SignsDB.CategoryMap[props.level.name].map((x) => (
            <SignIcon
              sign={x}
              key={x.name}
              onPress={() => {
                setSelectedSign(x);
                //alert(x.name + " was clicked!");
              }}
            />
          ))
        ))}
      {selectedSign !== undefined && (
        <>
          <Image source={selectedSign.icon} style={styles.logo} />
          {selectedSign.description()}
        </>
      )}
    </>
  );
}
