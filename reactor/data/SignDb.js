import MainStream from "./MainStream";
import Novice from "./Novice";
import Advanced from "./Advanced";
import Excellent from "./Excellent";
import Versatility from "./Versatility";
import VersatilityExcellent from "./VersatilityExcellent";
import WorkingStream from "./WorkingStream";
import Working from "./Working";

const Levels = [
  MainStream,
  Novice,
  Advanced,
  Excellent,
  Versatility,
  VersatilityExcellent,
  WorkingStream,
  Working,
];

// Todo redo with levels array
const Signs = [
  ...Novice.signs,
  ...Advanced.signs,
  ...Excellent.signs,
  ...Versatility.signs,
  ...VersatilityExcellent.signs,
  ...Working.signs,
];

const createLevel = (l) => {
  return {
    name: l.name,
    type: l.type,
    icon: l.icon,
    signs: Signs.filter((s) => s.category === l.name),
  };
};

const SignsDB = { Signs, Categories: Levels.map(createLevel) };

export default SignsDB;
