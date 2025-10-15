import { Appbar } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { addFavourite, removeFavourite } from "../redux/favouritesSlice";

export default function FavAction(props) {
  const signDefined = props.sign !== undefined;

  const { favourites } = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  const addToFavList = (sign) => dispatch(addFavourite(sign));
  const removeFromFavList = (sign) => dispatch(removeFavourite(sign));

  const handleAddFav = (sign) => {
    addToFavList(sign);
  };

  const handleRemoveFav = (sign) => {
    removeFromFavList(sign);
  };
  const favAddListener = () => handleAddFav(props.sign);
  const favRemoveListener = () => handleRemoveFav(props.sign);
  const size = 36;
  const isStared =
    signDefined && favourites.filter((s) => s === props.sign.name).length !== 0;
  return (
    <>
      {signDefined ? (
        isStared ? (
          <>
            <Appbar.Action
              icon="star"
              size={size}
              onPress={favRemoveListener}
            />
          </>
        ) : (
          <>
            <Appbar.Action
              icon="star-outline"
              size={size}
              onPress={favAddListener}
            />
          </>
        )
      ) : (
        <></>
      )}
    </>
  );
}
