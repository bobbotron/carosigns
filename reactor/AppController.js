import { StatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MainList from "./components/MainList";
import Level from "./components/Level";
import SignsDB from "./data/SignDb";

export default function AppController() {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  const [selectedLevel, setSelectedLevel] = useState(undefined);
  const [levels, setLevels] = useState([]);

  const [signs, setSigns] = useState(undefined);

  const levelListener = (l) => {
    console.log(l.name, "was selected");
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

      {selectedLevel === undefined ? (
        <MainList levels={levels} levelListener={levelListener} />
      ) : (
        <Level level={selectedLevel} backListener={backToMainList} />
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
