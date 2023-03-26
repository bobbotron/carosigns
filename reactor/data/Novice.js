const Novice = {
  name: "Novice",
  type: "normal",
  signs: [
    {
      name: "Start",
      icon: require("../assets/slides/start.jpg"),
      title: "Start",
      excludeFromPractice: true,
      hideNameOnGrid: true,
      description:
        "• While heeling, the <b>team heels past the Start station.</b><br/> • Timing begins.<br/> • There are no other commands from the Judge throughout the course.<br/><br/>",
      tips: "• The Judge will let you know when you may begin.<br/>• Handlers may choose to either have the dog sit before the Start sign or use a moving start (heel past the Start sign without stopping).<br/> • If in a class that allows food reinforcement, food may be delivered before crossing the Start sign.",

      deductions: {
        minor: [
          "Initiation of the sign outside of a radius of two feet from the station sign",
          "Tight leash (Novice)",
          "Out of heel position",
          "Dog interfering with handler (bumping, crowding, jumping up on handler)",
        ],
      },
    },
    {
      name: "Finish",
      icon: require("../assets/slides/finish.jpg"),
      title: "Finish",
      excludeFromPractice: true,
      hideNameOnGrid: true,
      description:
        "• While heeling, the <b>team heels past the Finish station.</b><br/> • Timing ends.<br/><br/>",
      tips: "• If in a class that allows food reinforcement, food may be delivered after crossing the Finish sign.",
      deductions: {
        minor: [
          "Initiation of the sign outside of a radius of two feet from the station sign",
          "Tight leash (Novice)",
          "Out of heel position",
          "Dog interfering with handler (bumping, crowding, jumping up on handler)",
          "Loss of forward motion (dog stops)",
        ],
      },
    },
    {
      name: "100",
      icon: require("../assets/slides/100.jpg"),
      title: "100. HALT - Stand",
      description:
        "• The team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.</b><br/> • The handler cues the dog to <b>stand</b>.<br/> • The handler cues the dog to <b>heel forward from the stand position</b>.<br/><br/>",
      tips: "• Pause briefly after each position change so that the Judge can clearly see all required positions.<br/> • Do not reach for reinforcement until the stand has been completed. The dog must hold the stand while eating the reward.",
      reward: true,
      deductions: {
        minor: [
          "Dog sits or stands more than 45-degrees out of heel position (no deductions for less than a 45 degree angle)",
          "Handler moves their feet during the stationary portion of the halt",
          "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
        ],
        nq: [
          "Dog sits or stands 90-degrees or more out of heel position",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise",
          "Handler touches the dog to put them into a position",
          "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket",
        ],
      },
      video: undefined,
    },
    {
      name: "101",
      icon: require("../assets/slides/101.jpg"),
      title: "101. HALT - Down",
      description:
        "• The team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.</b><br/> • The handler cues the dog to <b>down</b>.<br/> • The handler cues the dog to <b>heel forward from the down position</b>.<br/><br/>",
      tips: "• Pause briefly after each position change so that the Judge can clearly see all required positions.<br/>• If rewarding, pause first with the dog in the down then reach for reinforcement so that it is clear the station was completed before initiating the reward. The dog must hold the down while taking the reward.",
      reward: true,
      deductions: {
        minor: [
          "Dog sits or downs more than 45-degrees out of heel position (no deductions for less than a 45-degree angle)",
          "Handler moves their feet during the stationary portion of the halt",
          "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
        ],
        nq: [
          "Dog sits or downs 90-degrees or more out of heel position",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise (eg. a stand between the sit and down)",
          "Dog not in a down when cued to heel forward",
          "Handler touches the dog to put them into a position",
          "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket",
        ],
      },
    },
    {
      name: "102",
      icon: require("../assets/slides/102.jpg"),
      title: "102. HALT - Down - Sit",
      description:
        "• The team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.</b><br/> • The handler cues the dog to <b>down</b>.<br/> • The handler cues the dog to <b>sit</b>.<br/> • The handler cues the dog to <b>heel forward from the sit position</b>.<br/><br/>",
      tips: "• Pause briefly after each position change so that the Judge can clearly see all required positions.<br/>• If rewarding, pause first in heel position then reach for reinforcement so that it is clear the station was completed before initiating the reward.",
      reward: true,
      deductions: {
        minor: [
          "Dog sits or downs more than 45-degrees out of heel position (no deductions for less than a 45-degree angle)",
          "Handler moves their feet during the stationary portion of the halt",
          "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
        ],
        nq: [
          "Dog sits or downs 90-degrees or more out of heel position",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise (eg. a stand between the sit and down)",
          "Dog not in a sit when cued to heel forward",
          "Handler touches the dog to put them into a position",
          "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket",
        ],
      },
    },
    {
      name: "103",
      icon: require("../assets/slides/103.jpg"),
      title: "103. HALT - Walk Around",
      description:
        "• The team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.</b><br/> • The handler cues the <b> dog to stay, walks around the dog from nose to tail and back to heel position</b>.<br/> • The handler may pause upon return to heel position.<br/> • The handler cues the dog to <b>heel forward from the sit position</b>.<br/><br/>",
      tips: "• If the dog sits close to a station sign, making it difficult to walk between the dog and the sign, you may choose to walk around both the sign and the dog while returning to heel position.<br/> • Some movement during the stay is not a deduction, provided the dog remains in a sit and does not turn their body.<br/>• If rewarding, pause first in heel position then reach for reinforcement so that it is clear the station was completed before initiating the reward.",
      reward: true,
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of heel position (no deductions for less than a 45-degree angle)",
          "Handler moves their feet during the stationary portion of the halt",
          "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
        ],
        nq: [
          "Dog sits 90-degrees or more out of heel position during the halt",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise",
          "Dog does not maintain the sit during the walk around or not in a sit when cued to heel forward",
          "Handler touches the dog to put them into a position",
          "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket",
        ],
      },
    },
    {
      name: "104",
      icon: require("../assets/slides/104.jpg"),
      title: "104. HALT - Down - Walk Around",
      description:
        "• The team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.</b><br/> • The handler cues the <b> dog to down</b>.<br/> • The handler cues the <b> dog to stay, walks around the dog from nose to tail and back to heel position</b>.<br/> • The handler may pause upon return to heel position.<br/> • The handler cues the dog to <b>heel forward from the down position</b>.<br/><br/>",
      tips: "• If the dog sits close to a station sign, making it difficult to walk between the dog and the sign, you may choose to walk around both the sign and the dog while returning to heel position.<br/> • Slight movement in the down is permitted without deductions as long as the dog holds the down and does not turn their body as the handler walks around them.<br/>• If rewarding, pause after returning to heel position then reach for reinforcement so that it is clear the station was completed before initiating the reward. The dog must eat the reward in a down.",
      reward: true,
      deductions: {
        minor: [
          "Dog sits or down more than 45-degrees out of heel position (no deductions for less than a 45-degree angle)",
          "Handler moves their feet during the stationary portion of the halt",
          "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
        ],
        nq: [
          "Dog sits or down 90-degrees or more out of heel position",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise",
          "Dog does not maintain the down during the walk around or not in a down when cued to heel forward",
          "Handler touches the dog to put them into a position",
          "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket",
        ],
      },
    },
    {
      name: "105",
      icon: require("../assets/slides/105.jpg"),
      title: "105. HALT - 1, 2, 3 Steps Forward",
      description:
        "• The team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.</b><br/>• The handler cues the dog to heel and takes one step forward, then halts; two steps and halts; then three steps and halts. <b>The team must meet the minimum required steps</b>.<br/> • Steps should be equal in length, in a natural stride for the team and finishing the exercise before the next station sign.<br/> • <b>The dog moves with the handler</b>, maintaining heel position, and <b>must sit each time the handler halts</b>.<br/> • The handler cues the dog to <b>heel forward from the sit position</b>.<br/><br/>",
      tips: "• During the walkthrough, practice the length of your steps to be sure that you can complete the exercise before reaching the next station sign.<br>• Taking more than the required number of steps is a deduction but not an NQ.",
      reward: true,
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of heel position (no deductions for less than a 45-degree angle)",
          "Handler moves their feet during the stationary portion of the halt",
          "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
        ],
        substantial: [
          "Handler takes more than the required number of steps in the 1,2,3 Exercises (3 points for each part of the exercise where extra steps are taken)",
        ],

        nq: [
          "Handler takes fewer than the required number of steps (1,2 then 3)",
          "Dog sits 90-degrees or more out of heel position during any of the sits",
          "Failure of the dog to assume a cued position (eg. dog must sit at each halt)",
          "Dog assumes a position not required by the exercise",
          "Dog does not move simultaneously with the handler during the steps forward",
          "Dog not in a sit when cued to heel forward",
          "Handler touches the dog to put them into a position",
          "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket",
        ],
      },
    },
    {
      name: "106",
      icon: require("../assets/slides/106.jpg"),
      title: "106. HALT - Sidestep Right - HALT",
      description:
        "• The team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position</b>.<br/> • The handler takes <b>one side step directly to their right</b> while cueing the dog to heel.</br> • The dog <b>must move to the right simultaneously with the handler</b> remaining in heel position parallel to the handler and <b>sit</b> when the handler stops.<br/>• The handler cues the dog to <b>heel forward from the sit position.</b><br/><br/>",
      tips: "• The team will heel directly up to the station sign and perform the side step in front of the sign, then proceed along the new path to the right of the station sign.<br/>• Ideally the dog's body position should remain completely parallel to the handler during the side step.",
      reward: true,
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of heel position (no deductions for less than a 45-degree angle)",
          "During the side step, the dog’s shoulder remains in heel position but their body is at 45-degree angle (2 points)",
          "Handler moves their feet during the stationary portion of the halt",
          "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
        ],
        nq: [
          "Dog sits 90-degrees or more out of heel position",
          "During the side step, the dog does not move simultaneously with the handler in heel position",
          "During the side step, the dog’s shoulders are in heel position but their body is more than 45-degrees out of position",
          "Dog not in a sit when cued to heel forward",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise",
          "Handler touches the dog to put them into a position",
          "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket",
        ],
      },
    },
    {
      name: "107",
      icon: require("../assets/slides/107.jpg"),
      title: "107. HALT - 90 Pivot Right - HALT",
      description:
        "• The team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.<br/>• The handler pivots in place 90-degrees to their right in place and halts.</br>• The dog must move simultaneously with the handler and sit when the handler stops.</b><br/>• The handler then cues the dog to heel and moves forward.<br/>• This station results in a 90-degree change of direction to the right.<br/>• The handler cues the dog to <b>heel forward from the sit position.</b><br/><br/>",
      tips: "• Ensure you are pivoting in as small a space as possible rather than taking a step: either the ball one foot or the heel of one foot should stay in place (sometimes referred to as turning on a dinner plate!).<br/>• As a change of direction station, the sign is placed directly on the team's path of travel. The team performs the exercise in front of the sign, then proceeds along the new path.",
      reward: true,
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of heel position (no deductions for less than a 45-degree angle)",
          "Handler moves their feet during the stationary portion of the halt",
          "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
        ],
        nq: [
          "Dog sits 90-degrees or more out of heel position",
          "Handler takes a step rather than a 90-degree pivot (the ball of one foot or one heel should remain in place)",
          "Dog does not move simultaneously with the handler during the pivot",
          "Dog not in a sit when cued to heel forward",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise",
          "Handler touches the dog to put them into a position",
          "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket",
        ],
      },
    },
    {
      name: "108",
      icon: require("../assets/slides/108.jpg"),
      title: "108. HALT - 90 Pivot Left - HALT",
      description:
        "• The team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.<br/>• The handler pivots in place 90-degrees to their left in place and halts.</br>• The dog must move simultaneously with the handler and sit when the handler stops.</b><br/>• The handler then cues the dog to heel and moves forward.<br/>• This station results in a 90-degree change of direction to the left.<br/>• The handler cues the dog to <b>heel forward from the sit position.</b><br/><br/>",
      tips: "• Ensure you are pivoting in as small a space possible rather than taking a step: either the ball one foot or the heel of one foot must stay in place (sometimes referred to as turning on a dinner plate!).<br/>• As a change of direction station, the sign is placed directly on the team's path of travel. The team performs the exercise in front of the sign, then proceeds along the new path.",
      reward: true,
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of heel position (no deductions for less than a 45-degree angle)",
          "Handler moves their feet during the stationary portion of the halt",
          "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
        ],
        nq: [
          "Dog sits 90-degrees or more out of heel position",
          "Handler takes a step rather than a 90-degree pivot (the ball of one foot or one heel must remain in place)",
          "Dog does not move simultaneously with the handler during the pivot",
          "Dog not in a sit when cued to heel forward",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise",
          "Handler touches the dog to put them into a position",
          "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket",
        ],
      },
    },
    {
      name: "109",
      icon: require("../assets/slides/109.jpg"),
      title: "109. HALT - Turn Right 1 Step - HALT",
      description:
        "• The team comes to a <b>halt</b> and the handler cues the <b>dog to sit in heel position.</b><br/>• The handler cues the dog to heel, <b>turns to the right, takes one step in that direction and halts.</br>• The dog must move simultaneously with the handler and sit when the handler stops.</b><br/>• The handler cues the dog to <b>heel forward from the sit position.</b><br/><br/>",
      tips: "• As a change of direction station, the sign is placed directly on the team's path of travel. The team performs the exercise in front of the sign, then proceeds along the new path.<br>• Be sure to take a step, rather than pivoting. The step must be a distinct step, not be a pivot.",
      reward: true,
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of heel position (no deductions for less than a 45-degree angle)",
          "Handler moves their feet during the stationary portion of the halt",
          "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
        ],
        nq: [
          "Dog sits 90-degrees or more out of heel position",
          "Handler does not take one full step to the right",
          "Dog does not move simultaneously with the handler during the step",
          "Dog not in a sit when cued to heel forward",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise",
          "Handler touches the dog to put them into a position",
          "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket",
        ],
      },
    },
    {
      name: "110",
      icon: require("../assets/slides/110.jpg"),
      title: "110. Right Turn",
      description:
        "• While heeling, the team <b>makes a 90-degree turn to the right.</b><br/>• This station results in a 90-degree change of direction to the right.<br/><br/>",
      tips: "• Right and Left turns can be either a sharp 90-degrees or a soft turn.<br/>• As a change of direction station, the sign is placed directly on the team's path of travel. The team performs the exercise in front of the sign, then proceeds along the new path.",
      deductions: {
        minor: [
          "Initiation of the sign outside of a radius of two feet from the station sign",
          "Handler or dog stop forward motion",
          "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        ],
        nq: [
          "The team does not make a 90-degree turn in the correct direction",
        ],
      },
    },
    {
      name: "111",
      icon: require("../assets/slides/111.jpg"),
      title: "111. Left Turn",
      description:
        "• While heeling, the team <b>makes a 90-degree turn to the left.</b><br/>• This station results in a 90-degree change of direction to the left.<br/><br/>",
      tips: "• Right and Left turns can be either a sharp 90-degrees or a soft turn.<br/>• As a change of direction station, the sign is placed directly on the team's path of travel. The team performs the exercise in front of the sign, then proceeds along the new path.",
      deductions: {
        minor: [
          "Initiation of the sign outside of a radius of two feet from the station sign",
          "Handler or dog stop forward motion",
          "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        ],
        nq: [
          "The team does not make a 90-degree turn in the correct direction",
        ],
      },
    },
    {
      name: "112",
      icon: require("../assets/slides/112.jpg"),
      title: "112. 180 Right",
      description:
        "• While heeling, the team <b>makes a 180-degree turn to the right.</b><br/>• The handler's path while turning should be on or within a diameter of 2 feet and should be in a straight line to and from the station sign for a minimum of one stride before and after turning.<br/>• This station results in a 180-degree change of direction.<br/><br/>",
      tips: "• The natural path of the course may result in the team approaching the turn from an angle; be sure that the final steps towards the sign are in a straight line, perform the exercise in front of the sign then heel away from the sign in a straight line for several steps. Then, you may proceed at an angle if required for the course.<br/>• 180-degree turns are tight turns (they can even be pivots!). If you measure two feet on the ground, you will get a feel for how tight the turns are.<br/>• Previously referred to as an About Turn.<br/>",
      deductions: {
        minor: [
          "Handler's path while turning more than a 2-foot radius",
          "Initiation of the sign outside of a radius of two feet from the station sign",
          "Handler or dog stop forward motion",
          "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
          "Handler's path not in a straight line to and from the station sign for at least one stride before and after turning",
        ],
        nq: [
          "The team does not make a 180-degree turn in the correct direction",
          "Dog assumes a position not requested (eg. sit)",
        ],
      },
    },
    {
      name: "113",
      icon: require("../assets/slides/113.jpg"),
      title: "113. 180 Left",
      description:
        "• While heeling, the team <b>makes a 180-degree turn to the left.</b><br/>• The handler's path while turning should be on or within a diameter of 2 feet and should be in a straight line to and from the station sign for a minimum of one stride before and after turning.<br/>• This station results in a 180-degree change of direction.<br/><br/>",
      tips: "• The natural path of the course may result in the team approaching the turn from an angle; be sure that the final steps towards the sign are in a straight line, perform the turn in front of the sign, then heel away from the sign in a straight line for several steps. Then, you may proceed at an angle if required for the course.<br/>• 180-degree turns are tight turns (they can even be pivots!). If you measure two feet on the ground, you will get a feel for how tight the turns are.<br/>• Previously referred to as an About U Turn.",
      deductions: {
        minor: [
          "Handler's path while turning more than a 2-foot radius",
          "Initiation of the sign outside of a radius of two feet from the station sign",
          "Handler or dog stop forward motion",
          "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
          "Handler's path not in a straight line to and from the station sign for at least one stride before and after turning",
        ],
        nq: [
          "The team does not make a 180-degree turn in the correct direction",
          "Dog assumes a position not requested (eg. sit)",
        ],
      },
    },
    {
      name: "114",
      icon: require("../assets/slides/114.jpg"),
      title: "114. 270 Right",
      description:
        "• While heeling, the team <b>makes a 270-degree turn to the right.</b><br/>• The handler's path while turning should be on or within a diameter of 2 feet.<br/>• This station results in a 90-degree change of direction to the left.<br/><br/>",
      tips: "• As a change of direction station, the sign is placed directly on the team's path of travel. The team performs the exercise in front of the sign, then proceeds along the new path.<br/>• 270-degree turns are tight turns, but not pivots. If you measure two feet on the ground, you will get a feel for how tight the turns are.<br/>• A 270-degree right turn results in a turn to the left.",
      deductions: {
        minor: [
          "Handler's path while turing more than a 2-foot radius",
          "Initiation of the sign outside of a radius of two feet from the station sign",
          "Handler or dog stop forward motion",
          "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        ],
        nq: [
          "The team does not make a 270-degree turn in the correct direction",
          "Dog assumes a position not requested (eg. sit)",
        ],
      },
    },
    {
      name: "115",
      icon: require("../assets/slides/115.jpg"),
      title: "115. 270 Left",
      description:
        "• While heeling, the team <b>makes a 270-degree turn to the left.</b><br/>• The handler's path while turning should be on or within a diameter of 2 feet.<br/>• This station results in a 90-degree change of direction to the right.<br/><br/>",
      tips: "• As a change of direction station, the sign is placed directly on the team's path of travel. The team performs the exercise in front of the sign, then proceeds along the new path.<br/>• 270-degree turns are tight turns, but not pivots. If you measure two feet on the ground, you will get a feel for how tight the turns are.<br/>• A 270-degree left turn results in a turn to the right.",
      deductions: {
        minor: [
          "Handler's path while turning more than a 2-foot radius",
          "Initiation of the sign outside of a radius of two feet from the station sign",
          "Handler or dog stop forward motion",
          "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        ],
        nq: [
          "The team does not make a 270-degree turn in the correct direction",
          "Dog assumes a position not requested (eg. sit)",
        ],
      },
    },
    {
      name: "116",
      icon: require("../assets/slides/116.jpg"),
      title: "116. 360 Right",
      description:
        "• While heeling, the team <b>makes a 360-degree turn to the right.</b><br/>• The handler's path while turning should be on or within a diameter of 2 feet.<br/><br/>",
      tips: "• 360-degree turns are tight turns, but not pivots. If you measure two feet on the ground, you will get a feel for how tight the turns are.<br/>• Perform the turn beside the sign, then continue in the same direction and on the same path of travel",
      deductions: {
        minor: [
          "Handler's path while turning more than a 2-foot radius",
          "Initiation of the sign outside of a radius of two feet from the station sign",
          "Handler or dog stop forward motion",
          "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        ],
        nq: [
          "The team does not make a 360-degree turn in the correct direction",
          "Dog assumes a position not requested (eg. sit)",
        ],
      },
    },
    {
      name: "117",
      icon: require("../assets/slides/117.jpg"),
      title: "117. 360 Left",
      description:
        "• While heeling, the team <b>makes a 360-degree turn to the left.</b><br/>• The handler's path while turning should be on or within a diameter of 2 feet.<br/><br/>",
      tips: "• 360-degree turns are tight turns, but not pivots. If you measure two feet on the ground, you will get a feel for how tight the turns are.<br/>• Perform the turn beside the sign, then continue in the same direction and on the same path of travel",
      deductions: {
        minor: [
          "Handler's path while turning more than a 2-foot radius",
          "Initiation of the sign outside of a radius of two feet from the station sign",
          "Handler or dog stop forward motion",
          "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        ],
        nq: [
          "The team does not make a 360-degree turn in the correct direction",
          "Dog assumes a position not requested (eg. sit)",
        ],
      },
    },
    {
      name: "118",
      icon: require("../assets/slides/118.jpg"),
      title: "118. Slow Pace",
      practiceNextRestriction: ["119", "120"],
      description:
        "• While heeling, the team decreases its pace so that there is a <b>noticeable difference in the dog's speed from the normal pace.<br/>• The slow pace is maintained continuously until the next station.</b><br/>• This station is followed by either Fast, Normal or the Finish station.</br><br/>",
      tips: "• The Judge is looking for the <i>dog</i> to noticeably change their pace. Be sure you are focused on your dog's pace, not your own.<br/>• This sign must be followed by a Fast Pace, Normal Pace or Finish sign.<br/>• One pace change station (slow or fast) is required in every Novice course.",
      deductions: {
        minor: [
          "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        ],
        nq: [
          "No noticeable change in the dog's pace",
          "Dog assumes an incorrect position (eg. sits)",
          "Slow pace not maintained continuously until the next sign",
        ],
      },
    },
    {
      name: "119",
      icon: require("../assets/slides/119.jpg"),
      title: "119. Fast Pace",
      practiceNextRestriction: ["118", "120"],
      description:
        "• While heeling, the team increases its pace so that there is a <b>noticeable difference in the dog's speed from the normal pace</b>. The pace should be fast enough that the dog at least breaks into a trot.<br/>• <b>The fast pace is maintained continuously until the next station.</b><br/>• This station is followed by either Slow, Normal or the Finish station.</br><br/>",
      tips: "• The Judge is looking for the <i>dog</i> to noticeably change their pace. Be sure to speed up enough (jogging speed) that your dog's pace changes noticeably.<br/>• This sign must be followed by a Slow Pace, Normal Pace or Finish sign.<br/>• One pace change station (slow or fast) is required in every Novice course.",
      deductions: {
        minor: [
          "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        ],
        nq: [
          "No noticeable change in the dog's pace",
          "Fast pace not maintained continuously until the next sign",
        ],
      },
    },
    {
      name: "120",
      icon: require("../assets/slides/120.jpg"),
      title: "120. Normal Pace",
      practiceOnlyAfter: ["118", "119", "200"],
      description:
        "• While heeling, the team moves forward at a <b>normal pace</b> that is comfortable for the dog and handler.<br/>• There must be a <b>noticeable difference in the dog's speed from the slow or fast to normal pace.</b><br/><br/>",
      tips: "• The Normal Pace sign will only ever follow the Fast Pace, Slow Pace or Halt - Fast from Sit signs.<br/>• Ensure the <i>dog's</i> pace changes noticeably from the previous sign.",
      deductions: {
        minor: [
          "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        ],
        nq: [
          "No noticeable change in the dog's pace from the slow or fast pace to normal pace",
        ],
      },
    },
    {
      name: "121",
      icon: require("../assets/slides/121.jpg"),
      title: "121. Call Front - Finish Right",
      description:
        "• While heeling, the handler stops forward motion and calls the dog directly to the front position.<br/> • The handler may take up to four steps backward as the <b>dog turns and moves to sit in front position</b>.<br/>• The handler then cues the dog to <b>move to the handler’s right and around their body to sit in heel position</b>.<br/>• The handler’s feet should remain stationary while the dog moves around them.<br/>• The handler cues the dog to <b>heel forward from the sit position.</b><br/><br/>",
      tips: "• Keep your feet still during the finish.<br/>• You may wish to pause after the dog has returned to heel position so that the Judge can clearly see that the dog has completed the sit before heeling forward or reaching for food reinforcement",
      reward: true,
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of front position (no deductions for less than a 45-degree angle)",
          "Dog sits more than 45-degrees out of heel position during the finish (no deductions for less than a 45-degree angle)",
          "Handler moves their feet during the finish",
          "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
        ],
        substantial: [
          "Handler moves left or right to position themselves in front of the dog to create a straight front",
        ],

        nq: [
          "Dog sits 90-degrees or more out of heel position or out of front position",
          "Dog does not sit in front position",
          "Dog not in a sit before heeling forward",
          "Dog does not move around the handler to the right to sit in heel position",
          "Dog assumes a position not required by the exercise",
          "Handler touches the dog to put them into a position",
          "Handler walks into the dog to force the dog to move during a forward/finish (considered a physical correction)",
          "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket",
        ],
      },
    },
    {
      name: "122",
      icon: require("../assets/slides/122.jpg"),
      title: "122. Call Front - Finish Left",
      description:
        "• While heeling, the handler stops forward motion and calls the dog directly to the front position.<br/> • The handler may take up to four steps backward as the <b>dog turns and moves to sit in front position</b>.<br/>• The handler then cues the dog to <b>move to the handler’s left directly to sit in heel position</b>.<br/>• The handler’s feet should remain stationary while the dog moves around them.<br/>• The handler cues the dog to <b>heel forward from the sit position.</b><br/><br/>",
      tips: "• Keep your feet still during the finish.<br/>• You may wish to pause after the dog has returned to heel position so that the Judge can clearly see that the dog has completed the sit before heeling forward or reaching for food reinforcement.",
      reward: true,
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of front position (no deductions for less than a 45-degree angle)",
          "Dog sits more than 45-degrees out of heel position during the finish (no deductions for less than a 45-degree angle)",
          "Handler moves their feet during the finish",
          "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
        ],
        substantial: [
          "Handler moves left or right to position themselves in front of the dog to create a straight front",
        ],

        nq: [
          "Dog sits 90-degrees or more out of heel position or out of front position",
          "Dog does not sit in front position",
          "Dog not in a sit before heeling forward",
          "Dog does not move to the left to sit in heel position",
          "Dog assumes a position not required by the exercise",
          "Handler touches the dog to put them into a position",
          "Handler walks into the dog to force the dog to move during a forward/finish (considered a physical correction)",
          "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket",
        ],
      },
    },
    {
      name: "123",
      icon: require("../assets/slides/123.jpg"),
      title: "123. Call Front - Forward Right",
      description:
        "• While heeling, the handler stops forward motion and calls the dog directly to the front position.<br/> • The handler may take up to four steps backward as the <b>dog turns and moves to sit in front position</b>.<br/>• The handler then cues the dog to <b>move to the handler’s right, around and behind them, moving towards heel position</b>.<br/>• As the dog is returning to heel position, the handler cues the dog to heel and moves forward. <b>The dog does not sit in heel position.</b><br/><br/>",
      tips: "• You may begin to walk forward as soon as the dog is no longer on your path, on their way to heel position.",
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of front position (no deductions for less than a 45-degree angle)",
          "Handler moves their feet to perform the forward",
        ],
        substantial: [
          "Handler moves left or right to position themselves in front of the dog to create a straight front",
        ],

        nq: [
          "Dog sits 90-degrees or more out of front position",
          "Dog does not sit in front position",
          "Dog sits before heeling forward",
          "Dog does not move around the handler to the right to assume heel position",
          "Dog assumes a position not required by the exercise",
          "Handler touches the dog to put them into a position",
          "Handler walks into the dog to force the dog to move during a forward/finish (considered a physical correction)",
        ],
      },
    },
    {
      name: "124",
      icon: require("../assets/slides/124.jpg"),
      title: "124. Call Front - Forward Left",
      description:
        "• While heeling, the handler stops forward motion and calls the dog directly to the front position.<br/> • The handler may take up to four steps backward as the <b>dog turns and moves to sit in front position</b>.<br/>• The handler then cues the dog to <b>move to the handler’s left directly towards heel position</b>.<br/>• As the dog is returning to heel position, the handler cues the dog to heel and moves forward. <b>The dog does not sit in heel position.</b><br/><br/>",
      tips: "• You may begin to walk forward as soon as the dog has started to return to heel position and is no longer in your path.",
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of front position (no deductions for less than a 45-degree angle)",
          "Handler moves their feet to perform the forward",
        ],
        substantial: [
          "Handler moves left or right to position themselves in front of the dog to create a straight front",
        ],

        nq: [
          "Dog sits 90-degrees or more out of front position",
          "Dog does not sit in front position",
          "Dog sits before heeling forward",
          "Dog does not move to the handler's left to assume heel position",
          "Dog assumes a position not required by the exercise",
          "Handler touches the dog to put them into a position",
          "Handler walks into the dog to force the dog to move during a forward/finish (considered a physical correction)",
        ],
      },
    },
    {
      name: "125",
      icon: require("../assets/slides/125.jpg"),
      title: "125. Call Front - Handler Returns to Heel",
      description:
        "• While heeling, the handler stops forward motion and calls the dog directly to the front position.<br/> • The handler may take up to four steps backward as the <b>dog turns and moves to sit in front position</b>.<br/>• The <b>dog must remain in a sit</b> while the <b>handler walks around behind the dog in a counterclockwise direction to return to heel position</b>.<br/>• The handler may pause upon return to heel position.<br/>• This station will result in a 180-degree change of direction.<br/>• The handler cues the dog to <b>heel forward from the sit position</b>.<br/><br/>",
      tips: "• If the dog is sitting too close to a sign, making it difficult to walk between the dog and the sign, you may wish to walk around both the dog and the sign while returning to heel position.<br/> • Some movement during the stay is not a deduction, provided the dog remains in a sit and does not turn their body.",
      reward: true,
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of front position (no deductions for less than a 45-degree angle)",
          "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
        ],
        substantial: [
          "Handler moves left or right to position themselves in front of the dog to create a straight front",
        ],

        nq: [
          "Dog sits 90-degrees or more out of front position or does not sit in front position",
          "Handler does not walk around the dog in a counterclockwise direction to heel position",
          "Dog does not maintain the sit while handler walks around them (some paw movement ok)",
          "Dog not in a sit when cued to heel forward",
          "Dog assumes a position not required by the exercise",
          "Handler touches the dog to put them into a position",
          "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket",
        ],
      },
    },
    {
      name: "126",
      icon: require("../assets/slides/126.jpg"),
      title: "126. Spiral Right - Dog Outside",
      excludeFromPractice: true,
      description:
        "• While heeling, <b>the team moves around the cones in a clockwise direction</b>, turning to their right when moving around each of the cones.<br/>• The team <b>pass the first and second cones and proceeds to and around the third one</b>, then <b>return to loop the first cone</b>.<br/>• The team then <b>proceeds to and around the second cone</b> and returns to <b>loop the first cone</b> a second time.<br/>• The team finally <b>circles the first cone by passing between the first and second cones</b> to exit the station.<br/><br/>",
      tips: "• There are no deductions for a cone that is moved by a wagging tail!<br/>• Think of the first cone as the anchor cone which you must circle each time around.<br/>• At least one cone exercise is required in every Novice course.",
      deductions: {
        minor: [
          "Handler or dog stop forward motion",
          "Dog is out of heel position. Forging (mid-point of the dog's body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
          "Minor movement (bump) of a cone",
        ],
        substantial: ["Knocking over or substantial movement of a cone"],

        nq: [
          "The team does not heel in a clockwise direction around the cones and in the correct pattern",
          "Dog assumes a position not requested (eg. sit)",
        ],
      },
    },
    {
      name: "127",
      icon: require("../assets/slides/127.jpg"),
      title: "127. Spiral Left - Dog Inside",
      excludeFromPractice: true,
      description:
        "• While heeling, <b>the team moves around the cones in a counterclockwise direction</b>, turning to their left when moving around each of the cones.<br/>• The team <b>pass the first and second cones and proceeds to and around the third one</b>, then <b>return to loop the first cone</b>.<br/>• The team then <b>proceeds to and around the second cone</b> and returns to <b>loop the first cone</b> a second time.<br/>• The team finally <b>circles the first cone by passing between the first and second cones</b> to exit the station.<br/><br/>",
      tips: "• Be sure to give your dog enough space from the cones that they are not knocked over. You do not have to do tight turns around them.<br/> • There are no deductions for a cone that is moved by a wagging tail!<br/>• Think of the first cone as the anchor cone which you must circle each time around<br/>• At least one cone exercise is required in every Novice course.",
      deductions: {
        minor: [
          "Handler or dog stop forward motion",
          "Dog is out of heel position. Forging (mid-point of the dog's body is past the handler's side), Wide (dog is more than an arm's length away from the handler's side) or Lagging (dog's nose drops behind the handler’s side)",
          "Minor movement (bump) of a cone",
        ],
        substantial: ["Knocking over or substantial movement of a cone"],

        nq: [
          "The team does not heel in a counterclockwise direction around the cones and in the correct pattern",
          "Dog assumes a position not requested (eg. sit)",
        ],
      },
    },
    {
      name: "128",
      icon: require("../assets/slides/128.jpg"),
      title: "128. Weave Once",
      excludeFromPractice: true,
      description:
        "• While heeling, <b>the team enters the pattern with the first cone on the team’s left</b>.<br/>• The team <b>weaves through the cones</b> and exits the station.<br/><br/>",
      tips: "• You do not need to make tight turns around the cones - instead, you can give your dog more space from the cone that is on their side, so that they are less likely to bump into it.<br/>• There are no deductions for a cone that is moved by a wagging tail!<br/>• At least one cone exercise is required in every Novice course.",
      deductions: {
        minor: [
          "Handler or dog stop forward motion",
          "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
          "Minor movement (bump) of a cone",
        ],
        substantial: ["Knocking over or substantial movement of a cone"],

        nq: [
          "The team does not enter the pattern with the first cone on the team's left",
          "The team does not weave through all cones before exiting the pattern",
          "Dog assumes a position not requested (eg. sit)",
        ],
      },
    },
    {
      name: "129",
      icon: require("../assets/slides/129.jpg"),
      title: "129. Weave Twice",
      excludeFromPractice: true,
      description:
        "• While heeling, <b>the team enters the pattern with the first cone on the team’s left</b>.<br/>• The team <b>weaves continuously through the cones, loops around the end cone and weaves back to the beginning of the pattern</b>.<br/><br/>",
      tips: "• This sign was previously referred to as 'Straight Figure 8' and is executed in the same manner.<br/>• You do not need to make tight turns around the cones - instead, you can give your dog more space from the cone that is on their side, so that they are less likely to bump into it.<br/>• There are no deductions for a cone that is moved by a wagging tail!<br/>• At least one cone exercise is required in every Novice course.",
      deductions: {
        minor: [
          "Handler or dog stop forward motion",
          "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
          "Minor movement (bump) of a cone",
        ],
        substantial: ["Knocking over or substantial movement of a cone"],

        nq: [
          "The team does not enter the pattern with the first cone on the team's left",
          "The team does not weave through all cones, loop around the end cone, and weave back through the cones",
          "Dog assumes a position not requested (eg. sit)",
        ],
      },
    },
  ],
};

export default Novice;
