import { Card, Searchbar } from "react-native-paper";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import MainList from "./components/MainList";
import Level from "./components/Level";
import SignsDB from "./data/SignDb";
import PracticeMode from "./components/PracticeMode";
import HandbookTextLink from "./components/HandbookTextLink";
import { useSelector, useDispatch } from "react-redux";
import AppHeader from "./components/AppHeader";
import SearchResults from "./components/SearchResults";
import { setSearchText, setSelectedLevel } from "./redux/appSlice";

export default function AppController() {
  const window = useWindowDimensions();

  const { selectedLevel, searchText, practiceMode } = useSelector(
    (state) => state.app
  );

  const dispatch = useDispatch();

  const styles = StyleSheet.create({
    searchbar: {
      marginTop: 10,
      marginBottom: 10,
      width: "100%",
    },
    container: {
      marginLeft: 10,
      marginRight: 10,
      flex: 1,
      alignItems: "stretch",
      alignSelf: "stretch",
    },
    caroLogo: {
      width: window.width * 0.9,
      height: (window.width / 1061) * 215 * 0.9,
      marginBottom: 10,
    },
    disclaimerCard: {
      marginTop: 20,
      marginBottom: 20,
    },
    disclaimerBold: {
      fontWeight: "bold",
    },
  });

  const onChangeSearch = (query) => {
    dispatch(setSearchText(query));
  };

  const [levels, setLevels] = useState([]);

  const searchActive = !(searchText === undefined || searchText === "");

  const levelListener = (l) => {
    dispatch(setSelectedLevel(l));
  };
  const backToMainList = () => {
    dispatch(setSelectedLevel(undefined));
    dispatch(setSearchText(""));
  };
  useEffect(() => {
    setLevels(SignsDB.Categories);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <AppHeader />

      <View style={styles.container}>
        {practiceMode.active && <PracticeMode></PracticeMode>}
        {!practiceMode.active && (
          <>
            {selectedLevel === undefined && (
              <Searchbar
                style={styles.searchbar}
                placeholder="Search Signs"
                onChangeText={onChangeSearch}
                value={searchText}
              />
            )}
            {selectedLevel === undefined && !searchActive && (
              <>
                <ScrollView>
                  {/* <Button title="Press to hear some words" onPress={speak} /> */}
                  <MainList levels={levels} levelListener={levelListener} />
                  <Card style={styles.disclaimerCard}>
                    <Card.Content>
                      <Text>
                        <Text style={styles.disclaimerBold}>Note:</Text> See the{" "}
                        <HandbookTextLink /> for complete information and rules.
                        In the case of a discrepancy, the handbooks are final.
                      </Text>
                    </Card.Content>
                  </Card>
                </ScrollView>
              </>
            )}
            {selectedLevel !== undefined && !searchActive && (
              <Level
                level={selectedLevel}
                backListener={backToMainList}
                signs={selectedLevel.signs}
              />
            )}
            {searchActive && <SearchResults />}
          </>
        )}
      </View>
    </View>
  );
}
