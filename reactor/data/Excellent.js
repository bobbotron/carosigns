const Excellent = {
  name: "Excellent",
  type: "normal",
  signs: [
  {
    name: "300",
    icon: require("../assets/slides/300.jpg"),
    title: "300. HALT - Stand - Down",
    description:
      "• While heeling, the team comes to a <b>halt</b> and the dog <b>sits in the heel position</b>.<br/>• The handler cues the <b>dog to stand</b>.<br/>• The handler cues the <b>dog to down</b>.<br/>• The handler cues the dog to <b>heel forward from the down position</b>.",
    deductions: {
      minor: [
        "Dog sits, stands or downs more than 45-degrees out of heel position (per occurrence)",
        "Handler moves their feet during the stationary portion of the halt",
      ],
      nq: [
        "Dog sits, stands or downs 90-degrees or more out of heel position",
        "Failure of the dog to assume a cued position",
        "Dog assumes a position not required by the exercise",
        "Handler touches the dog to put them into a position",
      ],
    },
    video: undefined,
  },
  {
    name: "301",
    icon: require("../assets/slides/301.jpg"),
    title: "301. HALT - Stand - Sit",
    description:
      "• While heeling, the team comes to a <b>halt</b> and the dog <b>sits in the heel position</b>.<br/>• The handler cues the <b>dog to stand</b>.<br/>• The handler cues the <b>dog to sit</b>.<br/>• The handler cues the dog to <b>heel forward from the down position</b>.",
    deductions: {
      minor: [
        "Dog sits or stands more than 45-degrees out of heel position (per occurrence)",
        "Handler moves their feet during the stationary portion of the halt",
      ],
      nq: [
        "Dog sits or stands 90-degrees or more out of heel position",
        "Failure of the dog to assume a cued position",
        "Dog assumes a position not required by the exercise",
        "Handler touches the dog to put them into a position",
      ],
    },
    video: undefined,
  },
  {
    name: "302",
    icon: require("../assets/slides/302.jpg"),
    title: "302. Moving Stand, Walk Around",
    description:
      "• While heeling, the handler cues the <b>dog to stand and without pausing walks around the dog from head to tail</b> returning to heel position.<br/>• The handler remains within arm's length of the dog throughout the exercise.<br/>• The handler may choose to pause upon returning to heel position before heeling away from the station.<br/>• The handler cues the dog to <b>heel forward from the stand position</b>.<br/><br/>",
    tips: "• The handler's path should flow smoothly and without stopping from heel position, around the dog from head to tail and back into heel position, remaining within an arm's length from their dog.",
      deductions: {
      minor: [
        "Dog stands more than 45-degrees out of heel position",
        "Handler is further than arm's length during the walk around",
      ],

      substantial: [
        "Handler significantly slows their pace during moving position change",
        "Failure of the dog to assume the requested position promptly",
      ],

      nq: [
        "Dog stands 90-degrees or more out of heel position",
        "Handler stops forward motion at any point before they have completed the walk around and returned to heel position",
        "Dog does not hold the stand (eg. turns with the handler as the walk around is performed)",
        "Dog assumes a position not required by the exercise (eg. sits)",
      ],
    },
    video: undefined,
  },
  {
    name: "303",
    icon: require("../assets/slides/303.jpg"),
    title: "303. Moving Stand Call to Heel",
        description:
      "• While heeling, the handler cues the <b>dog to stand and without pausing continues forward.<br/>• The dog must hold the stand until called.<br/>• After the handler has completely passed over the 5-foot line and while continuing to walk</b>, the handler calls the dog to heel and the team continues to the next station.<br/>• <b>The dog must be in heel position before the team arrives at the next station.</b><br/><br/>",
    tips: "• The handler's path should flow smoothly and without stopping from heel position, past the 5-foot line and until the dog is called back to heel position.<br/>• While you may take additional steps past the 5-foot line before calling the dog back to heel position, ensure you have left enough space for them to be back in heel before reach the next station sign.",
      deductions: {
      minor: ["Dog stands more than 45-degrees out of heel position"],

      substantial: [
        "Handler significantly slows their pace on moving position change exercises",
        "Failure of the dog to assume the requested position promptly",
      ],

      nq: [
        "Dog stands 90-degrees or more out of heel position",
        "Handler stops forward motion",
        "Handler calls the dog to heel before crossing the 5-foot line",
        "Dog does not hold the stand",
        "Dog not in heel position before reaching the next station sign",
        "Dog assumes a position not required by the exercise",
      ],
    },
    video: undefined,
  },
  {
    name: "304",
    icon: require("../assets/slides/304.jpg"),
    title: "304. Moving Down Call to Heel",
    description:
      "• While heeling, the handler cues the <b>dog to down and without pausing continues forward.<br/>• The dog must hold the down until called.<br/>• After the handler has completely passed over the 5-foot line and while continuing to walk</b>, the handler calls the dog to heel and the team continues to the next station.<br/>• <b>The dog must be in heel position before the team arrives at the next station.</b><br/><br/>",
    tips: "• The handler's path should flow smoothly and without stopping from heel position, past the 5-foot line and until the dog is called back to heel position.<br/>• While you may take additional steps past the 5-foot line before calling the dog back to heel position, ensure you have left enough space for them to be back in heel before reach the next station sign.",
    deductions: {
      minor: ["Dog downs more than 45-degrees out of heel position"],

      substantial: [
        "Handler significantly slows their pace",
        "Failure of the dog to assume the down promptly",
      ],

      nq: [
        "Dog downs 90-degrees or more out of heel position",
        "Dog does not complete the down before being called to heel position",
        "Dog does not hold the down until called to heel position",
        "Handler stops forward motion at any point",
        "Dog not in heel position by the time the handler arrives at the next station",
        "Dog assumes a position not required by the exercise",
      ],
    },
    video: undefined,
  },
  {
    name: "305",
    icon: require("../assets/slides/305.jpg"),
    title: "305. Back Up 3 Steps",
    description:
      "• While heeling, the handler will cue the dog to heel backwards.<br/>• The handler will <b>walk backwards continuously a minimum of 3 complete steps with the dog moving simultaneously and remaining in heel position parallel to the handler</b>.<br/><br/>",
    tips: "• Three complete steps are required. This means that the third step can't consist of rocking back on one foot and heeling forward. Rather, both feet must move backwards for the final step.<br/>• If in doubt, take additional steps, as there are no deductions for additional steps or the dog being out of position once the three steps have been completed (only the first 3 steps are judged).",
    deductions: {
      minor: [
        "Dog backs up at an angle of up to 45-degrees out of alignment",
        "Dog's shoulders in heel position but their body at a 45-degree angle (2 points)",
      ],
      nq: [
        "Handler does not take 3 complete steps backwards",
        "Dog does not move simultaneously with the handler",
        "Dog not in heel position",
        "Dog's shoulders in heel position but their body at a greater than 45-degree angle",
      ],
    },
    video: undefined,
  },
  {
    name: "306",
    icon: require("../assets/slides/306.jpg"),
    title: "306. HALT - Stand - Leave",
    description:
      "• The team comes to a <b>halt</b> and the <b>dog sits in heel position</b>.<br/>• The handler cues the <b>dog to stand</b>.<br/>• The handler cues the dog to <b>stay, walks forward 5 feet</b> to one of station signs 307, 308, 309 or 310 and <b>turns to face the dog</b>.<br/><br/>",
    tips: "• There is no deduction for slight paw movement.<br/>• This is not a stand alone sign.",
    deductions: {
      minor: [
        "Dog sits or stands more than 45-degrees out of heel position (per occurrence)",
        "Handler moves their feet during the stationary portion of the halt",
      ],
      nq: [
        "Dog sits, stands or downs 90-degrees or more out of heel position",
        "Dog does not hold the stand until cued to change positions (minor paw movement ok)",
        "Handler does not walk past the 5-foot line or turn to face the dog",
        "Failure of the dog to assume a cued position",
        "Dog assumes a position not required by the exercise",
        "Handler touches the dog to put them into a position",
      ],
    },
    video: undefined,
  },
  {
    name: "307",
    icon: require("../assets/slides/307.jpg"),
    title: "307. Sit - Return to Heel",
    description:
      "• The handler cues the <b>dog to sit directly from the stand</b>.<br/>• The <b>handler returns to heel position by walking around the dog and back to heel.</b><br/>• The dog <b>must remain in a sit</b> until cued to heel.<br/>• The handler may choose to pause upon returning to heel position before heeling away from the station.<br/>• The handler cues the dog to <b>heel forward from the sit position</b>.<br/><br/>",
    tips: "• This is not a stand alone station. It will always follow station 306.",
    deductions: {
      minor: ["Dog slow to respond"],
      nq: [
        "Dog does not sit in place when cued",
        "Dog does not hold the sit until cued to heel forward",
        "Dog assumes a position not required by the exercise",
      ],
    },
    video: undefined,
  },
  {
    name: "308",
    icon: require("../assets/slides/308.jpg"),
    title: "308. Down - Return to Heel",
    description:
      "• The handler cues the <b>dog to down directly from the stand</b>.<br/>• The <b>handler returns to heel position by walking around the dog and back to heel.</b><br/>• The dog <b>must remain in a down</b> until cued to heel.<br/>• The handler may choose to pause upon returning to heel position before heeling away from the station.<br/>• The handler cues the dog to <b>heel forward from the down position</b>.<br/><br/>",
    tips: "• This is not a stand alone station. It will always follow station 306.",
    deductions: {
      minor: ["Dog slow to respond"],
      nq: [
        "Dog does not down in place when cued",
        "Dog does not hold the down until cued to heel forward",
        "Dog assumes a position not required by the exercise",
      ],
    },
    video: undefined,
  },
  {
    name: "309",
    icon: require("../assets/slides/309.jpg"),
    title: "309. Sit - Call to Heel",
    description:
      "• The handler cues the <b>dog to sit directly from the stand</b>.<br/>• The handler calls the <b>dog to return to heel position</b>.<br/>• The dog may return to heel position either directly to heel position or by going around the handler.<br/>• The team <b>heels forward before the dog sits</b>.<br>• This station results in a 180-degree change of direction.<br/><br/>",
    tips: "• This is not a stand alone station. It will always follow station 306.",
    deductions: {
      minor: ["Dog slow to respond"],
      nq: [
        "Dog does not sit in place when cued",
        "Dog does not hold the sit until until cued to heel forward",
        "Dog assumes a position not required by the exercise",
      ],
    },
    video: undefined,
  },
  {
    name: "310",
    icon: require("../assets/slides/310.jpg"),
    title: "310. Down - Call to Heel",
    description:
      "• The handler cues the <b>dog to down directly from the stand</b>.<br/>• The handler calls the <b>dog to return to heel position</b>.<br/>• The dog may return to heel position either directly to heel position or by going around the handler.<br/>• The team <b>heels forward before the dog sits</b>.<br>• This station results in a 180-degree change of direction.<br/><br/>",
    tips: "• This is not a stand alone station. It will always follow station 306.",
    deductions: {
      minor: ["Dog slow to respond"],
      nq: [
        "Dog does not down in place when cued",
        "Dog does not hold the down until until cued to heel forward",
        "Dog assumes a position not required by the exercise",
      ],
    },
    video: undefined,
  },
  {
    name: "311",
    icon: require("../assets/slides/311.jpg"),
    title: "311. Jump",
    description:
      "• The jump may be either a solid or bar jump.<br/>• <b>The team enters the send zone where the dog is sent to the jump.</b><br/>• Once the dog has been sent, the handler may stay in the send zone or proceed along the <b>outside of the 6-foot line</b>.<br/>• Handlers may move at whatever speed they wish.<br/>• <b>The handler must remain on the outside of the 6-foot line when proceeding past the jump.</b><br/>• Upon completion of the jump the dog returns to heel position.<br/>• The dog may be cued to return to heel regardless of where the handler is along the line of travel.<br/><br/>",
    tips: "• Be careful not to step in the NQ zone! No retry is permitted if the handler steps into the NQ Zone.<br/>• Once the dog has taken the jump, they may be called back to heel position by the handler.<br/>• Once the dog has been sent to the jump, the handler may stay in the send zone or proceed along the outside of the 6-foot line. Handlers may give multiple jump cues to the dog as long as the dog is heading towards the jump. If the dog turns back to the handler or passes the plane of the jump the handler must return to the send zone for a retry.<br/>• The Handler is not required to run. Handlers may move at whatever speed they wish.<br/>• Note that the Excellent-level jump is identical to the Advanced-level jump except that the lateral distance is 6 feet instead of 3 feet.<br/>• At least two agility-type obstacles are used in every Excellent level course.",
    deductions: {
      minor: ["Out of Heel position approaching the jump"],
      substantial: ["Dog touches the jump (5 points)"],
      nq: [
        "Initiating the send to the jump outside of the send zone",
        "Handler steps inside the NQ Zone at any time",
        "Dog knocks off the bar or pushes off the jump",
        "Dog fails to take the obstacle or takes it in the incorrect direction",
        "Dog goes past the plane of the obstacle",
      ],
    },
    video: undefined,
  },
  {
    name: "312",
    icon: require("../assets/slides/312.jpg"),
    title: "312. Broad Jump",
    description:
      "• <b>The team enters the send zone where the dog is sent to the jump.</b><br/>• Once the dog has been sent, the handler may stay in the send zone or proceed along the <b>outside of the 3-foot line</b>.<br/>• Handlers may move at whatever speed they wish.<br/>• <b>The handler must remain on the outside of the 3-foot line when proceeding past the jump.</b><br/>• Upon completion of the jump the dog returns to heel position.<br/>• The dog may be cued to return to heel regardless of where the handler is along the line of travel.<br/><br/>",
    tips: "• The broad jump is not used in virtual trials<br/>• Be careful not to step in the NQ zone! No retry is permitted if the handler steps into the NQ Zone.<br/>• Once the dog has taken the jump, they may be called back to heel position by the handler.<br/>• Once the dog has been sent to the jump, the handler may stay in the send zone or proceed along the outside of the 3-foot line. Handler may give a second cue to the dog as long as the dog is heading towards the obstacle. If the dog turns back to the handler or passes the plane of the jump the handler must return to the send zone for a retry.<br/>• The Handler is not required to run. Handlers may move at whatever speed they wish.<br/>• At least two agility-type obstacles are used in every Excellent level course.",
    deductions: {
      minor: ["Out of heel position approaching the broad jump"],
      substantial: ["Dog touches the broad jump (5 points)"],
      nq: [
        "Initiating the send to the obstacle outside of the send zone",
        "Handler steps inside the NQ Zone at any time",
        "Dog steps on the broad jump boards",
        "Dog fails to take the obstacle or takes it in the incorrect direction",
        "Dog goes past the plane of the obstacle",
      ],
    },
    video: undefined,
  },
  {
    name: "313",
    icon: require("../assets/slides/313.jpg"),
    title: "313. Tunnel",
    description:
      "• <b>The team enters the send zone where the dog is sent to the tunnel</b>.<br/>• Once the dog has been sent, the handler may stay in the send zone or proceed along the <b>outside of the 6-foot line</b>.<br/>• Handlers may move at whatever speed they wish.<br/>• <b>The handler must remain on the outside of the 6-foot line when proceeding past the tunnel</b>.<br/>• Upon completion of the tunnel the dog returns to heel position.<br/>• The dog may be cued to return to heel regardless of where the handler is along the line of travel.<br/><br/>",
    tips: "• The tunnel will always be straight (not curved).<br/>• At least two agility-type obstacles are used in every Excellent level course.",
    deductions: {
      minor: ["Out of heel position approaching the tunnel"],
      nq: [
        "Initiating the send to the obstacle outside of the send zone",
        "Handler steps inside the NQ Zone at any time",
        "Dog fails to take the obstacle",
        "Dog goes past the plane of the obstacle",
      ],
    },
    video: undefined,
  },
  {
    name: "314",
    icon: require("../assets/slides/314.jpg"),
    title: "314. Weave Poles",
    description:
      "• While heeling, the team <b>enters the weave poles with the first pole on the team’s left</b>.<br/>• The dog <b>weaves through the poles</b> and exits the station.<br/>• For this station to be considered complete, <b>the dog must weave through all the poles in the correct pattern</b>.<br/><br/>",
    tips: "• The handler may provide ongoing verbal and/or physical cues to the dog to continue the weave pattern without deductions if the dog continues to weave.<br/>• If the dog has left the weave poles and is sent back in at the point of exit, it will be considered an additional cue.<br/>• At least two agility-type obstacles are used in every Excellent level course.",
    deductions: {
      minor: [
        "Out of heel position approaching the weaves","If the dog leaves the weave pattern and is cued to return to the point of exit to continue the pattern a deduction for additional cues will be applied",
      ],
      nq: [
        "Dog fails to enter the weave poles correctly",
        "Dog fails to complete the weave pattern",
      ],
    },
    video: undefined,
  },
]};

export default Excellent;
