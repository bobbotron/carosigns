import { Appbar } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { addFavourite, removeFavourite } from "../redux/favouritesSlice";
import { Sign } from "../types/Sign";

interface FavActionProps {
  sign?: Sign;
}

export default function FavAction({ sign }: FavActionProps): React.JSX.Element {
  const signDefined = sign !== undefined;

  const { favourites } = useSelector((state: any) => state.favourites);
  const dispatch = useDispatch();

  const addToFavList = (sign: Sign) => dispatch(addFavourite(sign));
  const removeFromFavList = (sign: Sign) => dispatch(removeFavourite(sign));

  const handleAddFav = (sign: Sign) => {
    addToFavList(sign);
  };

  const handleRemoveFav = (sign: Sign) => {
    removeFromFavList(sign);
  };
  const favAddListener = () => handleAddFav(sign!);
  const favRemoveListener = () => handleRemoveFav(sign!);
  const size = 36;
  const isStared =
    signDefined &&
    favourites.filter((s: Sign) => s.name === sign!.name).length !== 0;
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
