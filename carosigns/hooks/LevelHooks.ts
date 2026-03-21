import { useDispatch, useSelector } from "react-redux";
import { Sign } from "../types/Sign";
import { setSelectedSign } from "../redux/appSlice";
import { RootState } from "../redux/store";
export default function useLevelHooks({ signs }: { signs: Sign[] }) {
  const { selectedSign } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  return {
    selectedSign,
    showSigns: signs.length === 0,
    levelSelectFn: (l: any) => dispatch(setSelectedSign(l)),
  };
}
