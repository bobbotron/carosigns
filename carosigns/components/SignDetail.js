/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from "react";
import {
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
  Platform,
} from "react-native";
import { Card, Text } from "react-native-paper";
import RenderHtml from "react-native-render-html";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MasterGeneralHandbookTextLink from "./MasterGeneralHandbookTextLink";
import theme from "../Theme";
import DropDownPicker from "react-native-dropdown-picker";
import _ from "lodash";
import { ScrollView } from "react-native";

export default function SignDetail(props) {
  const window = useWindowDimensions();
  const isNormalSign = props.sign.signType === "normal";
  const isWorkingSign = props.sign.signType === "working";
  const [index, setIndex] = useState(0);
  const updateIndex = (i) => {
    if (i >= 0 && i < 2) {
      setIndex(i % 2);
    }
  };
  const workingStates = [
    { label: "Rookie", value: "rookie" },
    { label: "Elite", value: "elite" },
    { label: "Expert", value: "expert" },
  ];
  const [open, setOpen] = useState(false);
  const [workingLevelState, setWorkingLevelState] = useState("rookie");
  const description = isNormalSign
    ? props.sign.description
    : props.sign.levels[workingLevelState].procedure;

  const hasDescriptionDetail = isNormalSign
    ? props.sign.tips !== undefined
    : props.sign.levels[workingLevelState].passRequirements !== undefined;

  // fix resolveAssetSource call for web :^(
  if (Platform.OS === "web") {
    Image.resolveAssetSource = (source) => {
      // eslint-disable-next-line no-unused-labels
      uri: source;
    };
  }
  const layoutImage =
    isWorkingSign &&
    props.sign.levels !== undefined &&
    !_.isEmpty(props.sign.levels[workingLevelState].layoutImages)
      ? Image.resolveAssetSource(
          props.sign.levels[workingLevelState].layoutImages[0]
        )
      : undefined;
  const layoutImageRatio =
    layoutImage === undefined ? 1 : layoutImage.height / layoutImage.width;

  const logoImage =
    props.sign.icon === undefined
      ? undefined
      : Image.resolveAssetSource(props.sign.icon);
  const logoImageRatio =
    logoImage === undefined ? 1 : logoImage.height / logoImage.width;

  const procedureImage =
    isWorkingSign &&
    props.sign.levels !== undefined &&
    !_.isEmpty(props.sign.levels[workingLevelState].procedureImages)
      ? Image.resolveAssetSource(
          props.sign.levels[workingLevelState].procedureImages[0]
        )
      : undefined;
  const procedureImageRatio =
    procedureImage === undefined
      ? 1
      : procedureImage.height / procedureImage.width;

  const styles = StyleSheet.create({
    logo: {
      width: window.width * 0.9,
      height: window.width * 0.9 * logoImageRatio,
    },
    logoLayout: {
      width: window.width * 0.9,
      height: window.width * 0.9 * layoutImageRatio,
      resizeMode: "contain",
      marginTop: 20,
    },
    procedureLayout: {
      width: window.width * 0.9,
      height: window.width * 0.9 * procedureImageRatio,
      resizeMode: "contain",
      marginTop: 10,
      marginBottom: 20,
    },
    selectedSign: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
    },
    container: {
      marginTop: 30,
      height: 200,
    },
    rewardContainer: {
      flex: 1,
      alignContent: "center",
      justifyContent: "center",
    },
    workingContainer: {
      //flex: 1,
      alignContent: "center",
      justifyContent: "center",
      marginBottom: 20,
    },
    rewardText: {
      textAlign: "center",
      paddingLeft: 10,
      paddingRight: 10,
    },
    html: {},
    a: {},
    routes: {
      backgroundColor: "#ffffff",
      paddingTop: 20,
      flex: 1,
      paddingLeft: 10,
    },
    descriptionName: {
      fontSize: 20,
      color: theme.colors.primary,
      fontWeight: "bold",
      paddingBottom: 5,
    },
    deductionHeader: {
      fontWeight: "bold",
      color: theme.colors.primary,
      paddingBottom: 10,
    },
    deductionNotice: {
      fontWeight: "bold",
    },
    deductionLink: {
      textDecorationLine: "underline",
    },
  });

  const passRequirementsToHTML = (requirements) =>
    requirements.map((x) => " ✓ " + x + "<br/>").join("");
  const fRef = useRef();
  const FirstRoute = () => (
    <ScrollView overScrollMode="never" style={styles.routes} ref={fRef}>
      <Text style={styles.descriptionName}>
        {props.sign.title}
        {isWorkingSign
          ? " - " +
            workingStates.find((x) => x.value === workingLevelState).label
          : ""}
      </Text>
      <Text> </Text>
      {description !== undefined &&
        typeof description === "function" &&
        description()}
      {description !== undefined && typeof description !== "function" && (
        <RenderHtml
          key="desc"
          contentWidth={window.width}
          source={{ html: description }}
        />
      )}
      {description === undefined && (
        <>
          <Text>Not set.</Text>
        </>
      )}
      {isWorkingSign &&
        props.sign.levels !== undefined &&
        !_.isEmpty(props.sign.levels[workingLevelState].procedureImages) && (
          <>
            <Image
              source={props.sign.levels[workingLevelState].procedureImages[0]}
              style={styles.procedureLayout}
            />
          </>
        )}
      {hasDescriptionDetail && (
        <>
          <Card>
            <Card.Content>
              <>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: Platform.OS === "ios" ? "center" : "baseline",
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        color: theme.colors.primary,
                        fontWeight: "bold",
                        fontSize: 20,
                        marginBottom: 10,
                        marginLeft: 0,
                      }}
                    >
                      {isNormalSign && <>Helpful Hints</>}
                      {isWorkingSign && <>Pass Requirements</>}
                    </Text>
                  </View>
                </View>

                <RenderHtml
                  key="tips"
                  contentWidth={window.width}
                  source={{
                    html: isNormalSign
                      ? props.sign.tips
                      : passRequirementsToHTML(
                          props.sign.levels[workingLevelState].passRequirements
                        ),
                  }}
                />
              </>
            </Card.Content>
          </Card>
        </>
      )}
    </ScrollView>
  );
  useEffect(() => {
    if (props.scrollRef) {
      fRef.current.onScroll = props.scrollRef;
    }
  }, []);
  const generateDeductions = (d) => {
    if (d === undefined) {
      return "";
    }
    const toBullets = (x) => "<li>" + x + "</li>\n";
    let r = "";
    if (d.minor !== undefined && d.minor.length > 0) {
      r +=
        "<b>Minor (1 to 2 points)</b><ul>" +
        d.minor.map(toBullets).join("") +
        "</ul>";
    }
    if (d.substantial !== undefined && d.substantial.length > 0) {
      r +=
        "<b>Substantial (3 to 5 points)</b><ul>" +
        d.substantial.map(toBullets).join("") +
        "</ul>";
    }
    if (d.nq !== undefined && d.nq.length > 0) {
      r += "<b>Non-Qualifying</b><ul>" + d.nq.map(toBullets).join("") + "</ul>";
    }
    return r;
  };
  const FaultRoute = () => (
    <View style={styles.routes}>
      {isNormalSign && (
        <>
          <Text style={styles.deductionHeader}>
            Common deductions for this sign include:
          </Text>
          {props.sign.deductions && (
            <>
              <RenderHtml
                contentWidth={window.width}
                source={{
                  html: generateDeductions(props.sign.deductions),
                }}
              />
            </>
          )}
          <Text style={styles.deductionNotice}>
            See the <MasterGeneralHandbookTextLink /> for a complete list of
            deductions.
          </Text>
        </>
      )}
      {isWorkingSign && (
        <>
          <Text style={styles.descriptionName}>
            {props.sign.title}
            {isWorkingSign
              ? " - " +
                workingStates.find((x) => x.value === workingLevelState).label
              : ""}
          </Text>
          {!_.isEmpty(props.sign.levels[workingLevelState].layout) && (
            <>
              <RenderHtml
                key="layout"
                contentWidth={window.width}
                source={{
                  html: props.sign.levels[workingLevelState].layout,
                }}
              />
            </>
          )}
          {!_.isEmpty(props.sign.levels[workingLevelState].layoutImages) && (
            <>
              <Image
                source={props.sign.levels[workingLevelState].layoutImages[0]}
                style={styles.logoLayout}
              />
            </>
          )}

          {_.isEmpty(props.sign.levels[workingLevelState].layoutImages) && (
            <>
              <Text>Not set.</Text>
            </>
          )}
        </>
      )}
    </View>
  );
  const state = {
    index: index,
    routes: [
      {
        key: "first",
        title: isNormalSign ? "Description" : "Procedure",
        icon: "text-box-check-outline",
      },
      {
        key: "deductions",
        title: isNormalSign ? "Deductions" : "Layout",
        icon: isNormalSign ? "alert-minus-outline" : "map-marker-path",
      },
    ],
  };
  const s = SceneMap({
    first: FirstRoute,
    deductions: FaultRoute,
  });
  const renderTabBar = (props) => (
    <TabBar
      key="tabbar"
      {...props}
      labelStyle={{ fontSize: 13 }}
      activeColor={"black"}
      inactiveColor={"grey"}
      renderIcon={({ route, focused }) => (
        <>
          {route.icon !== undefined && (
            <>
              <MaterialIcons
                name={route.icon}
                size={24}
                color={focused ? "black" : "grey"}
              />
            </>
          )}
        </>
      )}
      indicatorStyle={{ backgroundColor: "#aaaaaa" }}
      style={{ marginTop: 25, backgroundColor: "#ffffff" }}
    />
  );

  return (
    <>
      <View style={styles.selectedSign}>
        <Image source={props.sign.icon} style={styles.logo} />
        {props.sign.reward && (
          <View style={styles.rewardContainer}>
            <MaterialIcons
              name="bone"
              size={32}
              color="black"
              style={styles.rewardText}
            />
            <Text style={styles.rewardText}>
              Reinforcement station in Novice &amp; Advanced A/B
            </Text>
          </View>
        )}
        {props.sign.changeSide && (
          <View style={styles.rewardContainer}>
            <MaterialIcons
              name="swap-horizontal-bold"
              size={32}
              color="black"
              style={styles.rewardText}
            />
            <Text style={styles.rewardText}>
              Station results in a change of heeling side
            </Text>
          </View>
        )}
        {props.sign.limitedCues && (
          <View style={styles.workingContainer}>
            <MaterialIcons
              name="account-voice-off"
              size={32}
              color="black"
              style={styles.rewardText}
            />
            <Text style={styles.rewardText}>Limited cues allowed</Text>
          </View>
        )}

        {isWorkingSign && (
          <View
            style={{
              zIndex: 200,
            }}
          >
            <DropDownPicker
              multiple={false}
              items={workingStates}
              open={open}
              value={workingLevelState}
              listMode={"SCROLLVIEW"}
              setOpen={setOpen}
              setValue={setWorkingLevelState}
            />
          </View>
        )}
        <View
          style={{
            //height: 800,
            flex: 1,
          }}
        >
          <TabView
            navigationState={state}
            renderScene={s}
            onIndexChange={updateIndex}
            key="tabs"
            renderTabBar={renderTabBar}
            style={{
              height: 900,
              //flex: 1,
              width: window.width - 20,
            }}
          />
        </View>
      </View>
    </>
  );
}
