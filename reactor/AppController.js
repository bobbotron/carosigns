import { StatusBar } from "expo-status-bar";
import { Button, Searchbar } from "react-native-paper";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  Image,
} from "react-native";
import MainList from "./components/MainList";
import Level from "./components/Level";
import SignsDB from "./data/SignDb";
import SignDetail from "./components/SignDetail";

export default function AppController() {
  const window = useWindowDimensions();

  const styles = StyleSheet.create({
    searchbar: {},
    container: {
      marginTop: 35,
      marginLeft: 10,
      marginRight: 10,
    },
    caroLogo: {
      // 800x138
      width: window.width * 0.9,
      height: (window.width / 1061) * 215 * 0.9,
      marginBottom: 10,
    },
  });
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const [selectedLevel, setSelectedLevel] = useState(undefined);
  const [levels, setLevels] = useState([]);

  const searchActive = !(searchQuery === undefined || searchQuery === "");
  const queryLower = searchQuery.toLowerCase();
  const selectedSigns = !searchActive
    ? undefined
    : SignsDB.Signs.filter(
        (x) =>
          x.name.toLowerCase().includes(queryLower) ||
          (x.title !== undefined && x.title.toLowerCase().includes(queryLower))
      );

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
      <Image
        source={require("./assets/caro-logo-2.png")}
        style={styles.caroLogo}
      />

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
          {selectedSigns.length === 0 && <Text>No results found.</Text>}
          {selectedSigns.length === 1 && (
            <View style={{ marginTop: 15 }}>
              <SignDetail sign={selectedSigns[0]} />
            </View>
          )}
          {selectedSigns.length > 1 && (
            <>
              <Text>{selectedSigns.length} results found.</Text>
              {selectedSigns.map((x) => (
                <Button
                  key={x.name}
                  mode="contained"
                  style={{ marginTop: 10 }}
                  onPress={() =>
                    setSearchQuery(x.title === undefined ? x.name : x.title)
                  }
                >
                  {x.title === undefined && <> {x.name}</>}{" "}
                  {x.title !== undefined && <>{x.title}</>}
                </Button>
              ))}
            </>
          )}
        </>
      )}

      <StatusBar style="auto" />
    </View>
  );
}
