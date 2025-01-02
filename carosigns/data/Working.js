const Working = {
  name: "Working Exercises",
  type: "working",
  buttonColor: "blue",
  signs: [
    {
      name: "DOR",
      icon: require("../../assets/working_signs/DOR.jpg"),
      title: "1. Drop on Recall (DOR)",
      levels: {
        rookie: {
          procedure:
            "The exercise begins when the handler steps into the dog box.<br/><br/>• The handler cues the dog to sit in heel position,<br/>• Cues the dog to stay, proceeds to the handler box and turns to face the dog,<br/>• Calls the dog and then cues the following sequence:<br/>&nbsp;&nbsp; - Down between the 10-foot and 15-foot lines,<br/>&nbsp;&nbsp; - Call to sit in front position.<br/><br/>The exercise ends when the dog sits in front position<br/><br/>",
          procedureImages: [],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/DOR_Rookie.jpg")],
          passRequirements: [
            "The dog starts in heel position,",
            "Stays in position (sit then down) until cued to move,",
            "Moves directly towards the handler until cued to perform another behaviour,",
            "Has front paws within the designated zone when assuming a position,",
            "Comes to sit in front position.",
          ],
        },
        elite: {
          procedure:
            "The exercise begins when the handler steps into the dog box.<br/><br/>• The handler cues the dog to sit in heel position,<br/>• Cues the dog to stay, proceeds to the handler box and turns to face the dog,<br/>• Calls the dog and then cues the following sequence:<br/>&nbsp;&nbsp; - Down between the 10-foot and 15-foot lines,<br/>&nbsp;&nbsp; - Come forward,<br/>&nbsp;&nbsp; - Sit between the 5-foot and 10-foot lines,<br/>&nbsp;&nbsp; - Call to sit in front position.<br/><br/>The exercise ends when the dog sits in front position.<br/><br/>",
          procedureImages: [],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/DOR_Elite.jpg")],
          passRequirements: [
            "The dog starts in heel position,",
            "Stays in position (sit, down then sit) until cued to move,",
            "Moves directly towards the handler until cued to perform another behaviour,",
            "Has front paws within the designated zone when assuming a position,",
            "Comes to sit in front position.",
          ],
        },

        expert: {
          procedure:
            "The exercise begins when the handler steps into the dog box.<br/><br/>• The handler cues the dog to sit in heel position,<br/>• Cues the dog to stay, proceeds to the handler box and turns to face the dog,<br/>• Calls the dog and then cues the following sequence:<br/>&nbsp;&nbsp; - Down between the 10-foot and 15-foot lines,<br/>&nbsp;&nbsp; - Sit from the down positions,<br/>&nbsp;&nbsp; - Come forward,<br/>&nbsp;&nbsp; - Stand between the 5-foot and 10-foot lines,<br/>&nbsp;&nbsp; - Call to sit in front position,<br/>&nbsp;&nbsp; - Finish and sit in heel position<br/><br/>The exercise ends when the dog sits in heel position.<br/><br/>",
          procedureImages: [],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/DOR_Expert.jpg")],
          passRequirements: [
            "The dog starts in heel position,",
            "Stays in position (sit, down, sit, then stand) until cued to move,",
            "Moves directly towards the handler until cued to perform another behaviour,",
            "Has front paws within the designated zone when assuming a position,",
            "Comes to front position,",
            "Finishes on cue.",
          ],
        },
      },
    },
    {
      name: "ROF",
      icon: require("../../assets/working_signs/ROF.jpg"),
      title: "2. Retrieve on Flat",
      levels: {
        rookie: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/><br/>• The handler cues the dog to sit in heel position,<br/>• Throws the object at least 5ft,<br/>• Cues the dog to retrieve the object when it has stopped moving.<br/>• Cues the dog to sit in front position holding the object,<br/>•	The dog remains sitting in front position while the handler takes the object directly from the dog.<br/><br/>The exercise ends when the handler has taken the object from the dog.<br/><br/>",
          procedureImages: [],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/ROF_allLevels.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "Maintains sitting in heel position while the handler throws the object atleast 5ft and it has stopped moving,",
            "Retrieves the object on cue,",
            "Returns to the handler to sit in front position,",
            "Remains sitting in front position while the handler takes the object directly from the dog.",
          ],
        },
        elite: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/><br/>• The handler cues the dog to sit in heel position,<br/>• Throws the object at least 10ft,<br/>• Cues the dog to retrieve the object when it has stopped moving.<br/>• Cues the dog to sit in front position holding the object,<br/>•	The dog remains sitting in front position while the handler takes the object directly from the dog.<br/><br/>The exercise ends when the handler has taken the object from the dog.<br/><br/>",
          procedureImages: [],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/ROF_allLevels.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "Maintains sitting in heel position while the handler throws the object at least 10ft and it has stopped moving,",
            "Retrieves the object on cue,",
            "Returns to the handler to sit in front position,",
            "Remains sitting in front position while the handler takes the object directly from the dog.",
          ],
        },
        expert: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/><br/>• The handler cues the dog to sit in heel position,<br/>• Throws the object at least 10ft,<br/>• After the object has stopped moving, cues the dog to down in heel position,<br/>• Cues the dog to sit in front position holding the object,<br/>•	The dog remains sitting in front position while the handler takes the object directly from the dog.<br/>•	The handler cues the dog to finish and sit in heel position.<br/><br/>The exercise ends when the dog has finished and is sitting in heel position.<br/><br/>",
          procedureImages: [],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/ROF_allLevels.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "Maintains sitting in heel position while the handler throws the object atleast 10ft and it has stopped moving,",
            "Downs in heel position on cue,",
            "Retrieves the object on cue,",
            "Returns to the handler to sit in front position,",
            "Remains sitting in front position while the handler takes the object directly from the dog.",
            "Finishes on cue.",
          ],
        },
      },
    },

    {
      name: "BR",
      icon: require("../../assets/working_signs/BR.jpg"),
      title: "3. Barrel Racing (BR)",
      levels: {
        rookie: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/><br/>• The handler cues the dog to sit in heel position,<br/>• Sends the dog through one of the two possible patterns as depicted below,<br/>• Calls the dog to sit in front position.<br/><br/>The exercise ends when the dog sits in front position.<br/><br/>",
          procedureImages: [require("../../assets/Diagrams/BR_Layout.jpg")],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/BR_Rookie.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "Circles the cones in the correct order and direction as illustrated below,",
            "Returns to the handler to sit in front position.",
          ],
        },
        elite: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/><br/>• The handler cues the dog to sit in heel position,<br/>• Sends the dog through one of the two possible patterns as depicted below,<br/>• Calls the dog to sit in front position.<br/><br/>The exercise ends when the dog sits in front position.<br/><br/><br/>",
          procedureImages: [require("../../assets/Diagrams/BR_Layout.jpg")],
          layout: "",
          // TODO - does not exist?
          layoutImages: [require("../../assets/Diagrams/BR_Elite.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "Circles the cones in the correct order and direction as illustrated below,",
            "Returns to the handler to sit in front position.",
          ],
        },
        expert: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/><br/>• The handler cues the dog to sit in heel position,<br/>• Sends the dog through one of the two possible patterns as depicted below,<br/>• Calls the dog to sit in front position.<br/>• Cues the dog to finish.<br/><br/>The exercise ends when the dog sits in front position for Rookie.<br/><br/><br/>",
          procedureImages: [require("../../assets/Diagrams/BR_Layout.jpg")],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/BR_Expert.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "Circles the cones in the correct order and direction as illustrated below,",
            "Returns to the handler to sit in front position,",
            "Finishes on cue.",
          ],
        },
      },
    },

    {
      name: "DJ",
      icon: require("../../assets/working_signs/DJ.jpg"),
      title: "4. Directed Jumping (DJ)",
      levels: {
        rookie: {
          procedure:
            "The exercise begins when the handler engages with the exercise station either to start the exercise or to familiarize their dog with the dog box.<br/><br/>• The team starts the exercise at the handler line between the two jumps,<br/>• The dog sits in heel position until cued,<br/>• The handler sends the dog to the dog box,<br/>• The dog enteres the box and stays within the box as the handler moves to the handler box (the dog is not required to hold a position, only remain in the box).<br/>• The handler cues the dog to take the designated jump,<br/>• The dog comes to sit in front position.<br/><br/>The exercise ends when the dog sits in front position.<br/><br/>",
          procedureImages: [],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/DJ_Rookie.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "Moves to the dog box on cue without taking any steps back toward the handler and enters the box headfirst,",
            "Remains in the dog box until cued to jump,",
            "Jumps the correct jump as designated by the judge,",
            "Returns to the handler to sit in front position.",
          ],
        },
        elite: {
          procedure:
            "The exercise begins when the handler engages with the exercise station either to start the exercise or to familiarize their dog with the dog box.<br/><br/>• The team starts the exercise at the handler box,<br/>• The dog sits in heel position until cued,<br/>• The handler sends the dog to the dog box,<br/>• Cues the dog to hold a sit, stand, or down,<br/>• Cues the dog to take the designated jump,<br/>• The dog comes to sit in front position.<br/><br/>The exercise ends when the dog sits in front position.<br/><br/>",
          procedureImages: [],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/DJ_EliteExpert.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "Moves to the dog box on cue without taking any steps back toward the handler and enters the box headfirst,",
            "Maintains the position requested by the handler until cued to jump,",
            "Jumps the correct jump as designated by the judge,",
            "Returns to the handler to sit in front position.",
          ],
        },
        expert: {
          procedure:
            "The exercise begins when the handler engages with the exercise station either to start the exercise or to familiarize their dog with the dog box.<br/><br/>• The team starts the exercise at the handler box,<br/>• The dog sits in heel position until cued,<br/>• The handler sends the dog to the dog box,<br/>• Cues the dog to hold a sit, stand, or down<br/>• Cues the dog to take the designated jump,<br/>• The dog comes to sit in front position,<br/>• The handler cues the dog to finish.<br/>• Repeats the exercise with the second designated jump,<br/>• The dog comes to sit in front position.<br/>• The handler cues the dog to finish.<br/><br/>The exercise ends when the dog has finished and is sitting in heel position.<br/><br/>",
          procedureImages: [],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/DJ_EliteExpert.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "Moves to the dog box on cue without taking any steps back toward the handler and enters the box headfirst,",
            "Maintains the position requested by the handler until cued to jump,",
            "Jumps the correct jump as designated by the judge,",
            "Returns to the handler to sit in front position.",
            "Finishes on cue.",
          ],
        },
      },
    },

    {
      name: "DR",
      icon: require("../../assets/working_signs/DR.jpg"),
      title: "5. Designated Retrieve (DR)",
      limitedCues: true,
      levels: {
        rookie: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/><br/>• The handler cues the dog to sit in heel position.<br/>• The Steward or Judge will place the objects as required.<br/>• The handler cues the dog to retrieve the designated object.<br/>• The handler may give cues and encouragement until the dog reaches the line of the objects.<br/>• The handler may not give cues or encouragement of any kind while the dog is at the objects.<br/>• Cues and encouragement may be given after the dog has picked up an object and is returning to the handler.<br/>• The handler cues the dog to sit in front position holding the object.<br/>• The dog remains sitting in front position while the handler takes the object directly from the dog.<br/><br/>The exercise ends when the handler takes the object from the dog.<br/><br/>",
          procedureImages: [],
          layout:
            "• All objects are placed as indicated on a line 10ft from the handler and 3ft apart from each other.<br/>• The object to retrieve will have been designated by the Judge.",
          layoutImages: [require("../../assets/Diagrams/DR_Rookie.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "Retrieves the correct object,",
            "Sits in front position,",
            "Remains sitting in front position while the handler takes the object directly from the dog.",
          ],
        },
        elite: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/><br/>• The handler cues the dog to sit in heel position.<br/>• The Steward or Judge will place the objects as required.<br/>• The handler cues the dog to retrieve the designated object.<br/>• The handler may give cues and encouragement until the dog reaches the line of the objects.<br/>• The handler may not give cues or encouragement of any kind while the dog is at the objects.<br/>• Cues and encouragement may be given after the dog has picked up an object and is returning to the handler.<br/>• The handler cues the dog to sit in front position holding the object.<br/>• The dog remains sitting in front position while the handler takes the object directly from the dog.<br/><br/>The exercise ends when the handler takes the object from the dog.<br/><br/>",
          procedureImages: [],
          layout:
            "• All objects are placed as indicated on a line 10ft from the handler and 3ft apart from each other.<br/>• The object to retrieve will have been designated by the Judge.",
          layoutImages: [require("../../assets/Diagrams/DR_Elite.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "Retrieves the correct object,",
            "Sits in front position,",
            "Remains sitting in front position while the handler takes the object directly from the dog",
          ],
        },

        expert: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/><br/>• The handler cues the dog to sit in heel position.<br/>• The Steward or Judge will place the objects as required.<br/>• The handler cues the dog to retrieve the designated object.<br/>• The handler may give cues and encouragement until the dog reaches the line of the objects.<br/>• The handler may not give cues or encouragement of any kind while the dog is at the objects.<br/>• Cues and encouragement may be given after the dog has picked up an object and is returning to the handler.<br/>• The handler cues the dog to sit in front position holding the object.<br/>• The dog remains sitting in front position while the handler takes the object directly from the dog.<br/>• The handler dues the dog to finish.<br/><br/>The exercise ends when the dog has finished and is sitting in heel position.<br/><br/>",
          procedureImages: [],
          layout:
            "• All objects are placed as indicated on a line 10ft from the handler and 3ft apart from each other.<br/>• The object to retrieve will have been designated by the Judge.",
          layoutImages: [require("../../assets/Diagrams/DR_Expert.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "Retrieves the correct object,",
            "Sits in front position,",
            "Remains sitting in front position while the handler takes the object directly from the dog,",
            "Finishes on cue.",
          ],
        },
      },
    },
    {
      name: "BA",
      icon: require("../../assets/working_signs/BA.jpg"),
      title: "6. Back Away (BA)",
      levels: {
        rookie: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/><br/>• The handler may choose to walk to the dog box to familiarize the dog with it.<br/>• The handler stands in the handler box with the dog facing them, either sitting or standing, in front position.<br/>• The handler cues the dog to back up to the dog box (5ft) until the front paws of the dog are behind the front plane of the box.<br/><br/>The exercise ends when the front paws of the dog are behind the front line of the dog box.<br/><br/>",
          procedureImages: [],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/BA_Rookie.jpg")],
          passRequirements: [
            "The dog sits or stands in front of the handler box facing the handler,",
            "When cued by the handler, moves backwards to the dog box without taking any steps back toward the handler,",
            "Fully enters the dog box with front paws behind the front plane of the dog box.",
          ],
        },
        elite: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/><br/>• The handler may choose to walk to the dog box to familiarize the dog with it.<br/>• The handler stands in the handler box with the dog facing them, either sitting or standing, in front position.<br/>• The handler cues the dog to back up to the dog box (10ft) until the front paws of the dog are behind the front plane of the box.<br/><br/>The exercise ends when the front paws of the dog are behind the front line of the dog box.<br/><br/>",
          procedureImages: [],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/BA_Elite.jpg")],
          passRequirements: [
            "The dog sits or stands in front of the handler box facing the handler,",
            "When cued by the handler, moves backwards to the dog box without taking any steps back toward the handler,",
            "Fully enters the dog box with front paws behind the front plane of the dog box.",
          ],
        },
        expert: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/><br/>• The handler may choose to walk to the dog box to familiarize the dog with it.<br/>• The dog starts facing the handler, sitting or standing, in front position,<br/>• The handler cues the dog to back up to the dog box until the front paws have passed the 5ft line,<br/>• The handler cues the dog to perform either a sit, down, spin left or spin right,<br/>• The handler cues the dog to continue to back up to the dog box until the front paws of the dog are behind the front plane of the box.<br/><br/>The exercise ends when the front paws of the dog are behind the front line of the dog box.<br/><br/>",
          procedureImages: [],
          layout:
            "• The dog box is 15 feet total away from the handler box or handler line.<br/>• A sit is performed at a 5ft line (two cones may be used in place of a line).",
          layoutImages: [require("../../assets/Diagrams/BA_Expert.jpg")],
          passRequirements: [
            "The dog sits or stands in front of the handler box facing the handler,",
            "When cued by the handler, moves backwards to the dog box without taking any steps back toward the handler,",
            "Performs the requested behaviour after the 5ft line,",
            "Fully enters the dog box with front paws behind the front plane of the dog box.",
          ],
        },
      },
    },

    {
      name: "RTC",
      icon: require("../../assets/working_signs/RTC.jpg"),
      title: "7. Round The Clock (RTC)",
      levels: {
        rookie: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/>• The handler cues the dog to sit in heel position,<br/>• The handler cues the dog to circle the 3 cones designated by the judge, in any order.<br/>• Dogs may circle a cone in either a clockwise or counter-clockwise direction,<br/>• No cone should be circled more than once.<br/>• After circling each required cone, the dog returns to within an arm's length of the handler.<br/>• The dog comes to sit in front position.<br/><br/>The exercise ends when the dog sits in front position.<br/><br/>",
          procedureImages: [],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/RTC_Elite.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "Circles the required cones as directed by the handler,",
            "Circles each required cone only once,",
            "Returns to within an arm’s length of the handler after circling each cone,",
            "Sits in front position.",
          ],
        },
        elite: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/>• The handler cues the dog to sit in heel position,<br/>• The handler cues the dog to circle the cones 4 designated by the judge, in any order.<br/>• Dogs may circle a cone in either a clockwise or counter-clockwise direction,<br/>• No cone should be circled more than once.<br/>• After circling each required cone, the dog returns to within an arm's length of the handler.<br/>• The dog comes to sit in front position.<br/><br/>The exercise ends when the dog sits in front position.<br/><br/>",
          procedureImages: [],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/RTC_Elite.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "Circles the required cones as directed by the handler,",
            "Circles each required cone only once,",
            "Returns to within an arm’s length of the handler after circling each cone,",
            "Sits in front position.",
          ],
        },
        expert: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/>• The handler cues the dog to sit in heel position,<br/>• The handler cues the dog to circle all 6 cones, in numerical order, starting with cone #1.<br/>• Dogs may circle a cone in either a clockwise or counter-clockwise direction,<br/>• No cone should be circled more than once.<br/>• After circling each required cone, the dog returns to within an arm's length of the handler.<br/>• The dog comes to sit in front position.<br/>• The handler cues the dog to finish.<br/><br/>The exercise ends when the dog has finished and is sitting in heel position.<br/><br/>",
          procedureImages: [],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/RTC_Elite.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "Circles the required cones as directed by the handler,",
            "Circles each required cone only once,",
            "Returns to within an arm’s length of the handler after circling each cone,",
            "Sits in front position,",
            "Finishes on cue.",
          ],
        },
      },
    },

    {
      name: "DS",
      icon: require("../../assets/working_signs/DS.jpg"),
      title: "8. Distance Signals (DS)",
      limitedCues: true,
      levels: {
        rookie: {
          procedure:
            "The sequence of behaviours will be designated by the Judge from the lists below:<br/>&nbsp;&nbsp; 1. Stand - Down - Sit<br/>&nbsp;&nbsp; 2. Stand - Sit - Down<br/>&nbsp;&nbsp; 3. Down - Stand - Sit<br/>&nbsp;&nbsp; 4. Down - Sit - Stand<br/><br>The exercise begins when the handler and dog step into the dog box. Once the dog enters the dog box, the handler may only use silent cues.<br/><br/>• The handler cues the dog to sit in heel position,<br/>• Cues the dog to stay, walks to the handler box and turns to face the dog,<br/>• Cues the dog to perform the designated sequence of position changes.<br/><br/>The exercise ends when the dog has completed the sequence and is in the box.<br/><br/>Note:<br/>• If the dog steps out of the box while completing the spin it will be allowed if either the dog puts themselves back into the box or, responds to a physical cue from the handler to return to the box. The dog must remain in the box when performing all other behaviours.<br>• For position changes, the handler may cue the dog to back up in the position they are holding before cueing the next change in order to keep the dog in the box.<br/><br/>",
          procedureImages: [],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/DS_Rookie.jpg")],
          passRequirements: [
            "The dog stays in position(s) until cued to move,",
            "Correctly performs the designated sequence,",
            "Responds to physical cues only,",
            "Remains in the box while performing the sequence.",
          ],
        },
        elite: {
          procedure:
            "The sequence of behaviours will be designated by the Judge from the lists below:<br/>&nbsp;&nbsp; 1. Stand - Down - Sit - Stand<br/>&nbsp;&nbsp; 2. Stand - Down - Stand - Spin<br/>&nbsp;&nbsp; 3. Down - Stand - Sit - Stand<br/>&nbsp;&nbsp; 4. Down - Sit - Stand - Spin<br/><br/>The exercise begins when the handler and dog step into the dog box. Once the dog enters the dog box, the handler may only use silent cues.<br/><br/>• The handler cues the dog to sit in heel position,<br/>• Cues the dog to stay, walks to the handler box and turns to face the dog,<br/>• Cues the dog to perform the designated sequence of position changes.<br/><br/>The exercise ends when the dog has completed the sequence and is in the box.<br/><br/>Note:<br/>• If the dog steps out of the box while completing the spin it will be allowed if either the dog puts themselves back into the box or, responds to a physical cue from the handler to return to the box. The dog must remain in the box when performing all other behaviours.<br>• For position changes, the handler may cue the dog to back up in the position they are holding before cueing the next change in order to keep the dog in the box.<br/><br/>",
          procedureImages: [],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/DS_EliteExpert.jpg")],
          passRequirements: [
            "The dog stays in position(s) until cued to move,",
            "Correctly performs the designated sequence,",
            "Responds to physical cues only,",
            "Remains in the box while performing the sequence.",
            "For sequences that end in a spin the dog finishes the sequence fully in the box.",
          ],
        },
        expert: {
          procedure:
            "The sequence of behaviours will be designated by the Judge from the lists below:<br/>&nbsp;&nbsp; 1. Stand - Down - Stand - Sit - Spin<br/>&nbsp;&nbsp; 2. Stand - Sit - Down - Stand - Spin<br/>&nbsp;&nbsp; 3. Down - Sit - Down - Stand - Spin<br/>&nbsp;&nbsp; 4. Down - Sit - Stand - Down - Spin<br/><br/>The exercise begins when the handler and dog step into the dog box. Once the dog enters the dog box, the handler may only use silent cues.<br/><br/>• The handler cues the dog to sit in heel position,<br/>• Cues the dog to stay, walks to the handler box and turns to face the dog,<br/>• Cues the dog to perform the designated sequence of position changes.<br/><br/>The exercise ends when the dog has completed the sequence and is in the box.<br/><br/>Note:<br/>• If the dog steps out of the box while completing the spin it will be allowed if either the dog puts themselves back into the box or, responds to a physical cue from the handler to return to the box. The dog must remain in the box when performing all other behaviours.<br>• For position changes, the handler may cue the dog to back up in the position they are holding before cueing the next change in order to keep the dog in the box.<br/><br/>",
          procedureImages: [],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/DS_EliteExpert.jpg")],
          passRequirements: [
            "The dog stays in position(s) until cued to move,",
            "Correctly performs the designated sequence,",
            "Responds to physical cues only,",
            "Remains in the box while performing the sequence.",
            "For sequences that end in a spin the dog finishes the sequence fully in the box.",
          ],
        },
      },
    },

    {
      name: "ROJ",
      icon: require("../../assets/working_signs/ROJ.jpg"),
      title: "9. Retrieve Over Jump (ROJ)",
      levels: {
        rookie: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/><br/>• The handler cues the dog to sit in heel position,<br/>• Throws the object at least 5 feet past the jump,<br/>• Cues the dog to retrieve the object after it has stopped moving.<br/>• The dog takes the jump, retrieves the object, and returns over the jump to the handler,<br/>• The handler cues the dog to sit in front position holding the object,<br/>• The dog remains sitting in front position while the handler takes the object directly from the dog.<br/><br/>• The exercise ends when the handler has taken the object from the dog.<br/><br/>",
          procedureImages: [],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/ROJ_Rookie.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "The handler waits to cue the retrieve until the object has stopped moving.",
            "When cued, the dog takes the jump and picks up the object,",
            "Returns over the jump carrying the object,",
            "Returns to the handler to sit in front position",
            "Releases the object directly to the handler.",
          ],
        },
        elite: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/><br/>• The handler cues the dog to sit in heel position,<br/>• Throws the object at least 10 feet past the jump,<br/>• Cues the dog to retrieve the object after it has stopped moving.<br/>• The dog takes the jump, retrieves the object, and returns over the jump to the handler,<br/>• The handler cues the dog to sit in front position holding the object,<br/>• The dog remains sitting in front position while the handler takes the object directly from the dog.<br/><br/>• The exercise ends when the handler has taken the object from the dog.<br/><br/>",
          procedureImages: [],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/ROJ_EliteExpert.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "The handler waits to cue the retrieve until the object has stopped moving.",
            "When cued, the dog takes the jump and picks up the object,",
            "Returns over the jump carrying the object,",
            "Returns to the handler to sit in front position",
            "Releases the object directly to the handler.",
          ],
        },
        expert: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/><br/>• The handler cues the dog to sit in heel position,<br/>• Throws the object at least 10 feet past the jump,<br/>• Cues the dog to retrieve the object after it has stopped moving.<br/>• The dog takes the jump, retrieves the object, and returns over the jump to the handler,<br/>• The handler cues the dog to sit in front position holding the object,<br/>• The dog remains sitting in front position while the handler takes the object directly from the dog.<br/>• The handler cues the dog to finish.<br/><br/>• The exercise ends when the dog has finished and is sitting in heel position.<br/><br/>",
          procedureImages: [],
          layout: "",
          layoutImages: [require("../../assets/Diagrams/ROJ_EliteExpert.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "The handler waits to cue the retrieve until the object has stopped moving.",
            "When cued, the dog takes the jump and picks up the object,",
            "Returns over the jump carrying the object,",
            "Returns to the handler to sit in front position",
            "Releases the object directly to the handler,",
            "Finishes on cue.",
          ],
        },
      },
    },

    {
      name: "SD",
      icon: require("../../assets/working_signs/SD.jpg"),
      title: "10. Scent Discrimination (SD)",
      limitedCues: true,
      levels: {
        rookie: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/><br/>• The handler stands in the handler box facing the holding location with the dog sitting in heel position.<br/>• While the handler scents 1 object, the remaining objects are placed as illustrated (see Layout).<br/>• The scented object is then placed by the Judge.<br/>• The judge signals the handler to begin.<br/>• The handler cues the dog to retrieve the object.<br/>• The send may be completed in one of two ways:<br/>&nbsp;&nbsp; 1. The dog turns with the handler to face the objects, sits at heel and is then cued to retrieve, or,:<br/>&nbsp;&nbsp;  2. The dog turns with the handler and the handler cues the retrieve without the dog sitting.<br/>• The handler may give cues until the dog reaches the objects.<br/>• The handler may not give cues of any kind while the dog is at the objects.<br/>• Cues and encouragement may be given after the dog has picked up an object and is returning to the handler.<br/>• The handler cues the dog to front position holding the object,<br/>• The dog remains sitting in front position while the handler takes the object directly from the dog.<br/><br/>The exercise ends when the handler has taken the object from the dog.<br/><br/>",
          procedureImages: [],
          layout:
            "• Objects are approximately 1ft apart from each other.<br/>• The 10ft distance runs from the edge of the handler box or line to the midline between objects locations 2 and 3.",
          layoutImages: [require("../../assets/Diagrams/SD_Rookie.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "Retrieves the correct object,",
            "Comes to sit in front position,",
            "Remains sitting while the handler takes the object.",
          ],
        },
        elite: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/><br/>• The handler stands in the handler box facing the holding location with the dog sitting in heel position.<br/>• While the handler scents 1 object, the remaining objects are placed as illustrated (see Layout).<br/>• The scented object is then placed by the Judge.<br/>• The judge signals the handler to begin.<br/>• The handler cues the dog to retrieve the object.<br/>&nbsp;&nbsp; • The send may be completed in one of two ways:<br/>&nbsp;&nbsp; 1. The dog turns with the handler to face the objects, sits at heel and is then cued to retrieve, or,:<br/>&nbsp;&nbsp;  2. The dog turns with the handler and the handler cues the retrieve without the dog sitting.<br/> • The handler may give cues until the dog reaches the objects.<br/>• The handler may not give cues of any kind while the dog is at the objects.<br/>• Cues and encouragement may be given after the dog has picked up an object and is returning to the handler.<br/>• The handler cues the dog to front position holding the object,<br/>• The dog remains sitting in front position while the handler takes the object directly from the dog.<br/><br/>The exercise ends when the handler has taken the object from the dog.<br/><br/>",
          procedureImages: [],
          layout:
            "• Objects are approximately 1ft apart from each other.<br/>• The 10ft distance runs from the edge of the handler box or line to the midline between objects locations 2 and 3.",
          layoutImages: [require("../../assets/Diagrams/SD_Elite.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "Retrieves the correct object,",
            "Comes to sit in front position,",
            "Remains sitting while the handler takes the object.",
          ],
        },
        expert: {
          procedure:
            "The exercise begins when the handler steps into the handler box.<br/><br/>• The handler stands in the handler box facing the holding location with the dog sitting in heel position.<br/>• While the handler scents 1 object, the remaining objects are placed as illustrated (see Layout).<br/>• The scented object is then placed by the Judge.<br/>• The judge signals the handler to begin.<br/>• The handler cues the dog to retrieve the object.<br/>&nbsp;&nbsp; • The send may be completed in one of two ways:<br/>&nbsp;&nbsp; 1. The dog turns with the handler to face the objects, sits at heel and is then cued to retrieve, or,:<br/>&nbsp;&nbsp;  2. The dog turns with the handler and the handler cues the retrieve without the dog sitting.<br/> • The handler may give cues until the dog reaches the objects.<br/>• The handler may not give cues of any kind while the dog is at the objects.<br/>• Cues and encouragement may be given after the dog has picked up an object and is returning to the handler.<br/>• The handler cues the dog to front position holding the object,<br/>• The dog remains sitting in front position while the handler takes the object directly from the dog.<br/>• The handler cues the dog to finish.<br/><br/>The exercise ends when the dog has returned to heel position.<br/><br/>",
          procedureImages: [],
          layout:
            "• Objects are approximately 1ft apart from each other.<br/>• The 10ft distance runs from the edge of the handler box or line to the midline between objects locations 2 and 3.",
          layoutImages: [require("../../assets/Diagrams/SD_Expert.jpg")],
          passRequirements: [
            "The dog sits in heel position until cued,",
            "Retrieves the correct object,",
            "Comes to sit in front position,",
            "Remains sitting while the handler takes the object,",
            "Finishes on cue.",
          ],
        },
      },
    },
  ],
};

export default Working;
