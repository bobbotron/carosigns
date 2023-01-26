import Novice from "./Novice";
import Advanced from "./Advanced";
import Excellent from "./Excellent";
import Versatility from "./Versatility";
import VersatilityExcellent from "./VersatilityExcellent";
import Working from "./Working";
const Levels = [Novice, Advanced, Excellent, Versatility, VersatilityExcellent, Working];

// Todo redo with levels array
const Signs = [
  ...Novice.signs,
  ...Advanced.signs,
  ...Excellent.signs,
  ...Versatility.signs,
  ...VersatilityExcellent.signs,
  ...Working.signs,
];

const Categories = Signs.map((x) => x.name);

const createLevel = (l) => {
  return {
    name: l.name,
    type: l.type,
    signs: Signs.filter((s) => s.category === l.name),
  };
};

const SignsDB = { Signs, Categories: Levels.map(createLevel) };
console.log(SignsDB);

export default SignsDB;
