import { View, Text, ScrollView } from "react-native";
import React, { useDispatch, useSelector } from "react-redux";
import SignsDB from "../data/SignDb";
import SignDetail from "./SignDetail";
import { Button } from "react-native-paper";
import { setSearchSelectedSign } from "../redux/actions";

export default function SearchResults() {
  const { searchText, searchSelectedSign } = useSelector(
    (state) => state.signsReducer
  );
  const searchActive = !(searchText === undefined || searchText === "");
  const queryLower = searchActive ? searchText.toLowerCase() : "";
  const selectedSigns = !searchActive
    ? undefined
    : SignsDB.Signs.filter(
        (x) =>
          x.name.toLowerCase().includes(queryLower) ||
          (x.title !== undefined && x.title.toLowerCase().includes(queryLower))
      );

  const dispatch = useDispatch();
  return (
    <ScrollView>
      {selectedSigns.length === 0 && <Text>No results found.</Text>}
      {(searchSelectedSign || selectedSigns.length === 1) && (
        <View style={{ marginTop: 15 }}>
          <SignDetail
            sign={searchSelectedSign ? searchSelectedSign : selectedSigns[0]}
          />
        </View>
      )}
      {!searchSelectedSign && selectedSigns.length > 1 && (
        <>
          <Text>{selectedSigns.length} results found.</Text>
          {selectedSigns.map((x) => (
            <Button
              key={x.name}
              mode="contained"
              style={{ marginTop: 10 }}
              onPress={() => dispatch(setSearchSelectedSign(x))}
            >
              {x.title === undefined && <>{x.name} </>}
              {x.title !== undefined && <>{x.title}</>}
            </Button>
          ))}
        </>
      )}
    </ScrollView>
  );
}
