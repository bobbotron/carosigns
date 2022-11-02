import { Text } from "react-native";

const Categories = ["Beginner", "Advanced", "Excellent", "Versatility"];
const Signs = [
  {
    name: "100",
    icon: require("../assets/narrow.png"),
    category: "Beginner",
    description: () => {
      return (
        <>
          <Text>Things get narrow here</Text>
        </>
      );
    },
  },
  {
    name: "101",
    icon: require("../assets/stopahead.png"),
    category: "Beginner",
    description: () => {
      return (
        <>
          <Text>There's a stop ahead</Text>
        </>
      );
    },
  },
  {
    name: "102",
    icon: require("../assets/stopguy.jpg"),
    category: "Beginner",
    description: () => {
      return (
        <>
          <Text>Have to stop here</Text>
        </>
      );
    },
  },
];

const createLevel = (lName) => {
  return { name: lName };
};
const CategoryMap = Categories.reduce(function (map, obj) {
  map[obj] = Signs.filter((y) => y.category === obj);
  return map;
}, {});
console.log("Cmap", CategoryMap);
const SignsDB = { Signs, Categories: Categories.map(createLevel), CategoryMap };

export default SignsDB;
