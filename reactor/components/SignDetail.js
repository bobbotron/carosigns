import { useState } from "react";
import {
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
  Text,
  ScrollView,
} from "react-native";

import { TabView, SceneMap, TabBar } from "react-native-tab-view";

export default function SignDetail(props) {
  const window = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const FirstRoute = () => (
    <View style={{ backgroundColor: "#ffffff", paddingTop: 10 }}>
      {props.sign.description !== undefined &&
        typeof props.sign.description === "function" &&
        props.sign.description()}
      {props.sign.description !== undefined &&
        typeof props.sign.description !== "function" && (
          <Text>{props.sign.description}</Text>
        )}
      {props.sign.description === undefined && (
        <>
          <Text>Description not set.</Text>
        </>
      )}
    </View>
  );
  const FaultRoute = () => (
    <View style={{ backgroundColor: "#ffffff", paddingTop: 10 }}>
      <Text>No Video Available</Text>
    </View>
  );
  const VideoRoute = () => (
    <View style={{ backgroundColor: "#ffffff", paddingTop: 10 }}>
      <Text>No Video Available</Text>
    </View>
  );

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
  });
  const state = {
    index: index,
    routes: [
      { key: "first", title: "Description" },
      { key: "faults", title: "Faults" },
      { key: "video", title: "Videos" },
    ],
  };
  const s = SceneMap({
    first: FirstRoute,
    faults: FaultRoute,
    video: VideoRoute,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      labelStyle={{fontSize: 13}}
      activeColor={"black"}
      inactiveColor={"grey"}
      indicatorStyle={{backgroundColor: "#aaaaaa"}}
      style={{ marginTop: 25, backgroundColor: "#ffffff",  }}
    />
  );
  return (
    <View style={styles.selectedSign}>
      <ScrollView>
      <Image source={props.sign.icon} style={styles.logo} />

      <View style={{ height: 400 }}>
        <TabView
          navigationState={state}
          renderScene={s}
          onIndexChange={setIndex}
          // initialLayout={{ width: window.width - 10 }}
          renderTabBar={renderTabBar}
          style={{ height: 200, width: window.width - 20 }}
        />
      </View>
      </ScrollView>
    </View>
  );
}
