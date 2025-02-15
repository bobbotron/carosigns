import { setSelectedSign } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Sign } from "../types/Sign";
export default function useLevelHooks({ signs }: { signs: Sign[] }) {
  const { selectedSign } = useSelector((state: any) => state.signsReducer);
  const dispatch = useDispatch();

  return {
    selectedSign,
    showSigns: signs.length === 0,
    levelSelectFn: (l: any) => dispatch(setSelectedSign(l)),
  };
}
