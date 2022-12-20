import { useState } from "react";
import {
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
  ScrollView,
  Platform,
} from "react-native";
import { Card, Text } from "react-native-paper";
import RenderHtml from "react-native-render-html";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import HandbookTextLink from "./HandbookTextLink";
import theme from "../Theme";

export default function SignDetail(props) {
  const window = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const styles = StyleSheet.create({
    logo: {
      width: window.width * 0.7 * 1.3,
      height: window.width * 0.7,
      textAlign: "center",
    },
    selectedSign: {
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
  const FirstRoute = () => (
    <View style={styles.routes}>
      <Text style={styles.descriptionName}>{props.sign.title}</Text>

      {props.sign.description !== undefined &&
        typeof props.sign.description === "function" &&
        props.sign.description()}
      {props.sign.description !== undefined &&
        typeof props.sign.description !== "function" && (
          <RenderHtml
            key="desc"
            contentWidth={window.width}
            source={{ html: props.sign.description }}
          />
        )}
      {props.sign.description === undefined && (
        <>
          <Text>Description not set.</Text>
        </>
      )}
      {props.sign.tips !== undefined && (
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
                      Helpful Hints
                    </Text>
                  </View>
                </View>

                <RenderHtml
                  key="tips"
                  contentWidth={window.width}
                  source={{ html: props.sign.tips }}
                />
              </>
            </Card.Content>
          </Card>
        </>
      )}
    </View>
  );
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
        See the <HandbookTextLink /> for a complete list of deductions.
      </Text>
    </View>
  );
  const VideoRoute = () => (
    <View style={styles.routes}>
      <Text>Coming soon.</Text>
    </View>
  );
  const state = {
    index: index,
    routes: [
      { key: "first", title: "Description", icon: "text-box-check-outline" },
      { key: "deductions", title: "Deductions", icon: "alert-minus-outline" },
      { key: "video", title: "Video", icon: "play-circle-outline" },
    ],
  };
  const s = SceneMap({
    first: FirstRoute,
    deductions: FaultRoute,
    video: VideoRoute,
  });
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      labelStyle={{ fontSize: 13 }}
      activeColor={"black"}
      inactiveColor={"grey"}
      renderIcon={({ route, focused, color }) => (
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
    <ScrollView>
      <View
      // style={styles.selectedSign}
      >
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
              This station results in a change of side.
            </Text>
          </View>
        )}
        <View style={{ height: 700 }}>
          <TabView
            navigationState={state}
            renderScene={s}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
            style={{ height: 200, width: window.width - 20 }}
          />
        </View>
      </View>
    </ScrollView>
  );
}
const htmlStyle = StyleSheet.create({
  a: {
    fontWeight: "300",
    color: "#33ff33",
  },
});
