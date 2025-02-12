import { setSelectedSign } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function useLevelHooks({ signs }) {
  const { selectedSign } = useSelector((state) => state.signsReducer);
  const dispatch = useDispatch();

  return {
    selectedSign,
    showSigns: signs.length === 0,
    levelSelectFn: (l) => dispatch(setSelectedSign(l)),
  };
}
