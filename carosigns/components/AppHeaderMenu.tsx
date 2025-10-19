import React, { useEffect, useState } from "react";
import { Appbar, Menu } from "react-native-paper";
import SignsDB from "../data/SignDb";
import { useDispatch, useSelector } from "react-redux";
import {
  setPracticeMode,
  setSelectedLevel,
  setSelectedSign,
} from "../redux/appSlice";
import { setupState } from "./PracticeMode";

export default function AppHeaderMenu() {
  const { favourites } = useSelector((state: any) => state.favourites);
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const openMenu = () => {
    setVisible(true);
  };
  const closeMenu = () => setVisible(false);

  const showFavSigns = () => {
    const favLevel = {
      name: "My Saved Signs",
      isfavourites: true,
      signs: SignsDB.Signs.filter((s) => favourites.includes(s.name)),
    };
    dispatch(setSelectedLevel(favLevel));
    dispatch(setSelectedSign(undefined));
    dispatch(setPracticeMode({ active: false, state: setupState }));
    setVisible(false);
  };
  const showPracticeMode = () => {
    dispatch(setPracticeMode({ active: true, state: setupState }));

    setVisible(false);
  };
  return (
    <Menu
      key={String(visible)}
      style={{ zIndex: 1000 }}
      visible={visible}
      onDismiss={closeMenu}
      anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}
    >
      <Menu.Item
        onPress={showFavSigns}
        title="My Saved Signs"
        leadingIcon="star"
      />
      <Menu.Item
        onPress={showPracticeMode}
        title="Practice Time"
        leadingIcon="motion-play-outline"
      />
    </Menu>
  );
}
