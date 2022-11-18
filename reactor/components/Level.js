import { useState } from "react";
import { Appbar } from "react-native-paper";

import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import SignDetail from "./SignDetail";
import FavAction from "./FavAction";
import { setSelectedSign } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const styles = StyleSheet.create({
  gridImage: { width: 140, height: 100 },
  overlayView: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#ffffff",
  },
  overlayText: { fontWeight: "bold", fontSize: 14 },
});

export default function Level(props) {
  const {selectedSign, } = useSelector(
    (state) => state.signsReducer
  );
  const dispatch = useDispatch();

  const appBarTitle =
    selectedSign === undefined || selectedSign.title === undefined
      ? props.level.name
      : selectedSign.title;
  return (
    <>
      {/* <Appbar.Header>

        <Appbar.Content title={appBarTitle} />
        <FavAction sign={selectedSign} />
      </Appbar.Header> */}
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
                <View key={item.name}>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(setSelectedSign(item))
                    }}
                  >
                    <ImageBackground
                      source={item.icon}
                      style={styles.gridImage}
                    >
                      {(item.hideNameOnGrid == undefined ||
                        !item.hideNameOnGrid) && (
                        <View style={styles.overlayView}>
                          <Text style={styles.overlayText}>{item.name}</Text>
                        </View>
                      )}
                    </ImageBackground>
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
