import { StatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import MainList from "./components/MainList";
import Level from "./components/Level";
import SignsDB from "./data/SignDb";

export default function AppController() {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    console.log("search ", query);
  };

  const [selectedLevel, setSelectedLevel] = useState(undefined);
  const [levels, setLevels] = useState([]);

  const searchActive = !(searchQuery === undefined || searchQuery === "");
  const selectedSigns = !searchActive
    ? undefined
    : SignsDB.Signs.filter((x) => x.name.includes(searchQuery));

  const levelListener = (l) => {
    setSelectedLevel(l);
  };
  const backToMainList = () => {
    setSelectedLevel(undefined);
    setSearchQuery("");
  };
  useEffect(() => {
    setLevels(SignsDB.Categories);
  }, []);
  return (
    <View style={styles.container}>
      {selectedLevel === undefined && (
        <Searchbar
          style={styles.searchbar}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      )}

      {selectedLevel === undefined && !searchActive && (
        <MainList levels={levels} levelListener={levelListener} />
      )}
      {selectedLevel !== undefined && !searchActive && (
        <Level level={selectedLevel} backListener={backToMainList} />
      )}

      {searchActive && (
        <>
          <Text>
            Hey there's a search happening! {selectedSigns.length} results
            found.
          </Text>
        </>
      )}

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  searchbar: {},
  container: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
