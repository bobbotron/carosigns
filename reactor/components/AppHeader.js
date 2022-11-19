import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Appbar, Menu, Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import SignsDB from "../data/SignDb";
import { setSelectedLevel, setSelectedSign } from "../redux/actions";
import Theme from "../Theme";
import FavAction from "./FavAction";

export default function AppHeader(props) {
  const { selectedLevel, selectedSign, favorites } = useSelector(
    (state) => state.signsReducer
  );
  const dispatch = useDispatch();
  const backButtonListener = () => {
    if (selectedSign !== undefined) {
      dispatch(setSelectedSign(undefined));
    } else if (selectedLevel !== undefined) {
      dispatch(setSelectedLevel(undefined));
    }
  };
  const showFavSigns = () => {
    const favLevel = {
      name: "My Saved Signs",
      isFavorites: true,
      signs: SignsDB.Signs.filter((s) => favorites.includes(s.name)),
    };
    dispatch(setSelectedLevel(favLevel));
    dispatch(setSelectedSign(undefined));
    setVisible(false);
  };
  const titleListener = () => {
    if (selectedLevel === undefined) {
      showFavSigns();
    }
  };
  const appBarTitle =
    selectedLevel === undefined
      ? ""
      : selectedSign === undefined || selectedSign.title === undefined
      ? selectedLevel.name
      : selectedSign.title;
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header
      style={{
        backgroundColor:
          selectedLevel === undefined ? "#ffffff" : Theme.colors.background,
      }}
    >
      {selectedLevel !== undefined && (
        <Appbar.BackAction onPress={backButtonListener} />
      )}

      <Appbar.Content
        onPress={titleListener}
        titleStyle={{
          textAlign: selectedLevel === undefined ? "right" : "left",
        }}
        title={
          selectedLevel === undefined ? (
            <TouchableOpacity onPress={titleListener}>
              <Text>{appBarTitle}</Text>
            </TouchableOpacity>
          ) : (
            <Text>{appBarTitle}</Text>
          )
        }
      />

      {selectedSign !== undefined && <FavAction sign={selectedSign} />}
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}
      >
        <Menu.Item
          onPress={showFavSigns}
          title="My Saved Signs"
          leadingIcon="star"
        />
      </Menu>
    </Appbar.Header>
  );
}
