import { Text } from "react-native";

const Categories = ["Beginner", "Advanced", "Excellent", "Versatility"];
const Signs = [
  {
    name: "Start",
    icon: require("../assets/slides/start.JPG"),
    category: "Beginner",
    // description: () => {
    //   return (
    //     <>
    //       <Text>Time to start eh</Text>
    //     </>
    //   );
    //,
  },
  {
    name: "Finish",
    icon: require("../assets/slides/finish.JPG"),
    category: "Beginner",
    // description: () => {
    //   return (
    //     <>
    //       <Text>Time to start eh</Text>
    //     </>
    //   );
    //,
  },
  {
    name: "100",
    icon: require("../assets/slides/100.JPG"),
    category: "Beginner",
    description: () => {
      return (
        <>
          <Text>Dog stands up!</Text>
        </>
      );
    },
  },
  {
    name: "101",
    icon: require("../assets/slides/101.JPG"),
    category: "Beginner",
    description: () => {
      return (
        <>
          <Text>Down</Text>
        </>
      );
    },
  },
  {
    name: "102",
    icon: require("../assets/slides/102.JPG"),
    category: "Beginner",
    description: undefined,
  },
  {
    name: "103",
    icon: require("../assets/slides/103.JPG"),
    category: "Beginner",
    description: undefined,
  },
  {
    name: "104",
    icon: require("../assets/slides/104.JPG"),
    category: "Beginner",
    description: undefined,
  },
  {
    name: "105",
    icon: require("../assets/slides/105.JPG"),
    category: "Beginner",
    description: undefined,
  },
  {
    name: "106",
    icon: require("../assets/slides/106.JPG"),
    category: "Beginner",
    description: undefined,
  },
  {
    name: "107",
    icon: require("../assets/slides/107.JPG"),
    category: "Beginner",
    description: undefined,
  },
  {
    name: "108",
    icon: require("../assets/slides/108.JPG"),
    category: "Beginner",
    description: undefined,
  },
  {
    name: "109",
    icon: require("../assets/slides/109.JPG"),
    category: "Beginner",
    description: undefined,
  },
  {
    name: "110",
    icon: require("../assets/slides/110.JPG"),
    category: "Beginner",
    description: undefined,
  },
];

const createLevel = (lName) => {
  return { name: lName };
};
const CategoryMap = Categories.reduce(function (map, obj) {
  map[obj] = Signs.filter((y) => y.category === obj);
  return map;
}, {});

const SignsDB = { Signs, Categories: Categories.map(createLevel), CategoryMap };

export default SignsDB;
