import { Appbar, Text } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions";

export default function FavAction(props) {
  const signDefined = props.sign !== undefined;

  const { favorites } = useSelector((state) => state.signsReducer);
  const dispatch = useDispatch();

  const addToFavList = (sign) => dispatch(addFavorite(sign));
  const removeFromFavList = (sign) => dispatch(removeFavorite(sign));

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
    signDefined && favorites.filter((s) => s === props.sign.name).length !== 0;
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
