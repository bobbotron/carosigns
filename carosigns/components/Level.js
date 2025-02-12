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
import React from "react";
import useLevelHooks from "../hooks/LevelHooks";

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

export default function Level({ level, signs }) {
  const { selectedSign, showSigns, levelSelectFn } = useLevelHooks({
    signs,
  });

  return (
    <>
      {selectedSign === undefined &&
        (showSigns ? (
          <Text>You have not saved any signs yet.</Text>
        ) : (
          <>
            <FlatGrid
              itemDimension={135}
              data={signs}
              spacing={10}
              renderItem={({ item }) => (
                <View key={item.name}>
                  <TouchableOpacity
                    onPress={() => {
                      levelSelectFn(item);
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
          <SignDetail key="sign" signType={level.type} sign={selectedSign} />
        </ScrollView>
      )}
    </>
  );
}
