import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import SignDetail from "./SignDetail";
import { setSelectedSign } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

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
  const { selectedSign } = useSelector((state) => state.signsReducer);
  const dispatch = useDispatch();

  return (
    <>
      {selectedSign === undefined &&
        (props.signs.length === 0 ? (
          <Text>You have not saved any signs yet.</Text>
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
                      dispatch(setSelectedSign(item));
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
      {selectedSign !== undefined && (
        <ScrollView nestedScrollEnabled={true}>
            <SignDetail key="sign" signType={props.level.type} sign={selectedSign} />
        </ScrollView>
      )}
    </>
  );
}
