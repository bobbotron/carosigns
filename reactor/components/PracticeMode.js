import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Image,
  Platform,
  ScrollView,
} from "react-native";
import theme from "../Theme";
import { Button, Checkbox, HelperText, Switch, Text } from "react-native-paper";

import { useSelector, useDispatch } from "react-redux";
import NumericInput from "react-native-numeric-input";
import SignsDB from "../data/SignDb";
import * as Speech from "expo-speech";
import {
  setPracticeMode,
  setSelectedLevel,
  setSelectedSign,
} from "../redux/actions";
import _ from "lodash";

const setupState = "setup";
const running = "running";

const getRandomElement = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

export default function PracticeMode(props) {
  const window = useWindowDimensions();
  const dispatch = useDispatch();
  const { practiceMode } = useSelector((state) => state.signsReducer);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [noviceChecked, setNoviceChecked] = useState(true);
  const [advancedChecked, setAdvancedChecked] = useState(true);
  const [excellentChecked, setExcellentChecked] = useState(true);
  const [seconds, setSeconds] = useState(10);
  const [runningState, setRunningState] = useState({});
  const [timerId, setTimerId] = useState(undefined);
  const [autoAdvance, setAutoAdvance] = useState(true);

  // fix resolveAssetSource call for web :^(
  if (Platform.OS === "web") {
    Image.resolveAssetSource = (source) => {
      uri: source;
    };
  }

  const goToSign = () => {
    const sign = runningState?.selectedSign;
    if (sign) {
      const cat = SignsDB.Categories.find((x) => x.name === sign.category);
      dispatch(setSelectedLevel(cat));
      dispatch(setPracticeMode({ active: false }));
      dispatch(setSelectedSign(sign));
    }
  };

  const logoImage =
    runningState === undefined || runningState.selectedSign === undefined
      ? undefined
      : Image.resolveAssetSource(runningState.selectedSign.icon);
  const logoImageRatio =
    logoImage === undefined ? 1 : logoImage.height / logoImage.width;

  const [practiceState, setPracticeState] = useState(setupState);
  const styles = StyleSheet.create({
    title: {
      fontSize: 20,
    },
    logo: {
      width: window.width * 0.8,
      height: window.width * 0.8 * logoImageRatio,
      textAlign: "center",
    },
    buttonStyle: {
      marginBottom: 10,
    },
    selectedSignText: {
      fontSize: 20,
    },
    configSwitch: {},
    configSwitchLabel: {},
    configSwitchView: {
      width: 250,
      flexDirection: "row",
      alignItems: "center",
      margin: 10,
      justifyContent: "space-between",
    },

    practiceHeading: {
      fontSize: 20,
      color: theme.colors.primary,
      fontWeight: "bold",
      paddingBottom: 5,
    },
    practiceTextIntro: {
      marginBottom: 20,
    },
  });

  const filt = (x) => {
    if (x.category === "Novice" && noviceChecked) {
      return true;
    }
    if (x.category === "Advanced" && advancedChecked) {
      return true;
    }
    if (x.category === "Excellent" && excellentChecked) {
      return true;
    }
    return false;
  };

  const electNextSign = (signs, currentSign) => {
    if (currentSign && !_.isEmpty(currentSign.practiceNextRestriction)) {
      const candidates = currentSign.practiceNextRestriction;
      const signID = getRandomElement(candidates);
      const s = signs.find((x) => x.name === signID);
      setRunningState({
        signs,
        selectedSign: s,
      });
    } else {
      let found = false;
      while (!found) {
        const candidateSign = getRandomElement(signs);
        if (candidateSign.excludeFromPractice) {
          //console.log("Exclude sign ", candidateSign.title, " from practice");
        } else {
          if (currentSign) {
            if (
              _.isEmpty(candidateSign.practiceOnlyAfter) ||
              currentSign.name in candidateSign.practiceOnlyAfter
            ) {
              setRunningState({
                signs,
                selectedSign: candidateSign,
              });
              found = true;
            }
          } else {
            if (_.isEmpty(candidateSign.practiceOnlyAfter)) {
              setRunningState({
                signs,
                selectedSign: candidateSign,
              });
              found = true;
            } else {
              // console.log(
              //   "Exclude sign ",
              //   candidateSign.title,
              //   " practice only after on"
              // );
            }
          }
        }
      }
    }
  };

  const electSign = () => {
    electNextSign(runningState.signs, runningState.selectedSign);
  };

  useEffect(() => {
    let timer = undefined;
    if (practiceState === running && runningState) {
      if (runningState.selectedSign && isAudioOn) {
        const textToSay = runningState.selectedSign.title
          .replace(/^\d+./, "")
          .trim();
        Speech.stop();
        Speech.speak(textToSay);
      }
      if (autoAdvance) {
        timer = setTimeout(electSign, seconds * 1000);

        setTimerId(timer);
      }
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [runningState]);

  const toggleTimer = () => {
    if (timerId === undefined) {
      setTimerId(setTimeout(electSign, seconds * 1000));
      setAutoAdvance(true);
    } else {
      clearTimeout(timerId);
      setTimerId(undefined);
      setAutoAdvance(false);
    }
  };

  const nextSign = () => {
    if (timerId) {
      clearTimeout(timerId);
      setTimerId(undefined);
    }
    if (practiceState === running) {
      electNextSign(runningState.signs, runningState.selectedSign);
    }
  };

  const canStartPractice = () => {
    return noviceChecked || advancedChecked || excellentChecked;
  };

  const startPractice = () => {
    if (canStartPractice()) {
      const signs = SignsDB.Signs.filter(filt);
      setPracticeState(running);
      electNextSign(signs, undefined);
    }
  };

  return (
    <>
      <ScrollView>
        {practiceState === setupState && (
          <>
            <Text style={styles.practiceHeading}>Random Sign Generator</Text>
            <Text style={styles.practiceTextIntro}>
              Signs displayed on screen and (optionally) read out loud. Cone
              exercises and agility obstacles are excluded.
            </Text>
            <Text variant="titleMedium">Options</Text>
            <View style={styles.configSwitchView}>
              <Text style={styles.configSwitchLabel}>Use audio? </Text>
              <Switch
                style={styles.configSwitch}
                label="Audio"
                value={isAudioOn}
                onValueChange={() => {
                  setIsAudioOn(!isAudioOn);
                }}
              />
            </View>
            <View style={styles.configSwitchView}>
              <Text style={styles.configSwitchLabel}>
                Auto flip to next sign{" "}
              </Text>
              <Switch
                style={styles.configSwitch}
                value={autoAdvance}
                onValueChange={() => {
                  setAutoAdvance(!autoAdvance);
                }}
              />
            </View>
            {autoAdvance && (
              <View style={styles.configSwitchView}>
                <Text style={styles.configSwitchLabel}>Seconds per sign </Text>

                <NumericInput
                  valueType={"integer"}
                  step={1}
                  value={seconds}
                  onChange={setSeconds}
                  minValue={5}
                  maxValue={120}
                  rounded={true}
                  style={styles.seconds}
                />
              </View>
            )}
            {/* <Checkbox.Item
              label="Auto advance?"
              status={autoAdvance ? "checked" : "unchecked"}
              onPress={() => {
                setAutoAdvance(!autoAdvance);
              }}
            /> */}
            {/* <Checkbox.Item
              label="Audio"
              status={isAudioOn ? "checked" : "unchecked"}
              onPress={() => {
                setIsAudioOn(!isAudioOn);
              }}
            ></Checkbox.Item> */}
            <Text variant="titleMedium" style={{marginTop: 10}}>Include Signs From</Text>
            <View style={styles.configSwitchView}>
              <Text style={styles.configSwitchLabel}>Novice </Text>
              <Switch
                style={styles.configSwitch}
                value={noviceChecked}
                onValueChange={() => {
                  setNoviceChecked(!noviceChecked);
                }}
              />
            </View>
            <View style={styles.configSwitchView}>
              <Text style={styles.configSwitchLabel}>Advanced </Text>
              <Switch
                style={styles.configSwitch}
                value={advancedChecked}
                onValueChange={() => {
                  setAdvancedChecked(!advancedChecked);
                }}
              />
            </View>
            <View style={styles.configSwitchView}>
              <Text style={styles.configSwitchLabel}>Excellent </Text>
              <Switch
                style={styles.configSwitch}
                value={excellentChecked}
                onValueChange={() => {
                  setExcellentChecked(!excellentChecked);
                }}
              />
            </View>
            {/* <Checkbox.Item
              label="Advanced"
              status={advancedChecked ? "checked" : "unchecked"}
              onPress={() => {
                setAdvancedChecked(!advancedChecked);
              }}
            />

            <Checkbox.Item
              label="Excellent"
              status={excellentChecked ? "checked" : "unchecked"}
              onPress={() => {
                setExcellentChecked(!excellentChecked);
              }}
            /> */}
            <Button
              mode="contained"
              onPress={startPractice}
              style={{ marginTop: 20 }}
              disabled={!canStartPractice()}
            >
              Start Practice
            </Button>
            <HelperText type="error" visible={!canStartPractice()}>
              Select one or more levels
            </HelperText>
          </>
        )}

        {practiceState === running && (
          <>
            {/* <Text>
            Running eh.{" "}
            {runningState.signs && <>Signs {runningState.signs.length}.</>}
            {runningState.signs === undefined && <>Not set!.</>} */}
            {/* * Get a list of potential signs
             * Pick at random
             * Display sign
             * If audio on, talk it
             * Wait SECONDS
             * Repeat
             * Pause, Skip, Stop button */}
            {/* </Text> */}

            {runningState && runningState.selectedSign && (
              <>
                <Text style={styles.selectedSignText}>
                  {runningState.selectedSign.title}
                </Text>
                <Image
                  source={runningState.selectedSign.icon}
                  style={styles.logo}
                />
              </>
            )}
            <Button
              mode="contained"
              onPress={() => {
                setPracticeState(setupState);
                setRunningState({});
                Speech.stop();
              }}
              style={styles.buttonStyle}
            >
              Stop
            </Button>
            <Button
              mode="contained"
              onPress={toggleTimer}
              style={styles.buttonStyle}
            >
              {timerId ? "Pause" : "Start"}
            </Button>
            <Button
              mode="contained"
              onPress={nextSign}
              style={styles.buttonStyle}
            >
              Next
            </Button>
            <Button
              mode="contained"
              onPress={goToSign}
              style={styles.buttonStyle}
            >
              Go to sign
            </Button>
          </>
        )}
      </ScrollView>
    </>
  );
}
