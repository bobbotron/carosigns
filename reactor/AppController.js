import { StatusBar } from "expo-status-bar";
import { Button, Card, Searchbar } from "react-native-paper";
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
import HandbookTextLink from "./components/HandbookTextLink";
import { useSelector, useDispatch } from "react-redux";
import { setSearchText, setSelectedLevel } from "./redux/actions";
import AppHeader from "./components/AppHeader";
export default function AppController() {
  const window = useWindowDimensions();

  const { selectedLevel, searchText } = useSelector(
    (state) => state.signsReducer
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
  const queryLower = searchActive ? searchText.toLowerCase() : "";
  const selectedSigns = !searchActive
    ? undefined
    : SignsDB.Signs.filter(
        (x) =>
          x.name.toLowerCase().includes(queryLower) ||
          (x.title !== undefined && x.title.toLowerCase().includes(queryLower))
      );

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
            <MainList levels={levels} levelListener={levelListener} />
            <Card style={styles.disclaimerCard}>
              <Card.Content>
                <Text>
                  <Text style={styles.disclaimerBold}>Note:</Text> See the{" "}
                  <HandbookTextLink /> for complete information and rules. In the case of
                  a discrepancy, the handbook is final.
                </Text>
              </Card.Content>
            </Card>
          </>
        )}
        {selectedLevel !== undefined && !searchActive && (
          <Level
            level={selectedLevel}
            backListener={backToMainList}
            signs={selectedLevel.signs}
          />
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
                      dispatch(
                        setSearchText(x.title === undefined ? x.name : x.title)
                      )
                    }
                  >
                    {x.title === undefined && <>{x.name} </>}
                    {x.title !== undefined && <>{x.title}</>}
                  </Button>
                ))}
              </>
            )}
          </>
        )}

        <StatusBar style="auto" />
      </View>
    </View>
  );
}
