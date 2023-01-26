const Working = { name: "Working",
type: "working",
buttonColor: "blue",
signs: [
  {
    name: "1",
    icon: require("../assets/slides/start.jpg"), // Todo update this!
    category: "Working",
    title: "1. Drop on recall",
    levels: {
      rookie: {
        procedure: "Woah woah",
        procedureImages: [require("../assets/slides/200.jpg")],
        layout: "",
        layoutImages: [],
        passRequirements: [],
      },
      elite: {
        procedure: "Woah",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: [],
      },
      expert: {
        procedure: "Woah",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: [],
      },
    },
  },
]};

export default Working;
