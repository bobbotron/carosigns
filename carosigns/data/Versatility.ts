import { Level } from "../types/Sign";

const Versatility: Level = {
  name: "Versatility",
  type: "normal",
  signs: [
    {
      name: "Start Right",
      icon: require("../../assets/slides/StartonRight.jpg"),
      title: "Start Right",
      hideNameOnGrid: true,
      description:
        "• With the dog on the right, the <b>team heels past the Start station</b> and timing begins.<br/>• There is no other communication from the Judge throughout the course.<br/><br/>",
      tips: "• Orange signs are always performed with the dog on the right hand side, or include a change in heeling side.<br/>• Handlers may choose to either have the dog sit before the Start sign or use a moving start (heel past the Start sign without stopping).",
      deductions: {
        minor: [
          "Initiation of the sign outside of a radius of two feet from the station sign",
          "Out of heel position",
          "Dog interfering with handler (bumping, crowding, jumping up on handler)",
        ],
        nq: ["Dog heeling on the left"],
      },
    },
    {
      name: "Finish Right",
      icon: require("../../assets/slides/FinishonRight.jpg"),
      hideNameOnGrid: true,
      title: "Finish Right",
      description:
        "• With the dog on the right, the <b>team heels past the Ftart station</b> and timing begins.<br/><br/>",
      tips: "• There is no penalty for crossing the Finish station with the sign on the handler's left side.<br/>",
      deductions: {
        minor: [
          "Initiation of the sign outside of a radius of two feet from the station sign",
          "Out of heel position",
          "Dog interfering with handler (bumping, crowding, jumping up on handler)",
          "Loss of forward motion (dog stops)",
        ],
      },
    },
    {
      name: "400",
      icon: require("../../assets/slides/400.jpg"),
      title: "400. Turn In",
      description:
        "• The dog and handler <b>turn in towards each other and resume heeling with the dog on the opposite side of the handler.</b><br/>• This station will result in a 180-degree change of direction and a change of side.<br/><br/>",
      tips: "• The dog and handler should turn in simutaneously<br>• Change of side signs are always orange, regardless of whether the team approaches the sign with dog heeling on the left or right. Which side the dog is on when the station is initiated is determined by the previous sign. By performing the change of side exercise, the dog will end up on the opposite side and will proceed to the next sign on the new side.",
      deductions: {
        minor: [
          "Out of heel position",
          "Loss of forward motion",
          "Dog interfering with handler",
        ],
        nq: [
          "Dog and handler do not turn in towards one another or do not turn in at the same time",
          "Change of heeling side does not occur",
        ],
      },

      changeSide: true,
    },
    {
      name: "401",
      icon: require("../../assets/slides/401.jpg"),
      title: "401. Turn Away",
      description:
        "• The dog and handler <b>turn away from each other and resume heeling with the dog on the opposite side of the handler</b>.<br/>• This station will result in a 180-degree change of direction and a change of side.<br/><br/>",
      tips: "• The dog and handler should turn away simutaneously<br>• Change of side signs are always orange, regardless of whether the team approaches the sign with dog heeling on the left or right. Which side the dog is on when the station is initiated is determined by the previous sign. By performing the change of side exercise, the dog will end up on the opposite side and will proceed to the next sign on the new side.",
      deductions: {
        minor: [
          "Out of heel position",
          "Loss of forward motion",
          "Dog interfering with handler",
        ],
        nq: [
          "Dog and handler do not turn away from one another or do not turn away at the same time",
          "Change of heeling side does not occur",
        ],
      },

      changeSide: true,
    },
    {
      name: "402",
      icon: require("../../assets/slides/402.jpg"),
      title: "402. Side-by-Side Right",
      description:
        "• The dog and handler perform <b>parallel right turns</b> and <b>resume heeling with the dog on the opposite side of the handler.</b><br>• This station will result in a 180-degree change of direction and a change of side.<br/><br/>",
      tips: "• The dog and handler should turn simutaneously<br>• Change of side signs are always orange, regardless of whether the team approaches the sign with dog heeling on the left or right. Which side the dog is on when the station is initiated is determined by the previous sign. By performing the change of side exercise, the dog will end up on the opposite side and will proceed to the next sign on the new side.",
      deductions: {
        minor: [
          "Out of heel position",
          "Loss of forward motion",
          "Dog interfering with handler",
        ],
        nq: [
          "Dog and handler do not make parallel right turns or do not do so at the same time",
          "Change of heeling side does not occur",
        ],
      },

      changeSide: true,
    },
    {
      name: "403",
      icon: require("../../assets/slides/403.jpg"),
      title: "403. Side-by-Side Left",
      description:
        "• The dog and handler perform <b>parallel left turns</b> and <b>resume heeling with the dog on the opposite side of the handler.</b><br>• This station will result in a 180-degree change of direction and a change of side.<br/><br/>",
      tips: "• The dog and handler should turn simutaneously<br>• Change of side signs are always orange, regardless of whether the team approaches the sign with dog heeling on the left or right. Which side the dog is on when the station is initiated is determined by the previous sign. By performing the change of side exercise, the dog will end up on the opposite side and will proceed to the next sign on the new side.",
      deductions: {
        minor: [
          "Out of heel position",
          "Loss of forward motion",
          "Dog interfering with handler",
        ],
        nq: [
          "Dog and handler do not make parallel left turns or do not do so at the same time",
          "Change of heeling side does not occur",
        ],
      },

      changeSide: true,
    },
    {
      name: "404",
      icon: require("../../assets/slides/404.jpg"),
      title: "404. Cross in Front",
      description:
        "• While heeling forward, the handler cues the <b>dog to cross in front</b> and <b>resume heeling with the dog on the opposite side of the handler.</b><br/>• The handler may pause as needed to allow dog to cross.<br/>• This station will result in a change of side.<br/><br/>",
      tips: "• You are permitted to pause (briefly stop forward motion) for the dog to cross in front of you.<br/>• Change of side signs are always orange, regardless of whether the team approaches the sign with dog heeling on the left or right. Which side the dog is on when the station is initiated is determined by the previous sign. By performing the change of side exercise, the dog will end up on the opposite side and will proceed to the next sign on the new side.",
      deductions: {
        minor: [
          "Out of heel position (except during the cross)",
          "Loss of forward motion (brief pause allowed during cross)",
          "Dog interfering with handler",
        ],
        nq: [
          "Dog does not change heeling sides by crossing in front of the handler",
        ],
      },

      changeSide: true,
    },
    {
      name: "405",
      icon: require("../../assets/slides/405.jpg"),
      title: "405. Cross Behind",
      description:
        "• While heeling forward, the handler cues the <b>dog to cross behind</b> and <b>resume heeling with the dog on the opposite side of the handler.</b><br/>• This station will result in a change of side.<br/><br/>",
      tips: "• You are permitted to pause (briefly stop forward motion) for the dog to cross in front of you.<br/>• Change of side signs are always orange, regardless of whether the team approaches the sign with dog heeling on the left or right. Which side the dog is on when the station is initiated is determined by the previous sign. By performing the change of side exercise, the dog will end up on the opposite side and will proceed to the next sign on the new side.",
      deductions: {
        minor: [
          "Out of heel position (except during the cross)",
          "Loss of forward motion (brief pause allowed during cross)",
          "Dog interfering with handler",
        ],
        nq: [
          "Dog does not change heeling sides by crossing behind the handler",
        ],
      },

      changeSide: true,
    },
    {
      name: "406",
      icon: require("../../assets/slides/406.jpg"),
      title: "406. Weave Through Legs",
      description:
        "• While heeling forward, the handler cues the <b>dog to weave through their legs to change sides.</b><br/>• The handler may pause as needed to allow dog to weave.<br/><br/>",
      tips: "• Handlers that feel that their dog is too large to cross between their legs may request an accommodation. A different change of side sign will be substituted.<br/>• You are permitted to pause (briefly stop forward motion) for the dog to weave between your legs.<br/>• Change of side signs are always orange, regardless of whether the team approaches the sign with dog heeling on the left or right. Which side the dog is on when the station is initiated is determined by the previous sign. By performing the change of side exercise, the dog will end up on the opposite side and will proceed to the next sign on the new side.",
      deductions: {
        minor: [
          "Out of heel position (except during the cross)",
          "Loss of forward motion (brief pause allowed during cross)",
          "Dog interfering with handler",
        ],
        nq: [
          "Dog does not change heeling sides by crossing between the handler's legs",
        ],
      },

      changeSide: true,
    },
    {
      name: "407",
      icon: require("../../assets/slides/407.jpg"),
      title: "407. Spin Left - Right Turn - Cross Behind",
      description:
        "• While heeling with the dog on the left, the <b>dog spins in a circle in place to the left</b><br/>• The <b>handler turns right</b> and cues the <b>dog to cross behind</b> and <b>resume heeling with the dog on the right side of the handler.</b><br/>• The handler may pause while the dog completes the spin.<br/>• This station results in a 90-degree change of direction to the right and a change of side from left to right.<br/><br/>",
      tips: "• The handler may come to a complete stop (briefly) while the dog spins.",
      deductions: {
        minor: [
          "Dog out of heel position",
          "Initiation of signs outside of a radius of two feet from the station sign",
        ],
        nq: [
          "Dog does not spin to the left",
          "Dog performs a behaviour not required for the sign, such as a sit or spin right",
          "Handler does not turn right",
          "Dog does not cross behind the handler to heel on the right side",
        ],
      },

      changeSide: true,
    },
    {
      name: "408",
      icon: require("../../assets/slides/408.jpg"),
      title: "408. Spin Right - Left Turn - Cross Behind",
      description:
        "• While heeling with the dog on the right</b>, the <b>dog spins in a circle in place to the right</b><br/>• The <b>handler turns left</b> and cues the <b>dog to cross behind</b> and <b>resume heeling with the dog on the left side of the handler.</b><br/>• The handler may pause while the dog completes the spin.<br/>• This station results in a 90-degree change of direction to the right and a change of side from right to left.<br/><br/>",
      tips: "• The handler may come to a complete stop (briefly) while the dog spins.",
      deductions: {
        minor: [
          "Dog out of heel position",
          "Initiation of signs outside of a radius of two feet from the station sign",
        ],
        nq: [
          "Dog does not spin to the right",
          "Dog performs a behaviour not required for the sign, such as a sit or spin left",
          "Handler does not turn left",
          "Dog does not cross behind the handler to heel on the left side",
        ],
      },

      changeSide: true,
    },
    {
      name: "409",
      icon: require("../../assets/slides/409.jpg"),
      title: "409. HALT - Stand",
      description:
        "• While <b>heeling with the dog on the right</b>, the team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.</b><br/> • The handler cues the dog to <b>stand</b>.<br/>• The handler cues the dog to <b>heel forward from the stand position</b>.<br/><br/>",
      tips: "",
      deductions: {
        minor: [
          "Dog sits or stands more than 45-degrees out of heel position",
          "Handler moves their feet during the stationary portion of the halt",
        ],
        nq: [
          "Dog sits or stands 90-degrees or more out of heel position",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise",
          "Handler touches the dog to put them into a position",
        ],
      },
    },
    {
      name: "410",
      icon: require("../../assets/slides/410.jpg"),
      title: "410. HALT - Down",
      description:
        "• While <b>heeling with the dog on the right</b>, the team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.</b><br/> • The handler cues the dog to <b>down</b>.<br/> • The handler cues the dog to <b>heel forward from the down position</b>.<br/><br/>",
      deductions: {
        minor: [
          "Dog sits or downs more than 45-degrees out of heel position",
          "Handler moves their feet during the stationary portion of the halt",
        ],
        nq: [
          "Dog sits or downs 90-degrees or more out of heel position",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise",
          "Dog not in a down when cued to heel forward",
          "Handler touches the dog to put them into a position",
        ],
      },
    },
    {
      name: "411",
      icon: require("../../assets/slides/411.jpg"),
      title: "411. HALT - Down - Sit",
      description:
        "• While <b>heeling with the dog on the right</b>, the team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.</b><br/> • The handler cues the dog to <b>down</b>.<br/> • The handler cues the dog to <b>sit</b>.<br/> • The handler cues the dog to <b>heel forward from the sit position</b>.<br/><br/>",
      deductions: {
        minor: [
          "Dog sits or downs more than 45-degrees out of heel position",
          "Handler moves their feet during the stationary portion of the halt",
        ],
        nq: [
          "Dog sits or downs 90-degrees or more out of heel position",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise (eg. a stand between the sit and down)",
          "Dog not in a sit when cued to heel forward",
          "Handler touches the dog to put them into a position",
        ],
      },
    },
    {
      name: "412",
      icon: require("../../assets/slides/412.jpg"),
      title: "412. HALT - Walk Around",
      description:
        "• While <b>heeling with the dog on the right</b>, the team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.</b><br/>•	The <b>dog must remain in a sit while the handler walks around the dog from nose to tail and back to heel position.</b><br>• The handler may pause upon return to heel position.<br/> • The handler cues the dog to <b>heel forward from the sit position</b>.<br/><br/>",
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of heel position",
          "Handler moves their feet during the stationary portion of the halt",
        ],
        nq: [
          "Dog sits 90-degrees or more out of heel position during the halt",
          "Dog turns their body as the handler walks around (slight paw movement is ok)",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise (eg. a down or stand during the walk around)",
          "Dog not in a sit when cued to heel forward",
          "Handler touches the dog to put them into a position",
        ],
      },
    },
    {
      name: "413",
      icon: require("../../assets/slides/413.jpg"),
      title: "413. HALT - Down - Walk Around",
      description:
        "• While <b>heeling with the dog on the right</b>, the team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.</b><br/> • The handler cues the <b> dog to down</b>.<br/>• The <b>dog must remain in a down while the handler walks around the dog from nose to tail and back to heel position.</b>.<br/> • The handler may pause upon return to heel position.<br/> • The handler cues the dog to <b>heel forward from the down position</b>.<br/><br/>",
      deductions: {
        minor: [
          "Dog sits or down more than 45-degrees out of heel position",
          "Handler moves their feet during the stationary portion of the halt",
        ],
        nq: [
          "Dog sits or down 90-degrees or more out of heel position",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise (eg. a sit or stand during the walk around)",
          "Dog not in a down when cued to heel forward",
          "Handler touches the dog to put them into a position",
        ],
      },
    },
    {
      name: "414",
      icon: require("../../assets/slides/414.jpg"),
      title: "414. HALT - 1, 2, 3 Steps Forward",
      description:
        "• While <b>heeling with the dog on the right</b>, the team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.</b><br/>•	The handler cues the dog to heel and takes one step forward, then halts; two steps and halts; then three steps and halts.<br>•	The <b>dog moves with the handler</b>, maintaining heel position, and <b>must sit each time the handler halts.<br>•	The team must meet the minimum required steps</b>.<br/> • Steps should be equal in length, in a natural stride for the team and finishing the exercise before the next station sign.<br/>• The handler cues the dog to <b>heel forward from the sit position</b>.<br/><br/>",
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of heel position",
          "Handler moves their feet during the stationary portion of the halt",
        ],
        substantial: [
          "Handler takes more than the required number of steps in the 1,2,3 Exercises (3 points for each part of the exercise where extra steps are taken)",
        ],

        nq: [
          "Handler takes fewer than the required number of steps (1,2 then 3)",
          "Dog sits 90-degrees or more out of heel position during any of the sits",
          "Failure of the dog to assume a cued position (eg. must sit at each halt)",
          "Dog assumes a position not required by the exercise",
          "Dog does not move simultaneously with the handler during the steps forward",
          "Dog not in a sit when cued to heel forward",
          "Handler touches the dog to put them into a position",
        ],
      },
    },
    {
      name: "415",
      icon: require("../../assets/slides/415.jpg"),
      title: "415. HALT - Side Step Left - HALT",
      description:
        "• While <b>heeling with the dog on the right</b>, the team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position</b>.<br/> • The handler takes <b>one side step directly to their left</b> while cueing the dog to heel.</br> • The dog <b>must move to the left simultaneously with the handler</b> remaining in heel position parallel to the handler and <b>sit</b> when the handler stops.<br/>• The handler cues the dog to <b>heel forward from the sit position.</b><br/><br/>",
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of heel position (no deductions for less than a 45-degree angle)",
          "Handler moves their feet during the stationary portion of the halt",
        ],
        substantial: [
          "Dog's shoulder in heel position but body greater than 45 degrees but not more than 90 degrees out of alignment(5 points)",
        ],
        nq: [
          "Dog sits 90-degrees or more out of heel position",
          "During the side step, the dog does not move simultaneously with the handler in heel position",
          "During the side step, the dog’s shoulders are in heel position but their body is more than 45-degrees out of position",
          "Dog not in a sit when cued to heel forward",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise",
          "Handler touches the dog to put them into a position",
        ],
      },
    },
    {
      name: "416",
      icon: require("../../assets/slides/416.jpg"),
      title: "416. HALT - 90 Pivot Right - HALT",
      description:
        "• While <b>heeling with the dog on the right</b>, the team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.<br/>• The handler pivots in place 90-degrees to their right and halts.</br>• The dog must move simultaneously with the handler and sit when the handler stops.</b><br/>• The handler cues the dog to <b>heel forward from the sit position</b>.<br/>• This station results in a 90-degree change of direction to the right.<br/>",
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of heel position",
          "Handler moves their feet during the stationary portion of the halt",
        ],
        nq: [
          "Dog sits 90-degrees or more out of heel position",
          "Handler takes a step rather than a 90-degree pivot (the ball of one foot or one heel should remain in place)",
          "Dog does not move simultaneously with the handler during the pivot",
          "Dog not in a sit when cued to heel forward",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise",
          "Handler touches the dog to put them into a position",
        ],
      },
    },
    {
      name: "417",
      icon: require("../../assets/slides/417.jpg"),
      title: "417. HALT - 90 Pivot Left - HALT",
      description:
        "• While <b>heeling with the dog on the right</b>, the team comes to a <b>halt</b> and the handler cues the dog to <b>sit in heel position.<br/>• The handler pivots in place 90-degrees to their left and halts.</br>• The dog moves</b> simultaneously <b>with the handler and sits when the handler halts.</b><br/>• The handler cues the dog <b>to heel forward from the sit position</b>.<br/>• This station results in a 90-degree change of direction to the left.<br/><br/>",
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of heel position",
          "Handler moves their feet during the stationary portion of the halt",
        ],
        nq: [
          "Dog sits 90-degrees or more out of heel position",
          "Handler takes a step rather than a 90-degree pivot (the ball of one foot or one heel must remain in place)",
          "Dog does not move simultaneously with the handler during the pivot",
          "Dog not in a sit when cued to heel forward",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise",
          "Handler touches the dog to put them into a position",
        ],
      },
    },
    {
      name: "418",
      icon: require("../../assets/slides/418.jpg"),
      title: "418. HALT - Turn Left 1 Step - HALT",
      description:
        "• While <b>heeling with the dog on the right</b>, the team comes to a <b>halt</b> and the handler cues the <b>dog to sit in heel position.</b><br/>• The handler cues the dog to heel, <b>turns to the left, takes one step in that direction and halts.</br>• The dog moves simultaneously with the handler and sit when the handler stops.</b><br/>• The handler cues the dog to <b>heel forward from the sit position.</b><br/><br/>",
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of heel position",
          "Handler moves their feet during the stationary portion of the halt",
        ],
        nq: [
          "Dog sits 90-degrees or more out of heel position",
          "Handler does not take one full step to the left",
          "Dog does not move simultaneously with the handler during the step",
          "Dog not in a sit when cued to heel forward",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise",
          "Handler touches the dog to put them into a position",
        ],
      },
    },
    {
      name: "419",
      icon: require("../../assets/slides/419.jpg"),
      title: "419. Right Turn",
      description:
        "• While <b>heeling with the dog on the right</b>, the team <b>makes a 90-degree turn to the right.</b><br/>• This station results in a 90-degree change of direction to the right.<br/><br/>",
      deductions: {
        minor: [
          "Initiation of the sign outside of a radius of two feet from the station sign",
          "Handler or dog stop forward motion",
          "Dog is out of heel position. Forging (mid-point of the dog's body is past the handler's side), Wide (dog is more than an arm's length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        ],
        nq: [
          "The team does not make a 90-degree turn in the correct direction",
          "Dog assumes a position not requested (eg. Sit)",
        ],
      },
    },
    {
      name: "420",
      icon: require("../../assets/slides/420.jpg"),
      title: "420. Left Turn",
      description:
        "• While <b>heeling with the dog on the right</b>, the team <b>makes a 90-degree turn to the left.</b><br/>• This station results in a 90-degree change of direction to the left.<br/><br/>",
      deductions: {
        minor: [
          "Initiation of the sign outside of a radius of two feet from the station sign",
          "Handler or dog stop forward motion",
          "Dog is out of heel position. Forging (mid-point of the dog's body is past the handler's side), Wide (dog is more than an arm's length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        ],
        nq: [
          "The team does not make a 90-degree turn in the correct direction",
          "Dog assumes a position not requested (eg. Sit)",
        ],
      },
    },
    {
      name: "421",
      icon: require("../../assets/slides/421.jpg"),
      title: "421. 180 Right",
      description:
        "• While <b>heeling with the dog on the right</b>, the team <b>makes a 180-degree turn to the right.</b><br/>• The handlers’ path while turning should be on or within a diameter of 2 feet and should be in a straight line to and from the station sign for a minimum of one stride before and after turning.<br/>• This station results in a 180-degree change of direction.<br/><br/>",
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
      name: "422",
      icon: require("../../assets/slides/422.jpg"),
      title: "422. 180 Left",
      description:
        "• While <b>heeling with the dog on the right</b>, the team <b>makes a 180-degree turn to the left.</b><br/>• The handlers’ path while turning should be on or within a diameter of 2 feet and should be in a straight line to and from the station sign for a minimum of one stride before and after turning.<br/>• This station results in a 180-degree change of direction.<br/><br/>",
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
      name: "423",
      icon: require("../../assets/slides/423.jpg"),
      title: "423. 270 Right",
      description:
        "• While <b>heeling with the dog on the right</b>, the team <b>makes a 270-degree turn to the right.</b><br/>• The handlers’ path while turning should be on or within a diameter of 2 feet.<br/>• This station results in a 90-degree change of direction to the left.<br/><br/>",
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
      name: "424",
      icon: require("../../assets/slides/424.jpg"),
      title: "424. 270 Left",
      description:
        "• While <b>heeling with the dog on the right</b>, the team <b>makes a 270-degree turn to the left.</b><br/>• The handlers’ path while turning should be on or within a diameter of 2 feet.<br/>• This station results in a 90-degree change of direction to the right.<br/><br/>",
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
      name: "425",
      icon: require("../../assets/slides/425.jpg"),
      title: "425. 360 Right",
      description:
        "• While <b>heeling with the dog on the right</b>, the team <b>makes a 360-degree turn to the right.</b><br/>• The handlers’ path while turning should be on or within a diameter of 2 feet.<br/><br/>,",
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
      name: "426",
      icon: require("../../assets/slides/426.jpg"),
      title: "426. 360 Left",
      description:
        "• While <b>heeling with the dog on the right</b>, the team <b>makes a 360-degree turn to the left.</b><br/>• The handlers’ path while turning should be on or within a diameter of 2 feet.<br/><br/>",
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
      name: "427",
      icon: require("../../assets/slides/427.jpg"),
      title: "427. Slow",
      description:
        "• While <b>heeling with the dog on the right</b>, the team decreases its pace so that there is a <b>noticeable difference in the dogs’ speed from the normal pace.<br/>• The slow pace is maintained continuously until the next station.</b><br/>• This station is followed by either Fast, Normal or the Finish station.</br><br/>",
      deductions: {
        minor: [
          "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
        ],
        nq: [
          "No noticeable change in the dog's pace",
          "Dog assumes an incorrect position (eg. a sit)",
          "Slow pace not maintained continuously until the next sign",
        ],
      },
    },
    {
      name: "428",
      icon: require("../../assets/slides/428.jpg"),
      title: "428. Fast",
      description:
        "• While <b>heeling with the dog on the right</b>, the team increases its pace</b> so that there is a <b>noticeable difference in the dog’s speed from the normal pace<br>• The fast pace is maintained continuously until the next station.</b><br/>• This station is followed by either Slow, Normal or the Finish station.</br><br/>",
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
      name: "429",
      icon: require("../../assets/slides/429.jpg"),
      title: "429. Normal",
      description:
        "• While <b>heeling with the dog on the right</b>, the team moves forward at a <b>normal pace</b> that is comfortable for the dog and handler.<br/>• There must be a <b>noticeable difference in the dogs’ speed from the slow or fast to normal pace.</b><br/><br/>",
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
      name: "430",
      icon: require("../../assets/slides/430.jpg"),
      title: "430. Call Front - Finish Right",
      description:
        "• While <b>heeling with the dog on the right</b>,the handler stops forward motion and calls the dog directly to the front position.<br/> • The handler may take up to four steps backward as the <b>dog turns and moves to sit in front position</b>.<br/>• The handler then cues the dog to <b>move to the handler’s right directly to sit in heel position</b>.<br/>• The handler’s feet should remain stationary while the dog moves around them.<br/>• The handler cues the dog to <b>heel forward from the sit position.</b><br/><br/>",
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of front position",
          "Dog sits more than 45-degrees out of heel position during the finish",
          "Handler moves their feet during the finish",
        ],
        substantial: [
          "Handler moves left or right to position themselves in front of the dog to create a straight front",
        ],

        nq: [
          "Dog sits 90-degrees or more out of heel position or out of front position",
          "Dog does not sit in front position",
          "Dog not in a sit before heeling forward",
          "Dog does not move directly to the handler's right to sit in heel position",
          "Dog assumes a position not required by the exercise",
          "Handler touches the dog to put them into a position",
          "Handler walks into the dog to force the dog to move during a forward/finish (considered a physical correction)",
        ],
      },
    },
    {
      name: "431",
      icon: require("../../assets/slides/431.jpg"),
      title: "431. Call Front - Finish Left",
      description:
        "• While <b>heeling with the dog on the right</b>,the handler stops forward motion and calls the dog directly to the front position.<br/>• The handler may take up to four steps backward as the <b>dog turns and moves to sit in front position</b>.<br/>• The handler then cues the dog to <b> move to the handler’s left and around their body to sit in heel position on the right side</b>.<br/>• The handler’s feet should remain stationary while the dog moves around them.<br/>• The handler cues the dog to <b>heel forward from the sit position.</b><br/><br/>",
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of front position",
          "Dog sits more than 45-degrees out of heel position during the finish",
          "Handler moves their feet during the finish",
        ],
        substantial: [
          "Handler moves left or right to position themselves in front of the dog to create a straight front",
        ],

        nq: [
          "Dog sits 90-degrees or more out of heel position or out of front position",
          "Dog does not sit in front position",
          "Dog not in a sit before heeling forward",
          "Dog does not go around the handler to the left to sit in heel position on the right",
          "Dog assumes a position not required by the exercise",
          "Handler touches the dog to put them into a position",
          "Handler walks into the dog to force the dog to move during a forward/finish (considered a physical correction)",
        ],
      },
    },
    {
      name: "432",
      icon: require("../../assets/slides/432.jpg"),
      title: "432. Call Front - Forward Right",
      description:
        "• While <b>heeling with the dog on the right</b>, the handler stops forward motion and calls the dog directly to the front position.<br/> • The handler may take up to four steps backward as the <b>dog turns and moves to sit in front position</b>.<br/>• The handler then cues the dog to <b>move to the handler’s right directly toward heel position</b>.<br/>• As the dog  returns to heel position, the handler cues the dog to heel and moves forward.<br>• <b>The dog does not sit in heel position.</b><br/><br/>",
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of front position",
          "Handler moves their feet to perform the forward",
        ],
        substantial: [
          "Handler moves left or right to position themselves in front of the dog to create a straight front",
        ],

        nq: [
          "Dog sits 90-degrees or more out of front position",
          "Dog does not sit in front position",
          "Dog sits before heeling forward",
          "Dog does not move directly to the handler's right to assume heel position",
          "Dog assumes a position not required by the exercise",
          "Handler touches the dog to put them into a position",
          "Handler walks into the dog to force the dog to move during a forward/finish (considered a physical correction)",
        ],
      },
    },
    {
      name: "433",
      icon: require("../../assets/slides/433.jpg"),
      title: "433. Call Front - Forward Left",
      description:
        "• While <b>heeling with the dog on the right</b>, the handler stops forward motion and calls the dog directly to the front position.<br/> • The handler may take up to four steps backward as the <b>dog turns and moves to sit in front position</b>.<br/>• The handler then cues the dog to <b>move to the handler’s left, around and behind them moving toward heel position on the right</b>.<br/>• As the dog is returning to heel position, the handler cues the dog to heel and moves forward.<br>• <b>The dog does not sit in heel position.</b><br/><br/>",
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of front position",
          "Handler moves their feet to perform the forward",
        ],
        substantial: [
          "Handler moves left or right to position themselves in front of the dog to create a straight front",
        ],

        nq: [
          "Dog sits 90-degrees or more out of front position",
          "Dog does not sit in front position",
          "Dog sits before heeling forward",
          "Dog does not move to the left, around the handler, to assume heel position on the right",
          "Dog assumes a position not required by the exercise",
          "Handler touches the dog to put them into a position",
          "Handler walks into the dog to force the dog to move during a forward/finish (considered a physical correction)",
        ],
      },
    },
    {
      name: "434",
      icon: require("../../assets/slides/434.jpg"),
      title: "434. Call Front - Handler Returns to Heel",
      description:
        "• While <b>heeling with the dog on the right</b>, the handler stops forward motion and calls the dog directly to the front position.<br/> • The handler may take up to four steps backward as the <b>dog turns and moves to sit in front position</b>.<br/>• The <b>dog must remain in a sit</b> while the <b>handler walks around behind the dog in a clockwise direction to return to heel position</b>.<br/>• The handler may pause upon return to heel position.<br/>• The handler cues the dog to <b>heel forward from the sit position</b>.<br>•	This station will result in a 180-degree change of direction.<br/><br/>",
      deductions: {
        minor: ["Dog sits more than 45-degrees out of front position"],

        substantial: [
          "Handler moves left or right to position themselves in front of the dog to create a straight front",
        ],

        nq: [
          "Dog sits 90-degrees or more out of front position or does not sit in front position",
          "Handler does not walk around the dog in a clockwise direction to heel position",
          "Dog does not maintain the sit while handler walks around them (some paw movement ok)",
          "Dog not in a sit when cued to heel forward",
          "Dog assumes a position not required by the exercise",
          "Handler touches the dog to put them into a position",
        ],
      },
    },
    {
      name: "435",
      icon: require("../../assets/slides/435.jpg"),
      title: "435. Spiral Right",
      description:
        "• While <b>heeling with the dog on the right, the team moves around the cones in a clockwise direction</b>, turning to their right when moving around each of the cones.<br/>• The team <b>pass the first and second cones and proceeds to and around the third one</b>, then <b>return to loop the first cone</b>.<br/>• The team then <b>proceeds to and around the second cone</b> and returns to <b>loop the first cone</b> a second time.<br/>• The team finally <b>circles the first cone by passing between the first and second cones</b> to exit the station.<br/><br/>",
      tips: "• The dog will be on the inside of the turn.",
      deductions: {
        minor: [
          "Handler or dog stop forward motion",
          "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
          "Minor movement (bump) of a cone",
        ],
        substantial: [
          "Knocking over or substantial movement of a cone (3 points)",
        ],
        nq: [
          "The team does not heel in a clockwise direction around the cones and in the correct pattern",
          "Dog assumes a position not requested (eg. sit)",
        ],
      },
    },
    {
      name: "436",
      icon: require("../../assets/slides/436.jpg"),
      title: "436. Spiral Left",
      description:
        "• While <b>heeling with the dog on the right, the team moves around the cones in a counterclockwise direction</b>, turning to their left when moving around each of the cones.<br/>• The team <b>pass the first and second cones and proceeds to and around the third one</b>, then <b>return to loop the first cone</b>.<br/>• The team then <b>proceeds to and around the second cone</b> and returns to <b>loop the first cone</b> a second time.<br/>• The team finally <b>circles the first cone by passing between the first and second cones</b> to exit the station.<br/><br/>",
      tips: "• The dog will be on the outside of the turn.",
      deductions: {
        minor: [
          "Handler or dog stop forward motion",
          "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
          "Minor movement (bump) of a cone",
        ],
        substantial: [
          "Knocking over or substantial movement of a cone (3 points)",
        ],
        nq: [
          "The team does not heel in a counterclockwise direction around the cones and in the correct pattern",
          "Dog assumes a position not requested (eg. sit)",
        ],
      },
    },
    {
      name: "437",
      icon: require("../../assets/slides/437.jpg"),
      title: "437. Weave Once",
      description:
        "• While <b>heeling with the dog on the right, the team enters the pattern with the first cone on the team’s left</b>.<br/>• The team <b>weaves through the cones</b> and exits the station.<br/><br/>",
      deductions: {
        minor: [
          "Handler or dog stop forward motion",
          "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
          "Minor movement (bump) of a cone",
        ],
        substantial: [
          "Knocking over or substantial movement of a cone (3 points)",
        ],

        nq: [
          "The team does not enter the pattern with the first cone on the team's left",
          "The team does not weave through all cones before exiting the pattern",
          "Dog assumes a position not requested (eg. sit)",
        ],
      },
    },
    {
      name: "438",
      icon: require("../../assets/slides/438.jpg"),
      title: "428. Weave Twice",
      description:
        "• While <b>heeling with the dog on the right, the team enters the pattern with the first cone on the team’s left</b>.<br/>• The team <b>weaves continuously through the cones, loops around the end cone and weaves back to the beginning of the pattern</b>.<br/><br/>",
      deductions: {
        minor: [
          "Handler or dog stop forward motion",
          "Dog is out of heel position. Forging (mid-point of the dog’s body is past the handler's side), Wide (dog is more than an arm’s length away from the handler's side) or Lagging (dog’s nose drops behind the handler’s side)",
          "Minor movement (bump) of a cone",
        ],
        substantial: [
          "Knocking over or substantial movement of a cone (3 points)",
        ],

        nq: [
          "The team does not enter the pattern with the first cone on the team's left",
          "The team does not weave through all cones, loop around the end cone, and weave back through the cones",
          "Dog assumes a position not requested (eg. sit)",
        ],
      },
    },
    {
      name: "439",
      icon: require("../../assets/slides/439.jpg"),
      title: "439. Jump",
      description:
        "• The jump may be either a solid or bar jump.<br/>• <b>While heeling on the right side, the team enters the send zone where the dog is sent to the jump.</b><br/>• Once the dog has been sent, the handler may stay in the send zone or proceed along the <b>left of the 6-foot line</b>.<br/>• The sign will be placed at the top of the send zone and the handler will not be required to be within 2 feet of the sign for this station.<br>• Handlers may move at whatever speed they wish.<br/>• <b>The handler must remain on the left of the 6-foot line when proceeding past the jump.</b><br/>• Upon completion of the jump the dog returns to heel position.<br/>• The dog may be cued to return to heel regardless of where the handler is along the line of travel.<br/><br/>",
      tips: "• Versatility level courses use the Excellent level jump (ie. 6 feet of lateral distance).<br/>• Be careful not to step in the NQ zone!<br/>• Once the dog has taken the jump, it may be called back to heel position by the handler.<br/>• Once the dog has been sent to the jump, the handler may stay in the send zone or proceed along the outside of the 6-foot line. Handler may give a second cue to the dog as long as the dog is heading towards the obstacle. If the dog turns back to the handler or passes the plane of the jump the handler must return to the send zone for a retry.<br/>• The Handler is not required to run. Handlers may move at whatever speed they wish.",
      deductions: {
        minor: ["Out of heel position approaching the jump"],
        substantial: ["Touching the jump or broad jump (5 points)"],
        nq: [
          "Initiating the send to the obstacle outside of the send zone",
          "If the handler steps inside the NQ Zone at any time",
          "Knocking off bar or pushing off jump",
          "The dog fails to take the obstacle or takes it in the incorrect direction",
          "Dog goes past the plane of the obstacle",
        ],
      },
    },
    {
      name: "440",
      icon: require("../../assets/slides/440.jpg"),
      title: "440. Broad Jump",
      description:
        "• While <b>heeling with the dog on the right, the team enters the send zone where the dog is sent to the jump.</b><br/>• Once the dog has been sent, the handler may stay in the send zone or proceed along the <b>left of the 3-foot line</b>.<br/>• The sign will be placed at the top of the send zone and the handler will not be required to be within 2 feet of the sign for this station.<br>• Handlers may move at whatever speed they wish.<br/>• <b>The handler must remain on the left of the 3-foot line when proceeding past the jump.</b><br/>• Upon completion of the jump the dog returns to heel position.<br/>• The dog may be cued to return to heel regardless of where the handler is along the line of travel.<br/><br/>",
      tips: "• The broad jump is not used in virtual trials<br/>• Be careful not to step in the NQ zone!<br/>• Once the dog has taken the jump, it may be called back to heel position by the handler.<br/>• Once the dog has been sent to the jump, the handler may stay in the send zone or proceed along the left of the 3-foot line. Handler may give a second cue to the dog as long as the dog is heading towards the obstacle. If the dog turns back to the handler or passes the plane of the jump the handler must return to the send zone for a retry.<br/>• The Handler is not required to run. Handlers may move at whatever speed they wish.",
      deductions: {
        minor: ["Out of heel position approaching the jump"],
        substantial: ["Touching the jump or broad jump (5 points)"],
        nq: [
          "Initiating the send to the obstacle outside of the send zone",
          "If the handler steps inside the NQ Zone at any time",
          "The dog steps on the broad jump boards",
          "The dog fails to take the obstacle or takes it in the incorrect direction",
          "Dog goes past the plane of the obstacle",
        ],
      },
    },
    {
      name: "441",
      icon: require("../../assets/slides/441.jpg"),
      title: "441. Tunnel",
      description:
        "• While <b>heeling with the dog on the right, the team enters the send zone where the dog is sent to the tunnel</b>.<br/>• Once the dog has been sent, the handler may stay in the send zone or proceed along the <b>left of the 6-foot line</b>.<br/>•	The sign will be placed at the top of the send zone and the handler will not be required to be within 2 feet of the sign for this station.<br>• Handlers may move at whatever speed they wish.<br/>• <b>The handler must remain on the left of the 6-foot line when proceeding past the tunnel</b>.<br/>• Upon completion of the tunnel the dog returns to heel position.<br/>• The dog may be cued to return to heel regardless of where the handler is along the line of travel.<br/><br/>",
      tips: "• The tunnel can be straight or curved.",
      deductions: {
        minor: ["Out of heel position approaching the tunnel"],
        nq: [
          "Initiating the send to the obstacle outside of the send zone",
          "The handler steps inside the NQ Zone at any time",
          "The dog fails to take the obstacle",
          "Dog goes past the plane of the obstacle",
        ],
      },
    },
    {
      name: "442",
      icon: require("../../assets/slides/442.jpg"),
      title: "442. Weave Poles",
      description:
        "• While <b>heeling with the dog on the right</b>, the <b>dog enters the weave poles with the first pole on the dog’s left</b>.<br/>• The dog <b>weaves through the poles</b> and exits the station.<br/>• The dog must weave through all the poles in the correct pattern</b>.<br>• Upon completion of the weaves the dog returns to heel position.<br/><br/>",
      tips: "• The handler may provide ongoing verbal and/or physical cues to the dog to continue the weave pattern without deductions if the dog continues to weave.<br/>• If the dog has left the weave poles and is sent back in at the point of exit, it will be considered an additional cue.",
      deductions: {
        minor: [
          "Out of heel position approaching the weaves",
          "If the dog leaves the weave pattern and is cued to return to the point of exit to continue the pattern a deduction for additional cues will be applied",
        ],
        nq: [
          "The dog fails to enter the weave poles correctly",
          "The dog fails to complete the weave pattern",
        ],
      },
    },
    {
      name: "443",
      icon: require("../../assets/slides/443.jpg"),
      title: "434. Diagonal Right",
      description:
        "• While heeling with the dog on the right, the team makes a <b>diagonal turn to the right</b>.<br/><br/>",
      deductions: {
        minor: [
          "Initiation of the sign outside of a radius of two feet from the station sign",
          "Handler or dog stop forward motion",
          "Dog is out of heel position. Forging, Wide, or Lagging",
        ],
        nq: [
          "Team does not make a 45 degree turn in the correct direction",
          "Dog assumes a position not requested (eg. Sit)",
        ],
      },
    },
    {
      name: "444",
      icon: require("../../assets/slides/444.jpg"),
      title: "444. Diagonal Left",
      description:
        "• While heeling with the dog on the right, the team makes a <b>diagonal turn to the left</b>.<br/><br/>",
      deductions: {
        minor: [
          "Initiation of the sign outside of a radius of two feet from the station sign",
          "Handler or dog stop forward motion",
          "Dog is out of heel position. Forging, Wide, or Lagging",
        ],
        nq: [
          "Team does not make a 45 degree turn in the correct direction",
          "Dog assumes a position not requested (eg. Sit)",
        ],
      },
    },
  ],
};

export default Versatility;
