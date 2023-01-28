const Working = { name: "Working Stream",
type: "working",
buttonColor: "blue",
signs: [
  {
    name: "DOR",
    icon: require("../assets/slides/DOR.png"),
    category: "Working Stream",
    title: "1. Drop on Recall",
    levels: {
      rookie: {
        procedure: "The exercise begins when the handler steps into the dog box.<br/>• The handler cues the dog to sit in heel position,<br/>• Cues the dog to stay, proceeds to the handler box and turns to face the dog,<br/>• Calls the dog and then cues the following sequence:<br/>▪	Down between the 10-foot and 15-foot lines,<br/>▪ Call to front position.<br/><br/>The exercise ends when the dog assumes front position",
        procedureImages: [],
        layout: "",
        layoutImages: [require("../assets/slides/200.jpg")],
        passRequirements: ["The dog starts in heel position,", "Stays in position(s) until cued to move,","Moves directly towards the handler until cued to perform another behaviour,","Has front paws within the designated zone when assuming a position,","Comes to front position."],
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
