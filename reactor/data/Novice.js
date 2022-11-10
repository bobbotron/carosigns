import { Text } from "react-native";

const Novice = [
  {
    name: "Start",
    icon: require("../assets/slides/start.jpg"),
    category: "Novice",
    title: "Start",
    description:
      "Start<br/> • While heeling, the <b>team heels past the Start station.</b><br/> • Timing begins.<br/> • There are no other commands from the Judge throughout the course.",
    deductions: {
        minor: ["Initiation of the sign outside of a radius of two feet from the station sign"],
        
      },
  },
  {
    name: "Finish",
    icon: require("../assets/slides/finish.jpg"),
    category: "Novice",
    title: "Finish",
    description:
    "Finish<br/> • While heeling, the <b>team heels past the Finish station.</b><br/> • Timing ends.<br/>",
    deductions: {
      minor: ["Initiation of the sign outside of a radius of two feet from the station sign"],      
    },
   },
  {
    name: "100",
    icon: require("../assets/slides/100.jpg"),
    category: "Novice",
    title: "100. HALT – Stand",
    description: "100. HALT – Stand<br/> • The team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.</b><br/> • The handler cues the dog to <b>stand</b>.<br/> • The handler cues the dog to <b>heel forward from the stand position</b>.<br/>",
    reward: true,
    deductions: {
      minor: [
        "Dog sits or stands more than 45 degrees out of heel position or to the front or rear of handler (no deductions for less than a 45 degree angle)",
        "Handler moves their feet during the stationary portion of the halt",
        "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
      ],
      nq: [
        "Dog sits or stands 90 degrees or more out of heel position",
        "Failure of the dog to assume a cued position",
        "Dog assumes a position not required by the exercise (eg. a down)",
        "Handler touches the dog to put them into a position",
        "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket"
      ],
    },
    video: undefined,
  },
  {
    name: "101",
    icon: require("../assets/slides/101.jpg"),
    category: "Novice",
    title: "101. HALT – Down",
    description: "101. HALT – Down<br/> • The team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.</b><br/> • The handler cues the dog to <b>down</b>.<br/> • The handler cues the dog to <b>heel forward from the down position</b>.<br/>",
    reward: true,
    deductions: {
      minor: [
        "Dog sits or downs more than 45 degrees out of heel position or to the front or rear of handler (no deductions for less than a 45 degree angle)",
        "Handler moves their feet during the stationary portion of the halt",
        "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
      ],
      nq: [
        "Dog sits or downs 90 degrees or more out of heel position",
        "Failure of the dog to assume a cued position",
        "Dog assumes a position not required by the exercise (eg. a stand between the sit and down)",
        "Dog not in a down when cued to heel forward",
        "Handler touches the dog to put them into a position",
        "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket"
      ],
    },
  },
  {
    name: "102",
    icon: require("../assets/slides/102.jpg"),
    category: "Novice",
    title: "102. HALT – Down - Sit",
    description: "102. HALT – Down - Sit<br/> • The team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.</b><br/> • The handler cues the dog to <b>down</b>.<br/> • The handler cues the dog to <b>sit</b>.<br/> • The handler cues the dog to <b>heel forward from the sit position</b>.<br/>",
    reward: true,
    deductions: {
      minor: [
        "Dog sits or downs more than 45 degrees out of heel position or to the front or rear of handler (no deductions for less than a 45 degree angle)",
        "Handler moves their feet during the stationary portion of the halt",
        "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
      ],
      nq: [
        "Dog sits or downs 90 degrees or more out of heel position",
        "Failure of the dog to assume a cued position",
        "Dog assumes a position not required by the exercise (eg. a stand between the sit and down)",
        "Dog not in a sit when cued to heel forward",
        "Handler touches the dog to put them into a position",
        "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket"
      ],
  },},
  {
    name: "103",
    icon: require("../assets/slides/103.jpg"),
    category: "Novice",
    title: "103. HALT – Walk Around",
    description: "103. HALT – Walk Around<br/> • The team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.</b><br/> • The handler cues the <b> dog to stay, walks around the dog from nose to tail and back to heel position</b>.<br/> • The handler may pause upon return to heel position.<br/> • The handler cues the dog to <b>heel forward from the sit position</b>.<br/>",
    reward: true,
    deductions: {
      minor: [
        "Dog sits more than 45 degrees out of heel position or to the front or rear of handler (no deductions for less than a 45 degree angle)",
        "Handler moves their feet during the stationary portion of the halt",
        "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
      ],
      nq: [
        "Dog sits 90 degrees or more out of heel position",
        "Failure of the dog to assume a cued position",
        "Dog assumes a position not required by the exercise (eg. a down or stand during the walk around)",
        "Dog not in a sit when cued to heel forward",
        "Handler touches the dog to put them into a position",
        "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket"
      ],
  },
},
  {
    name: "104",
    icon: require("../assets/slides/104.jpg"),
    category: "Novice",
    title: "104. HALT – Down - Walk Around",
    description: "104. HALT – Down - Walk Around<br/> • The team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.</b><br/> • The handler cues the <b> dog to down</b>.<br/> • The handler cues the <b> dog to stay, walks around the dog from nose to tail and back to heel position</b>.<br/> • The handler may pause upon return to heel position.<br/> • The handler cues the dog to <b>heel forward from the down position</b>.<br/>",
    reward: true,
    deductions: {
      minor: [
        "Dog sits or down more than 45 degrees out of heel position or to the front or rear of handler (no deductions for less than a 45 degree angle)",
        "Handler moves their feet during the stationary portion of the halt",
        "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
      ],
      nq: [
        "Dog sits or down 90 degrees or more out of heel position",
        "Failure of the dog to assume a cued position",
        "Dog assumes a position not required by the exercise (eg. a sit or stand during the walk around)",
        "Dog not in a down when cued to heel forward",
        "Handler touches the dog to put them into a position",
        "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket"
      ],
  },
},
  {
    name: "105",
    icon: require("../assets/slides/105.jpg"),
    category: "Novice",
    title: "105. HALT – 1,2,3 Steps Forward",
    description: "105. HALT – 1,2,3 Steps Forward<br/> • The team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.</b><br/> • The handler cues the dog to heel and takes one step forward, then halts; two steps and halts; then three steps and halts. <b>The team must meet the minimum required steps</b>.<br/> • Steps should be equal in length, in a natural stride for the team and finishing the exercise before the next station sign.<br/> • <b>The dog moves with the handler</b>, maintaining heel position, and <b>must sit each time the handler halts</b>.<br/> • The handler cues the dog to <b>heel forward from the sit position</b>.<br/>",
    reward: true,
    deductions: {
      minor: [
        "Dog sits more than 45 degrees out of heel position or to the front or rear of handler (no deductions for less than a 45 degree angle)",
        "Handler moves their feet during the stationary portion of the halt",
        "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
      ],
      substantial: ["Handler takes more than the required number of steps in the 1,2,3 Exercises (3 points for each part of the exercise where extra steps are taken)"],
      
      nq: [
        "Handler takes fewer than the required number of steps (1,2 then 3)",
        "Dog sits 90 degrees or more out of heel position during any of the sits",
        "Failure of the dog to assume a cued position (eg. must sit at each halt)",
        "Dog assumes a position not required by the exercise",
        "Dog does not move simultaneously with the handler during the steps forward",
        "Dog not in a sit when cued to heel forward",
        "Handler touches the dog to put them into a position",
        "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket"
      ],
  },
},
  {
    name: "106",
    icon: require("../assets/slides/106.jpg"),
    category: "Novice",
    title: "106. HALT – Sidestep Right - HALT",
    description: "106. HALT – Sidestep Right - HALT<br/> • The team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position</b>.<br/> • The handler takes <b>one side step directly to their right</b> while cueing the dog to heel.</br> • The dog <b>must move to the right simultaneously with the handler</b> remaining in heel position parallel to the handler and <b>sit</b> when the handler stops.<br/>• The handler cues the dog to <b>heel forward from the sit position.<br/>",
    reward: true,
    deductions: {
      minor: [
        "Dog sits more than 45 degrees out of heel position or to the front or rear of handler (no deductions for less than a 45 degree angle)",
        "During the side step, the dog’s shoulder remains in heel position but their body is at 45-degree angle (2 points)",
        "Handler moves their feet during the stationary portion of the halt",
        "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
      ],
      nq: [
        "Dog sits 90 degrees or more out of heel position",
        "During the side step, the dog does not move simultaneously with the handler in heel position",
        "During the side step, the dog’s shoulders are in heel position but their body is more than 45-degrees out of position",
        "Dog not in a sit when cued to heel forward",
        "Failure of the dog to assume a cued position",
        "Dog assumes a position not required by the exercise",
        "Handler touches the dog to put them into a position",
        "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket"
      ],
  },
},
  {
    name: "107",
    icon: require("../assets/slides/107.jpg"),
    category: "Novice",
    title: "107. HALT – 90 Pivot Right - HALT",
    description: "107. HALT – 90 Pivot Right - HALT<br/>• The team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.<br/>• The handler pivots in place 90 degrees to their right in place and halts.</br>• The dog must move simultaneously with the handler and sit when the handler stops.</b><br/>• The handler then cues the dog to heel and moves forward.<br/>• This station results in a 90-degree change of direction to the right.<br/>• The handler cues the dog to <b>heel forward from the sit position.</b><br/>",
    reward: true,
    deductions: {
      minor: [
        "Dog sits more than 45 degrees out of heel position or to the front or rear of handler (no deductions for less than a 45 degree angle)",
        "Handler moves their feet during the stationary portion of the halt",
        "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
      ],
      nq: [
        "Dog sits 90 degrees or more out of heel position",
        "Handler takes a step rather than a 90-degree pivot (the ball of one foot or one heel must remain in place)",
        "Dog does not move simultaneously with the handler during the pivot",
        "Dog not in a sit when cued to heel forward",
        "Failure of the dog to assume a cued position",
        "Dog assumes a position not required by the exercise",
        "Handler touches the dog to put them into a position",
        "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket"
      ],
  },
},
  {
    name: "108",
    icon: require("../assets/slides/108.jpg"),
    category: "Novice",
    title: "108. HALT – 90 Pivot Left - HALT",
    description: "108. HALT – 90 Pivot Left - HALT<br/>• The team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.<br/>• The handler pivots in place 90 degrees to their left in place and halts.</br>• The dog must move simultaneously with the handler and sit when the handler stops.</b><br/>• The handler then cues the dog to heel and moves forward.<br/>• This station results in a 90-degree change of direction to the left.<br/>• The handler cues the dog to <b>heel forward from the sit position.</b><br/>",
    reward: true,
    deductions: {
      minor: [
        "Dog sits more than 45 degrees out of heel position or to the front or rear of handler (no deductions for less than a 45 degree angle)",
        "Handler moves their feet during the stationary portion of the halt",
        "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
      ],
      nq: [
        "Dog sits 90 degrees or more out of heel position",
        "Handler takes a step rather than a 90-degree pivot (the ball of one foot or one heel must remain in place)",
        "Dog does not move simultaneously with the handler during the pivot",
        "Dog not in a sit when cued to heel forward",
        "Failure of the dog to assume a cued position",
        "Dog assumes a position not required by the exercise",
        "Handler touches the dog to put them into a position",
        "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket"
      ],
  },
},
  {
    name: "109",
    icon: require("../assets/slides/109.jpg"),
    category: "Novice",
    title: "109. HALT – Turn Right 1 Step - HALT",
    description: "109. HALT – Turn Right 1 Step - HALT<br/>• The team comes to a <b>halt</b> and the handler cues the <b>dog to sit in heel position.</b><br/>• The handler cues the dog to heel, <b>turns to the right, takes one step in that direction and halts.</br>• The dog must move simultaneously with the handler and sit when the handler stops.</b><br/>• The handler cues the dog to <b>heel forward from the sit position.</b><br/>",
    reward: true,
    deductions: {
      minor: [
        "Dog sits more than 45 degrees out of heel position or to the front or rear of handler (no deductions for less than a 45 degree angle)",
        "Handler moves their feet during the stationary portion of the halt",
        "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
      ],
      nq: [
        "Dog sits 90 degrees or more out of heel position",
        "Handler does not take one full step to the right",
        "Dog does not move simultaneously with the handler during the step",
        "Dog not in a sit when cued to heel forward",
        "Failure of the dog to assume a cued position",
        "Dog assumes a position not required by the exercise",
        "Handler touches the dog to put them into a position",
        "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket"
      ],
  },
},
  {
    name: "110",
    icon: require("../assets/slides/110.jpg"),
    category: "Novice",
    title: "110. Right Turn",
    description: "110. Right Turn<br/>• While heeling, the team <b>makes a 90-degree turn to the right.</b><br/>• This station results in a 90-degree change of direction to the right.<br/>",
    deductions: {
      minor: [
        "Initiation of the sign outside of a radius of two feet from the station sign",
        "Handler or dog stop forward motion", 
        "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
      ],
      nq: ["The team does not make a 90-degree turn in the correct direction"],
    },
  },
  {
    name: "111",
    icon: require("../assets/slides/111.jpg"),
    category: "Novice",
    title: "111. Left Turn",
    description: "111. Left Turn<br/>• While heeling, the team <b>makes a 90-degree turn to the left.</b><br/>• This station results in a 90-degree change of direction to the left.<br/>",
    deductions: {
      minor: [
        "Initiation of the sign outside of a radius of two feet from the station sign",
        "Handler or dog stop forward motion", 
        "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
      ],
      nq: ["The team does not make a 90-degree turn in the correct direction"],
    },
  },
  {
    name: "112",
    icon: require("../assets/slides/112.jpg"),
    category: "Novice",
    title: "112. 180 Right",
    description: "112. 180-Degree Right<br/>• While heeling, the team <b>makes a 180-degree turn to the right.</b><br/>• The handlers’ path while turning should be on or within a diameter of 2 feet and should be in a straight line to and from the station sign for a minimum of one stride before and after turning.<br/>• This station results in a 180-degree change of direction.<br/>",
    deductions: {
      minor: [
        "Initiation of the sign outside of a radius of two feet from the station sign",
        "Handler or dog stop forward motion", 
        "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        "Handler's path while turning not within a diameter of 2 feet (deduction not specified in the handbook)", 
        "Handler's path not in a straight line to and from the station sign for at least one stride before and after turning (deduction not specified in the handbook)"
      ],
      nq: ["The team does not make a 180-degree turn in the correct direction"],
    },
  },
  {
    name: "113",
    icon: require("../assets/slides/113.jpg"),
    category: "Novice",
    title: "113. 180 Left",
    description: "113. 180-Degree Left<br/>• While heeling, the team <b>makes a 180-degree turn to the left.</b><br/>• The handlers’ path while turning should be on or within a diameter of 2 feet and should be in a straight line to and from the station sign for a minimum of one stride before and after turning.<br/>• This station results in a 180-degree change of direction.<br/>",
    deductions: {
      minor: [
        "Initiation of the sign outside of a radius of two feet from the station sign",
        "Handler or dog stop forward motion", 
        "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        "Handler's path while turning not within a diameter of 2 feet (deduction not specified in the handbook)", 
        "Handler's path not in a straight line to and from the station sign for at least one stride before and after turning (deduction not specified in the handbook)"
      ],
      nq: ["The team does not make a 180-degree turn in the correct direction"],
    },
  },
  {
    name: "114",
    icon: require("../assets/slides/114.jpg"),
    category: "Novice",
    title: "114. 270 Right",
    description: "114. 270-Degree Right<br/>• While heeling, the team <b>makes a 270-degree turn to the right.</b><br/>• The handlers’ path while turning should be on or within a diameter of 2 feet.<br/>• This station results in a 90-degree change of direction to the left.<br/>",
    deductions: {
      minor: [
        "Initiation of the sign outside of a radius of two feet from the station sign",
        "Handler or dog stop forward motion", 
        "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        "Handler's path while turning not within a diameter of 2 feet (deduction not specified in the handbook)"
      ],
      nq: ["The team does not make a 270-degree turn in the correct direction"],
    },
  },
  {
    name: "115",
    icon: require("../assets/slides/115.jpg"),
    category: "Novice",
    title: "115. 270 Left",
    description: "115. 270-Degree Left<br/>• While heeling, the team <b>makes a 270-degree turn to the left.</b><br/>• The handlers’ path while turning should be on or within a diameter of 2 feet.<br/>• This station results in a 90-degree change of direction to the right.<br/>",
    deductions: {
      minor: [
        "Initiation of the sign outside of a radius of two feet from the station sign",
        "Handler or dog stop forward motion", 
        "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        "Handler's path while turning not within a diameter of 2 feet (deduction not specified in the handbook)"
      ],
      nq: ["The team does not make a 270-degree turn in the correct direction"],
    },
  },
  {
    name: "116",
    icon: require("../assets/slides/116.jpg"),
    category: "Novice",
    title: "116. 360 Right",
    description: "116. 360-Degree Right<br/>• While heeling, the team <b>makes a 360-degree turn to the right.</b><br/>• The handlers’ path while turning should be on or within a diameter of 2 feet.<br/>",
    deductions: {
      minor: [
        "Initiation of the sign outside of a radius of two feet from the station sign",
        "Handler or dog stop forward motion", 
        "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        "Handler's path while turning not within a diameter of 2 feet (deduction not specified in the handbook)"
      ],
      nq: ["The team does not make a 360-degree turn in the correct direction"],
    },
  },
  {
    name: "117",
    icon: require("../assets/slides/117.jpg"),
    category: "Novice",
    title: "117. 360 Left",
    description: "117. 360-Degree Left<br/>• While heeling, the team <b>makes a 360-degree turn to the left.</b><br/>• The handlers’ path while turning should be on or within a diameter of 2 feet.<br/>",
    deductions: {
      minor: [
        "Initiation of the sign outside of a radius of two feet from the station sign",
        "Handler or dog stop forward motion", 
        "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        "Handler's path while turning not within a diameter of 2 feet (deduction not specified in the handbook)"
      ],
      nq: ["The team does not make a 360-degree turn in the correct direction"],
    },
  },
  {
    name: "118",
    icon: require("../assets/slides/118.jpg"),
    category: "Novice",
    title: "118. Slow Pace",
    description: "118. Slow Pace<br/>• While heeling, the team decreases its pace so that there is a <b>noticeable difference in the dogs’ speed from the normal pace.<br/>• The slow pace is maintained continuously until the next station.</b><br/>• This station is followed by either Fast, Normal or the Finish station.</br>",
    deductions: {
      minor: ["Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
      ],
      nq: [
        "No noticeable change in the dog's pace",
        "Dog assumes an incorrect position (eg. sits)",
        "Slow pace not maintained continuously until the next sign"],
    },
  },
  {
    name: "119",
    icon: require("../assets/slides/119.jpg"),
    category: "Novice",
    title: "119. Fast Pace",
    description: "119. Fast Pace<br/>• While heeling, the team increases its pace so that there is a <b>noticeable difference in the dogs’ speed from the normal pace</b>. The pace should be fast enough that the dog at least breaks into a trot.<br/>• <br>The slow pace is maintained continuously until the next station.</b><br/>• This station is followed by either Slow, Normal or the Finish station.</br>",
    deductions: {
      minor: ["Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
      ],
      nq: [
        "No noticeable change in the dog's pace",
        "Fast pace not maintained continuously until the next sign"],
    },
  },
  {
    name: "120",
    icon: require("../assets/slides/120.jpg"),
    category: "Novice",
    title: "120. Normal Pace",
    description: "120. Normal Pace<br/>• While heeling, the team moves forward at a <b>normal pace</b> that is comfortable for the dog and handler.<br/>• There must be a <b>noticeable difference in the dogs’ speed from the slow or fast to normal pace.</b><br/>",
    deductions: {
      minor: ["Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)"],
      nq: ["No noticeable change in the dog's pace from the slow or fast pace to normal pace"],
    },
  },
  {
    name: "121",
    icon: require("../assets/slides/121.jpg"),
    category: "Novice",
    title: "121. Call Front - Finish Right",
    description: "121. Call Front - Finish Right<br/>• While heeling, the handler stops forward motion and calls the dog directly to the front position.<br/> • The handler may take up to four steps backward as the <b>dog turns and moves to sit in front position</b>.<br/>• The handler then cues the dog to <b>move to the handler’s right and around their body to sit in heel position</b>.<br/>• The handler’s feet should remain stationary while the dog moves around them.<br/>• The handler cues the dog to <b>heel forward from the sit position.</b><br/>",
    reward: true,
    deductions: {
      minor: [
        "Dog sits more than 45-degrees out of front position (no deductions for less than a 45-degree angle)",
        "Dog sits more than 45-degrees out of heel position during the finish (no deductions for less than a 45-degree angle)",
        "Handler moves their feet during the finish",
        "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
      ],
      substantial: ["Handler moves left or right to position themselves in front of the dog to create a straight front"],

      nq: [
        "Dog sits 90 degrees or more out of heel position or out of front position",
        "Dog does not sit in front position",
        "Dog not in a sit before heeling forward",
        "Dog does not move around the handler to the right to sit in heel position",
        "Dog assumes a position not required by the exercise",
        "Handler touches the dog to put them into a position",
        "Handler walks into the dog to force the dog to move during a forward/finish (considered a physical correction)",
        "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket"
      ],
  },
},
  {
    name: "122",
    icon: require("../assets/slides/122.jpg"),
    category: "Novice",
    title: "122. Call Front - Finish Left",
    description: "122. Call Front - Finish Left<br/>• While heeling, the handler stops forward motion and calls the dog directly to the front position.<br/> • The handler may take up to four steps backward as the <b>dog turns and moves to sit in front position</b>.<br/>• The handler then cues the dog to <b>move to the handler’s left directly to sit in heel position</b>.<br/>• The handler’s feet should remain stationary while the dog moves around them.<br/>• The handler cues the dog to <b>heel forward from the sit position.</b><br/>",
    reward: true,
    deductions: {
      minor: [
        "Dog sits more than 45-degrees out of front position (no deductions for less than a 45-degree angle)",
        "Dog sits more than 45-degrees out of heel position during the finish (no deductions for less than a 45-degree angle)",
        "Handler moves their feet during the finish",
        "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
      ],
      substantial: ["Handler moves left or right to position themselves in front of the dog to create a straight front"],

      nq: [
        "Dog sits 90 degrees or more out of heel position or out of front position",
        "Dog does not sit in front position",
        "Dog not in a sit before heeling forward",
        "Dog does not move to the left to sit in heel position",
        "Dog assumes a position not required by the exercise",
        "Handler touches the dog to put them into a position",
        "Handler walks into the dog to force the dog to move during a forward/finish (considered a physical correction)",
        "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket"
      ],
  },
},
  {
    name: "123",
    icon: require("../assets/slides/123.jpg"),
    category: "Novice",
    title: "123. Call Front - Forward Right",
    description: "123. Call Front - Forward Right<br/>• While heeling, the handler stops forward motion and calls the dog directly to the front position.<br/> • The handler may take up to four steps backward as the <b>dog turns and moves to sit in front position</b>.<br/>• The handler then cues the dog to <b>move to the handler’s right, around and behind them, moving towards heel position</b>.<br/>• As the dog is returning to heel position, the handler cues the dog to heel and moves forward. <b>The dog does not sit in heel position.</b><br/>",
    deductions: {
      minor: [
        "Dog sits more than 45-degrees out of front position (no deductions for less than a 45-degree angle)",
        "Handler moves their feet to perform the forward",        
      ],
      substantial: ["Handler moves left or right to position themselves in front of the dog to create a straight front"],

      nq: [
        "Dog sits 90 degrees or more out of front position",
        "Dog does not sit in front position",
        "Dog sits before heeling forward",
        "Dog does not move around the handler to the right to assume heel position",
        "Dog assumes a position not required by the exercise",
        "Handler touches the dog to put them into a position",
        "Handler walks into the dog to force the dog to move during a forward/finish (considered a physical correction)"        
      ],
  },
},
  {
    name: "124",
    icon: require("../assets/slides/124.jpg"),
    category: "Novice",
    title: "124. Call Front - Forward Left",
    description: "124. Call Front - Forward Left<br/>• While heeling, the handler stops forward motion and calls the dog directly to the front position.<br/> • The handler may take up to four steps backward as the <b>dog turns and moves to sit in front position</b>.<br/>• The handler then cues the dog to <b>move to the handler’s left directly towards heel position</b>.<br/>• As the dog is returning to heel position, the handler cues the dog to heel and moves forward. <b>The dog does not sit in heel position.</b><br/>",
    deductions: {
      minor: [
        "Dog sits more than 45-degrees out of front position (no deductions for less than a 45-degree angle)",
        "Handler moves their feet to perform the forward",        
      ],
      substantial: ["Handler moves left or right to position themselves in front of the dog to create a straight front"],

      nq: [
        "Dog sits 90 degrees or more out of front position",
        "Dog does not sit in front position",
        "Dog sits before heeling forward",
        "Dog does not move to the handler's left to assume heel position",
        "Dog assumes a position not required by the exercise",
        "Handler touches the dog to put them into a position",
        "Handler walks into the dog to force the dog to move during a forward/finish (considered a physical correction)"        
      ],
  },
},
  {
    name: "125",
    icon: require("../assets/slides/125.jpg"),
    category: "Novice",
    title: "125. Call Front Handler Returns to Heel",
    description: "125. Call Front Handler Returns to Heel<br/>• While heeling, the handler stops forward motion and calls the dog directly to the front position.<br/> • The handler may take up to four steps backward as the <b>dog turns and moves to sit in front position</b>.<br/>• The <b>dog must remain in a sit</b> while the <b>handler walks around behind the dog in a counterclockwise direction to return to heel position</b>.<br/>• The handler may pause upon return to heel position.<br/>• This station will result in a 180-degree change of direction.<br/>• The handler cues the dog to <b>heel forward from the sit position</b>.<br/>",  
    reward: true,  
    deductions: {
      minor: [
        "Dog sits more than 45-degrees out of front position (no deductions for less than a 45-degree angle)",        
        "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
      ],
      substantial: ["Handler moves left or right to position themselves in front of the dog to create a straight front"],

      nq: [
        "Dog sits 90 degrees or more out of front position or does not sit in front position",
        "Handler does not walk around the dog in a counterclockwise direction to heel position",
        "Dog does not maintain the sit while handler walks around them",
        "Dog not in a sit when cued to heel forward",
        "Dog assumes a position not required by the exercise",
        "Handler touches the dog to put them into a position",        
        "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket"
      ],
  },
},
  {
    name: "126",
    icon: require("../assets/slides/126.jpg"),
    category: "Novice",
    title: "126. Spiral Right - Dog Outside",
    description: "126. Spiral Right - Dog Outside<br/>• While heeling, <b>the team moves around the cones in a clockwise direction</b>, turning to their right when moving around each of the cones.<br/>• The team <b>pass the first and second cones and proceeds to and around the third one</b>, then <b>return to loop the first cone</b>.<br/>• The team then <b>proceeds to and around the second cone</b> and returns to <b>loop the first cone</b> a second time.<br/>• The team finally <b>circles the first cone by passing between the first and second cones</b> to exit the station.<br/>",
    deductions: {
      minor: [        
        "Handler or dog stop forward motion", 
        "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        "Minor movement (bump) of a cone (no deductions if cone is moved by a wagging tail)"
      ],
      substantial: ["Knocking over or substantial movement of a cone."],

      nq: [
        "The team does not heel in a clockwise direction around the cones and in the correct pattern",
        "Dog assumes a position not requested (eg. sit)"
      ],
    },
  },
  {
    name: "127",
    icon: require("../assets/slides/127.jpg"),
    category: "Novice",
    title: "127. Spiral Left - Dog Inside",
    description: "127. Spiral Right - Dog Outside<br/>• While heeling, <b>the team moves around the cones in a counterclockwise direction</b>, turning to their left when moving around each of the cones.<br/>• The team <b>pass the first and second cones and proceeds to and around the third one</b>, then <b>return to loop the first cone</b>.<br/>• The team then <b>proceeds to and around the second cone</b> and returns to <b>loop the first cone</b> a second time.<br/>• The team finally <b>circles the first cone by passing between the first and second cones</b> to exit the station.<br/>",
    deductions: {
      minor: [        
        "Handler or dog stop forward motion", 
        "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        "Minor movement (bump) of a cone (no deductions if cone is moved by a wagging tail)"
      ],
      substantial: ["Knocking over or substantial movement of a cone."],

      nq: [
        "The team does not heel in a counterclockwise direction around the cones and in the correct pattern",
        "Dog assumes a position not requested (eg. sit)"
      ],
    },
  },
  {
    name: "128",
    icon: require("../assets/slides/128.jpg"),
    category: "Novice",
    title: "128. Weave Once",
    description: "128. Weave Once<br/>• While heeling, <b>the team enters the pattern with the first cone on the team’s left</b>.<br/>• The team <b>weaves through the cones</b> and exits the station<br/>",
    deductions: {
      minor: [        
        "Handler or dog stop forward motion", 
        "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        "Minor movement (bump) of a cone (no deductions if cone is moved by a wagging tail)"
      ],
      substantial: ["Knocking over or substantial movement of a cone."],

      nq: [
        "The team does not enter the pattern with the first cone on the team's left",
        "The team does not weave through all cones before exiting the pattern",
        "Dog assumes a position not requested (eg. sit)"
      ],
    },
  },
  {
    name: "129",
    icon: require("../assets/slides/129.jpg"),
    category: "Novice",
    title: "129. Weave Twice",
    description: "129. Weave Twice<br/>• While heeling, <b>the team enters the pattern with the first cone on the team’s left</b>.<br/>• The team <b>weaves continuously through the cones, loops around the end cone and weaves back to the beginning of the pattern</b>.<br/>",
    deductions: {
      minor: [        
        "Handler or dog stop forward motion", 
        "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        "Minor movement (bump) of a cone (no deductions if cone is moved by a wagging tail)"
      ],
      substantial: ["Knocking over or substantial movement of a cone."],

      nq: [
        "The team does not enter the pattern with the first cone on the team's left",
        "The team does not weave through all cones, loop around the end cone, and weave back through the cones",
        "Dog assumes a position not requested (eg. sit)"
      ],
    },
  },
];

export default Novice;
