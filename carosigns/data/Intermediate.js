import Novice from "./Novice";
import Advanced from "./Advanced";

const signDeny = ["201", "213", "214", "220"];
const IntermediateSigns = Novice.signs
  .concat(Advanced.signs)
  .filter((x) => signDeny.indexOf(x.name) === -1);

const Intermediate = {
  name: "Intermediate",
  type: "normal",
  signs: IntermediateSigns,
};

export default Intermediate;
