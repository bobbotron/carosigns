import { useState } from "react";
import { Appbar } from "react-native-paper";
import SignsDB from "../data/SignDb";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";

export default function Level(props) {
  const window = useWindowDimensions();
  const styles = StyleSheet.create({
    logo: {
      width: window.width * 0.7 * 1.3,
      height: window.width * 0.7,
      textAlign: "center",
    },
    selectedSign: {
      justifyContent: "center",
      alignItems: "center",
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
          <>
            <FlatGrid
              itemDimension={135}
              data={SignsDB.CategoryMap[props.level.name]}
              style={styles.gridView}
              // staticDimension={300}
              // fixed
              // horizontal
              spacing={10}
              renderItem={({ item }) => (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedSign(item);
                    }}
                  >
                    <Image
                      source={item.icon}
                      style={{ width: 140, height: 100 }}
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
          </>
        ))}
      {selectedSign !== undefined && (
        <View style={styles.selectedSign}>
          <Image source={selectedSign.icon} style={styles.logo} />
          {selectedSign.description !== undefined && selectedSign.description()}
          {selectedSign.description === undefined && (
            <>
              <Text>Description not set.</Text>
            </>
          )}
        </View>
      )}
    </>
  );
}
