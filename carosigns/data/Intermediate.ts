import Novice from "./Novice";
import Advanced from "./Advanced";
import { Level } from "../types/Sign";

const signDeny = ["201", "212", "213", "214", "220", "223"];
const IntermediateSigns = Advanced.signs.filter(
  (x) => signDeny.indexOf(x.name) === -1
);

const Intermediate: Level = {
  name: "Intermediate",
  type: "normal",
  signs: IntermediateSigns,
};

export default Intermediate;
