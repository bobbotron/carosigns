import { Text } from "react-native";
import Novice from './Novice';
import Advanced from './Advanced';
import Excellent from "./Excellent";
import Versatility from "./Versatility";
import VersatilityExcellent from "./VersatilityExcellent";

const Categories = ["Novice", "Advanced", "Excellent", "Versatility", "Versatility Excellent"];
const Signs = [...Novice, ...Advanced, ...Excellent, ...Versatility, ...VersatilityExcellent];

const createLevel = (lName) => {
  return { name: lName };
};
const CategoryMap = Categories.reduce(function (map, obj) {
  map[obj] = Signs.filter((y) => y.category === obj);
  return map;
}, {});

const SignsDB = { Signs, Categories: Categories.map(createLevel), CategoryMap };

export default SignsDB;
