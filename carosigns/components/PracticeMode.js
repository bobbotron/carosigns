import { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Image,
  Platform,
  ScrollView,
} from "react-native";
import theme from "../Theme";
import {
  Button,
  HelperText,
  IconButton,
  Switch,
  Text,
} from "react-native-paper";

import { useSelector, useDispatch } from "react-redux";
import SignsDB from "../data/SignDb";
import * as Speech from "expo-speech";
import { setPracticeMode } from "../redux/actions";
import _ from "lodash";
import PracticeProgressBar from "./PracticeProgressBar";
import SignDetail from "./SignDetail";

export const setupState = "setup";
export const viewSign = "viewSign";
export const running = "running";

const getRandomElement = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

export default function PracticeMode() {
  const window = useWindowDimensions();
  const dispatch = useDispatch();
  const { practiceMode } = useSelector((state) => state.signsReducer);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [noviceChecked, setNoviceChecked] = useState(true);
  const [advancedChecked, setAdvancedChecked] = useState(true);
  const [excellentChecked, setExcellentChecked] = useState(true);
  const [seconds, setSeconds] = useState(8);
  const [runningState, setRunningState] = useState({});
  const [timerId, setTimerId] = useState(undefined);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [viewSignDetail, setViewSignDetail] = useState(false);

  // fix resolveAssetSource call for web :^(
  if (Platform.OS === "web") {
    Image.resolveAssetSource = (source) => {
      uri: source;
    };
  }

  const goToSign = () => {
    const sign = runningState?.selectedSign;
    if (sign) {
      // const cat = SignsDB.Categories.find((x) => x.name === sign.category);
      Speech.stop();
      setAutoAdvance(false);
      setViewSignDetail(true);
      dispatch(setPracticeMode({ active: true, state: viewSign }));
      // dispatch(setSelectedLevel(cat));
      // dispatch(setPracticeMode({ active: false, state: pausedState }));
      // dispatch(setSelectedSign(sign));
    }
  };

  const logoImage =
    runningState === undefined || runningState.selectedSign === undefined
      ? undefined
      : Image.resolveAssetSource(runningState.selectedSign.icon);
  const logoImageRatio =
    logoImage === undefined ? 1 : logoImage.height / logoImage.width;

  const portrait = window.width <= window.height;
  const width = portrait
    ? window.width * 0.8
    : (window.height * 0.7) / logoImageRatio;
  const height = portrait
    ? window.width * 0.8 * logoImageRatio
    : window.height * 0.7;
  const leftOffset = portrait ? window.width * 0.1 : (window.width - width) / 2;
  const styles = StyleSheet.create({
    title: {
      fontSize: 20,
    },
    logo: {
      left: leftOffset,
      width: width,
      height: height,
      //textAlign: "center",
      marginBottom: 20,
    },
    buttonStyle: {
      marginBottom: 10,
    },
    selectedSignText: {
      fontSize: 20,
      color: theme.colors.primary,
      fontWeight: "bold",
      paddingBottom: 20,
      marginTop: 20,
    },
    configSwitch: {},
    configSwitchLabel: {},
    configSwitchView: {
      width: 250,
      flexDirection: "row",
      alignItems: "center",
      margin: 5,
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
    let winningSign = undefined;
    if (currentSign && !_.isEmpty(currentSign.practiceNextRestriction)) {
      const candidates = currentSign.practiceNextRestriction;
      const signID = getRandomElement(candidates);
      winningSign = signs.find((x) => x.name === signID);
    } else {
      let found = false;
      while (!found) {
        const candidateSign = getRandomElement(signs);
        if (!candidateSign.excludeFromPractice) {
          if (currentSign) {
            if (
              _.isEmpty(candidateSign.practiceOnlyAfter) ||
              currentSign.name in candidateSign.practiceOnlyAfter
            ) {
              winningSign = candidateSign;
              found = true;
            }
          } else {
            if (_.isEmpty(candidateSign.practiceOnlyAfter)) {
              winningSign = candidateSign;
              found = true;
            }
          }
        }
      }
    }

    setRunningState({
      signs,
      selectedSign: winningSign,
    });
  };

  const electSign = () => {
    electNextSign(runningState.signs, runningState.selectedSign);
  };

  useEffect(() => {
    let timer = undefined;
    if (practiceMode.state === running && runningState) {
      if (runningState.selectedSign && isAudioOn) {
        const textToSay = runningState.selectedSign.title
          .replace(/^\d+./, "")
          .trim();
        Speech.stop();
        Speech.speak(textToSay);
      }
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [runningState]);

  const toggleTimer = () => {
    setAutoAdvance(!autoAdvance);
  };

  const nextSign = () => {
    if (timerId) {
      clearTimeout(timerId);
      setTimerId(undefined);
    }
    if (practiceMode.state === running) {
      electNextSign(runningState.signs, runningState.selectedSign);
    }
  };

  const canStartPractice = () => {
    return noviceChecked || advancedChecked || excellentChecked;
  };

  const startPractice = () => {
    if (canStartPractice()) {
      const signs = SignsDB.Signs.filter(filt);
      dispatch(setPracticeMode({ ...practiceMode, state: running }));
      electNextSign(signs, undefined);
    }
  };

  const Setup = () => (
    <>
      <Text style={styles.practiceHeading}>Random Sign Generator</Text>
      <Text style={styles.practiceTextIntro}>
        Welcome to rally practice time. Set your preferences and let's get
        started!
      </Text>
      <Text variant="titleMedium">Options</Text>
      <View style={styles.configSwitchView}>
        <Text style={styles.configSwitchLabel}>Audio </Text>
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
        <Text style={styles.configSwitchLabel}>Auto flip to next sign </Text>
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignContent: "flex-end",
            }}
          >
            <IconButton
              icon="less-than"
              mode="contained-tonal"
              size={20}
              onPress={() => {
                if (seconds > 2) {
                  setSeconds(seconds - 2);
                }
              }}
            />
            <Text style={{ fontSize: 20 }}>{seconds}</Text>
            <IconButton
              icon="greater-than"
              size={20}
              mode="contained"
              style={{ marginRight: -2 }}
              onPress={() => {
                if (seconds < 60) {
                  setSeconds(seconds + 2);
                }
              }}
            />
          </View>
        </View>
      )}

      <Text variant="titleMedium" style={{ marginTop: 10 }}>
        Classes to Include
      </Text>
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

      <Button
        mode="contained"
        onPress={startPractice}
        style={{ marginTop: 20 }}
        disabled={!canStartPractice()}
      >
        Start Practice
      </Button>
      <HelperText
        type="error"
        visible={!canStartPractice()}
        style={{ paddingBottom: 5 }}
      >
        Select one or more levels
      </HelperText>

      <Text>
        Note: Stations with cones or agility equipment are not included in
        practice time.
      </Text>
    </>
  );

  const RunningComponent = () => (
    <>
      <Text style={styles.selectedSignText}>
        {runningState.selectedSign.title}
      </Text>

      {autoAdvance && (
        <PracticeProgressBar seconds={seconds} onComplete={electSign} />
      )}
      <Image
        key={"logo"}
        source={runningState.selectedSign.icon}
        style={styles.logo}
      />

      <Button
        mode="contained"
        icon={autoAdvance ? "pause" : "play"}
        onPress={toggleTimer}
        style={styles.buttonStyle}
      >
        {autoAdvance ? "Pause" : "Start"}
      </Button>
      <Button
        mode="contained"
        icon="forward"
        onPress={nextSign}
        style={styles.buttonStyle}
      >
        Next
      </Button>
      <Button
        mode="contained"
        icon="text-box-search"
        onPress={goToSign}
        style={styles.buttonStyle}
      >
        Go to sign
      </Button>
    </>
  );
  const scrollRef = useRef();
  return (
    <>
      <ScrollView ref={scrollRef} nestedScrollEnabled={true}>
        {practiceMode.state === setupState && <Setup />}
        {practiceMode.state === running && <RunningComponent />}
        {practiceMode.state === viewSign && (
          <SignDetail scrollRef={scrollRef} sign={runningState.selectedSign} />
        )}
      </ScrollView>
    </>
  );
}
