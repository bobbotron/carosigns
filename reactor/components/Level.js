import { useState } from "react";
import { Appbar } from "react-native-paper";

import { Text, View, TouchableOpacity, Image } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import SignDetail from "./SignDetail";
import FavAction from "./FavAction";

export default function Level(props) {
  const [selectedSign, setSelectedSign] = useState(undefined);
  const backButtonListener =
    selectedSign === undefined
      ? props.backListener
      : () => {
          setSelectedSign(undefined);
        };
  const appBarTitle =
    selectedSign === undefined || selectedSign.title === undefined
      ? props.level.name
      : selectedSign.title;
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={backButtonListener} />

        <Appbar.Content title={appBarTitle} />
        <FavAction sign={selectedSign} />
      </Appbar.Header>
      {selectedSign === undefined &&
        (props.signs.length === 0 ? (
          <Text>There's no signs set up for "{props.level.name}" yet!</Text>
        ) : (
          <>
            <FlatGrid
              itemDimension={135}
              data={props.signs}
              // style={styles.gridView}
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
      {selectedSign !== undefined && <SignDetail sign={selectedSign} />}
    </>
  );
}
