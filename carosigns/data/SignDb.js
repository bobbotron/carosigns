import MainStream from "./MainStream";
import Novice from "./Novice";
import Advanced from "./Advanced";
import Excellent from "./Excellent";
import Versatility from "./Versatility";
import VersatilityExcellent from "./VersatilityExcellent";
import WorkingStream from "./WorkingStream";
import Working from "./Working";
//import Intermediate from "./Intermediate";

const Levels = [
  MainStream,
  Novice,
  // Intermediate,
  Advanced,
  Excellent,
  Versatility,
  VersatilityExcellent,
  WorkingStream,
  Working,
];

Levels.forEach((x) => {
  if (x.signs !== undefined) {
    x.signs.forEach((y) => {
      y.category = y.category ? y.category.concat([x.name]) : [x.name];
      y.signType = x.type;
    });
  }
});

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
    signs: Signs.filter((s) => s.category.indexOf(l.name) !== -1),
  };
};

const SignsDB = { Signs, Categories: Levels.map(createLevel) };

export default SignsDB;
