import React, { useEffect, useState } from "react";
import { BackHandler, Image } from "react-native";
import { Appbar, Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import Theme from "../Theme";
import FavAction from "./FavAction";
import { running, setupState, viewSign } from "./PracticeMode";

import * as Speech from "expo-speech";
import {
  setPracticeMode,
  setSelectedLevel,
  setSelectedSign,
} from "../redux/appSlice";
import AppHeaderMenu from "./AppHeaderMenu";

export default function AppHeader() {
  const { selectedLevel, selectedSign, practiceMode } = useSelector(
    (state) => state.app
  );

  const dispatch = useDispatch();
  const backButtonListener = () => {
    if (practiceMode.active) {
      if (practiceMode.state === running) {
        dispatch(setPracticeMode({ active: true, state: setupState }));
        Speech.stop();
      } else if (practiceMode.state === viewSign) {
        dispatch(setPracticeMode({ active: true, state: running }));
      } else {
        dispatch(setPracticeMode({ active: false, state: setupState }));
      }
    } else {
      if (selectedSign !== undefined) {
        dispatch(setSelectedSign(undefined));
      } else if (selectedLevel !== undefined) {
        dispatch(setSelectedLevel(undefined));
      }
    }
  };
  const appBarTitle =
    selectedLevel === undefined
      ? ""
      : selectedSign === undefined || selectedSign.name === undefined
      ? selectedLevel.name
      : selectedSign.name;
  const signLeft = () => {
    const fc = (f) => f.name === selectedSign.name;
    const i = selectedLevel.signs.findIndex(fc);
    const si = i === 0 ? selectedLevel.signs.length - 1 : i - 1;

    dispatch(setSelectedSign(selectedLevel.signs[si]));
  };

  const signRight = () => {
    const fc = (f) => f.name === selectedSign.name;
    const i = selectedLevel.signs.findIndex(fc);
    const si = i === selectedLevel.signs.length - 1 ? 0 : i + 1;

    dispatch(setSelectedSign(selectedLevel.signs[si]));
  };
  const [titleHeight, setTitleHeight] = useState(45);
  const titleLayout = (event) => {
    var { height } = event.nativeEvent.layout;
    setTitleHeight(height);
  };

  useEffect(() => {
    const backAction = () => {
      backButtonListener();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [selectedLevel, selectedSign, practiceMode]);

  return (
    <Appbar.Header
      style={{
        backgroundColor:
          selectedLevel === undefined
            ? Theme.colors.background
            : Theme.colors.background,
      }}
    >
      {!practiceMode.active && (
        <>
          {selectedLevel !== undefined && (
            <Appbar.BackAction onPress={backButtonListener} />
          )}
          {selectedSign !== undefined && (
            <>
              <Appbar.Action icon="less-than" onPress={signLeft} />
            </>
          )}
          {selectedLevel === undefined && (
            <>
              <Image
                source={require("../../assets/header-logo.png")}
                style={{ marginLeft: 5, width: 35 * 5.64, height: 35 }}
              />
              <Appbar.Content title={<></>} />
            </>
          )}
          {selectedLevel !== undefined && (
            <Appbar.Content
              onLayout={titleLayout}
              titleStyle={{
                textAlign: "center",
              }}
              title={
                selectedLevel === undefined ? (
                  <Image
                    source={require("../../assets/header-logo.png")}
                    style={{ width: 250, height: titleHeight - 10 }}
                  />
                ) : (
                  <Text>{appBarTitle}</Text>
                )
              }
            />
          )}

          {selectedSign !== undefined && (
            <>
              <Appbar.Action icon="greater-than" onPress={signRight} />
            </>
          )}
          {selectedSign !== undefined && <FavAction sign={selectedSign} />}
        </>
      )}
      {practiceMode.active && (
        <>
          <Appbar.BackAction onPress={backButtonListener} />
          <Appbar.Content
            onLayout={titleLayout}
            titleStyle={{
              textAlign: "center",
            }}
            title={
              <Text>
                {practiceMode.state === viewSign
                  ? "Resume Practice"
                  : "Practice Time"}
              </Text>
            }
          />
        </>
      )}

      <AppHeaderMenu />
    </Appbar.Header>
  );
}
