const Working = { name: "Working Exercises",
type: "working",
buttonColor: "blue",
signs: [
  {
    name: "DOR",
    icon: require("../assets/working_signs/W1_DOR.png"),
    category: "Working Exercises",
    title: "1. Drop on Recall (DOR)",
    
    levels: {
      rookie: {
        procedure: "The exercise begins when the handler steps into the dog box.<br/>• The handler cues the dog to sit in heel position,<br/>• Cues the dog to stay, proceeds to the handler box and turns to face the dog,<br/>• Calls the dog and then cues the following sequence:<br/>&nbsp;&nbsp; • Down between the 10-foot and 15-foot lines,<br/>&nbsp;&nbsp; • Call to sit in front position.<br/>The exercise ends when the dog sits in front position<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [require("../assets/Diagrams/DOR_Rookie.png")],
        passRequirements: ["The dog starts in heel position,", "Stays in position (sit then down) until cued to move,","Moves directly towards the handler until cued to perform another behaviour,","Has front paws within the designated zone when assuming a position,","Comes to sit in front position."],
      },
      elite: {
        procedure: "The exercise begins when the handler steps into the dog box.<br/>• The handler cues the dog to sit in heel position,<br/>• Cues the dog to stay, proceeds to the handler box and turns to face the dog,<br/>• Calls the dog and then cues the following sequence:<br/>&nbsp;&nbsp; • Down between the 10-foot and 15-foot lines,<br/>&nbsp;&nbsp; • Come forward,<br/>&nbsp;&nbsp; • Sit between the 5-foot and 10-foot lines,<br/>&nbsp;&nbsp; • Call to sit in front position.<br/>The exercise ends when the dog sits in front position.<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["The dog starts in heel position,", "Stays in position (sit, down then sit) until cued to move,","Moves directly towards the handler until cued to perform another behaviour,","Has front paws within the designated zone when assuming a position,","Comes to sit in front position."],
      },
     
      expert: {
        procedure: "The exercise begins when the handler steps into the dog box.<br/>• The handler cues the dog to sit in heel position,<br/>• Cues the dog to stay, proceeds to the handler box and turns to face the dog,<br/>• Calls the dog and then cues the following sequence:<br/>&nbsp;&nbsp; • Down between the 10-foot and 15-foot lines,<br/>&nbsp;&nbsp; • Sit from the down positions,<br/>&nbsp;&nbsp; • Come forward,<br/>&nbsp;&nbsp; • Stand between the 5-foot and 10-foot lines,<br/>&nbsp;&nbsp; • Call to sit in front position,<br/>&nbsp;&nbsp; • Finish and sit in heel position<br/>The exercise ends when the dog sits in heel position.<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["The dog starts in heel position,", "Stays in position (sit, down, sit, then stand) until cued to move,","Moves directly towards the handler until cued to perform another behaviour,","Has front paws within the designated zone when assuming a position,","Comes to front position,", "Finishes on cue."],
      },
    },
  },
  {
    name: "ROF",
    icon: require("../assets/working_signs/W2_ROF.png"),
    category: "Working Exercises",
    title: "2. Retrieve on Flat",
   
    levels: {
      rookie: {
        procedure: "The exercise begins when the handler steps into the handler box.<br/>• The handler cues the dog to sit in heel position,<br/>• Throws the object the required minimum distance,<br/>• Cues the dog to retrieve the object when it has stopped moving.<br/>• Cues the dog to sit in front position holding the object,<br/>•	The dog remains sitting in front position while the handler takes the object directly from the dog.<br/>The exercise ends when the handler has taken the object from the dog.<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["The dog sits in heel position until cued,", "Maintains sitting in heel position while the handler throws the object and it has stopped moving,", "Retrieves the object on cue,","Returns to the handler to sit in front position,","Remains sitting in front position while the handler takes the object directly from the dog."],
      },
      elite: {
        procedure: "The exercise begins when the handler steps into the handler box.<br/>• The handler cues the dog to sit in heel position,<br/>• Throws the object the required minimum distance,<br/>• Cues the dog to retrieve the object when it has stopped moving.<br/>• Cues the dog to sit in front position holding the object,<br/>•	The dog remains sitting in front position while the handler takes the object directly from the dog.<br/>The exercise ends when the handler has taken the object from the dog.<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["The dog sits in heel position until cued,", "Maintains sitting in heel position while the handler throws the object and it has stopped moving,", "Retrieves the object on cue,","Returns to the handler to sit in front position,","Remains sitting in front position while the handler takes the object directly from the dog."],
      },
      expert: {
        procedure: "The exercise begins when the handler steps into the handler box.<br/>• The handler cues the dog to sit in heel position,<br/>• Throws the object the required minimum distance,<br/>• After the object has stopped moving, cues the dog to down in heel position,<br/>• Cues the dog to sit in front position holding the object,<br/>•	The dog remains sitting in front position while the handler takes the object directly from the dog.<br/>•	The handler cues the dog to finish and sit in heel position.<br/>The exercise ends when the dog has finished and is sitting in heel position.<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["The dog sits in heel position until cued,", "Maintains sitting in heel position while the handler throws the object and it has stopped moving,", "Downs in heel position on cue", "Retrieves the object on cue,","Returns to the handler to sit in front position,","Remains sitting in front position while the handler takes the object directly from the dog.","Finishes on cue"],
      },
    },
  },


  {
    name: "BR",
    icon: require("../assets/working_signs/W3_BR.png"),
    category: "Working Exercises",
    title: "3. Barrel Racing (BR)",
    
    levels: {
      rookie: {
        procedure: "The exercise begins when the handler steps into the handler box.<br/>● The handler cues the dog to sit in heel position,<br/>● Sends the dog through one of the two possible patterns as depicted below,<br/>● Calls the dog to sit in front position.<br/>The exercise ends when the dog sits in front position for Rookie.<br/><br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["The dog sits in heel position until cued,", "Circles the cones in the correct order and direction as illustrated above,","Returns to the handler to sit in front position."],
      },
      elite: {
        procedure: "The exercise begins when the handler steps into the handler box.<br/>● The handler cues the dog to sit in heel position,<br/>● Sends the dog through one of the two possible patterns as depicted below,<br/>● Calls the dog to sit in front position.<br/>The exercise ends when the dog sits in front position for Rookie.<br/><br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["The dog sits in heel position until cued,", "Circles the cones in the correct order and direction as illustrated above,","Returns to the handler to sit in front position."],
      },
      expert: {
        procedure: "The exercise begins when the handler steps into the handler box.<br/>● The handler cues the dog to sit in heel position,<br/>● Sends the dog through one of the two possible patterns as depicted below,<br/>● Calls the dog to sit in front position.<br/>● Cues the dog to finish.<br/>The exercise ends when the dog sits in front position for Rookie.<br/><br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["The dog sits in heel position until cued,", "Circles the cones in the correct order and direction as illustrated above,","Returns to the handler to sit in front position,","Finishes on cue."],
      },
    },
  },

  
  {
    name: "DJ",
    icon: require("../assets/working_signs/W4_DJ.png"),
    category: "Working Exercises",
    title: "4. Directed Jumping (DJ)",
    
    levels: {
      rookie: {
        procedure: "The exercise begins when the handler engages with the exercise station either to start the exercise or to familiarize their dog with the dog box.<br/>● The team starts the exercise at the handler line between the two jumps,<br/>● The dog sits in heel position until cued,<br/>● The handler sends the dog to the dog box,<br/>● The dog enteres the box and stays within the box as the handler moves to the handler box (the dog is not required to hold a position, only remain in the box).<br/>● The handler cues the dog to take the designated jump,<br/>● The dog comes to sit in front position.<br/>The exercise ends when the dog sits in front position.<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["The dog sits in heel position until cued,", "Moves to the dog box on cue without taking any steps back toward the handler and enters the box headfirst,","Remains in the dog box until cued to jump,", "Jumps the correct jump as designated by the judge,","Returns to the handler to sit in front position"],
      },
      elite: {
        procedure: "The exercise begins when the handler engages with the exercise station either to start the exercise or to familiarize their dog with the dog box.<br/>● The team starts the exercise at the handler box,<br/>● The dog sits in heel position until cued,<br/>● The handler sends the dog to the dog box,<br/>● Cues the dog to hold a sit, stand, or down,<br/>● Cues the dog to take the designated jump,<br/>● The dog comes to sit in front position.<br/>The exercise ends when the dog sits in front position.<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["The dog sits in heel position until cued,", "Moves to the dog box on cue without taking any steps back toward the handler and enters the box headfirst,","Maintains the position requested by the handler until cued to jump,", "Jumps the correct jump as designated by the judge,","Returns to the handler to sit in front position."],
      },
      expert: {
        procedure: "The exercise begins when the handler engages with the exercise station either to start the exercise or to familiarize their dog with the dog box.<br/>● The team starts the exercise at the handler box,<br/>● The dog sits in heel position until cued,<br/>● The handler sends the dog to the dog box,<br/>● Cues the dog to hold a sit, stand, or down<br/>● Cues the dog to take the designated jump,<br/>● The dog comes to sit in front position,<br/>● The handler cues the dog to finish.<br/>● Repeats the exercise with the second designated jump,<br/>● The dog comes to sit in front position.<br/>● The handler cues the dog to finish.<br/>The exercise ends when the dog has finished and is sitting in heel position.<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["The dog sits in heel position until cued,", "Moves to the dog box on cue without taking any steps back toward the handler and enters the box headfirst,","Maintains the position requested by the handler until cued to jump,", "Jumps the correct jump as designated by the judge,","Returns to the handler to sit in front position.","Finishes on cue."],
      },
    },
  },


  {
    name: "DR",
    icon: require("../assets/working_signs/W5_DR.png"),
    category: "Working Exercises",
    title: "5. Designated Retrieve (DR)",
    
    levels: {
      rookie: {
        procedure: "<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["", "",""],
      },
      elite: {
        procedure: "<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["", "",""],
      },
      expert: {
        procedure: "<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["", "",""],
      },
    },
  },

  
  {
    name: "BA",
    icon: require("../assets/working_signs/W6_BA.png"),
    category: "Working Exercises",
    title: "6. Back Away (BA)",
    
    levels: {
      rookie: {
        procedure: "<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["", "",""],
      },
      elite: {
        procedure: "<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["", "",""],
      },
      expert: {
        procedure: "<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["", "",""],
      },
    },
  },


  
  {
    name: "RTC",
    icon: require("../assets/working_signs/W7_RTC.png"),
    category: "Working Exercises",
    title: "7. Round The Clock (RTC)",
    
    levels: {
      rookie: {
        procedure: "<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["", "",""],
      },
      elite: {
        procedure: "<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["", "",""],
      },
      expert: {
        procedure: "<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["", "",""],
      },
    },
  },


  
  {
    name: "DS",
    icon: require("../assets/working_signs/W8_DS.png"),
    category: "Working Exercises",
    title: "8. Distance Signals (DS)",
    
    levels: {
      rookie: {
        procedure: "<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["", "",""],
      },
      elite: {
        procedure: "<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["", "",""],
      },
      expert: {
        procedure: "<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["", "",""],
      },
    },
  },


  
  {
    name: "ROJ",
    icon: require("../assets/working_signs/W9_ROJ.png"),
    category: "Working Exercises",
    title: "9. Retrieve Over Jump (ROJ)",
    
    levels: {
      rookie: {
        procedure: "<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["", "",""],
      },
      elite: {
        procedure: "<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["", "",""],
      },
      expert: {
        procedure: "<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["", "",""],
      },
    },
  },


  
  {
    name: "SD",
    icon: require("../assets/working_signs/W10_SD.png"),
    category: "Working Exercises",
    title: "10. Scent Discrimination (SD)",
    
    levels: {
      rookie: {
        procedure: "<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["", "",""],
      },
      elite: {
        procedure: "<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["", "",""],
      },
      expert: {
        procedure: "<br/><br/>",
        procedureImages: [],
        layout: "",
        layoutImages: [],
        passRequirements: ["", "",""],
      },
    },
  },


]};

export default Working;
