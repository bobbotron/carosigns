const VersatilityExcellent = {
  name: "Versatility Excellent",
  type: "normal",
  signs: [
    {
      name: "500",
      icon: require("../../assets/slides/500.jpg"),

      title: "500. Moving Sit - Cross Behind",
      description:
        "• While heeling, the handler cues the <b>dog to sit and without pausing continues forward.<br/>• The dog must hold the sit until called.<br/>• After the handler has completely passed over the 5-foot line and while continuing to walk</b>, the handler <b>calls the dog to heel on the opposite side</b> and the team continues to the next station.<br/><br/>",
      deductions: {
        minor: ["Crooked sit (45 to 90 degrees)"],
        substantial: [
          "Handler significantly slows their pace on moving position change exercises",
          "Failure of the dog to assume the requested position promptly",
        ],
        nq: [
          "Handler stops forward motion to perform moving position exercises",
          "Handler calls the dog before crossing the 5-foot line",
          "Dog does not sit or does not hold the sit until called",
          "Dog does not cross sides",
          "Sit crooked by more than 90 degrees",
        ],
      },
      changeSide: true,
    },
    {
      name: "501",
      icon: require("../../assets/slides/501.jpg"),

      title: "501. Moving Stand - Cross Behind",
      description:
        "• While heeling, the handler cues the <b>dog to stand and without pausing continues forward.<br/>• The dog must hold the stand until called.<br/>• After the handler has completely passed over the 5-foot line and while continuing to walk</b>, the handler <b>calls the dog to heel on the opposite side</b> and the team continues to the next station.<br/><br/>",
      deductions: {
        minor: ["Crooked stand (45 to 90 degrees)"],
        substantial: [
          "Handler significantly slows their pace on moving position change exercises",
          "Failure of the dog to assume the requested position promptly",
        ],
        nq: [
          "Handler stops forward motion to perform moving position exercises",
          "Handler calls the dog before crossing the 5-foot line",
          "Dog does not stand or does not hold the stand until called",
          "Dog does not cross sides",
          "Stand crooked by more than 90 degrees",
        ],
      },
      changeSide: true,
    },
    {
      name: "502",
      icon: require("../../assets/slides/502.jpg"),

      title: "501. Moving Down - Cross Behind",
      description:
        "• While heeling, the handler cues the <b>dog to down and without pausing continues forward.<br/>• The dog must hold the down until called.<br/>• After the handler has completely passed over the 5-foot line and while continuing to walk</b>, the handler <b>calls the dog to heel on the opposite side</b> and the team continues to the next station.<br/><br/>",
      deductions: {
        minor: ["Crooked down (45 to 90 degrees)"],
        substantial: [
          "Handler significantly slows their pace on moving position change exercises",
          "Failure of the dog to assume the requested position promptly",
        ],
        nq: [
          "Handler stops forward motion to perform moving position exercises",
          "Handler calls the dog before crossing the 5-foot line",
          "Dog does not down or does not hold the down until called",
          "Dog does not cross sides",
          "Down crooked by more than 90 degrees",
        ],
      },
      changeSide: true,
    },
    {
      name: "503",
      icon: require("../../assets/slides/503.jpg"),

      title: "503. HALT - Fast from Sit",
      description:
        "• With the dog <b>heeling on the right</b>, the team comes to a <b>halt</b> and <b>the dog sits in heel position.</b><br/>• The handler cues the dog to heel and moves <b> immediately into a fast pace from the halt</b>.<br/>• This station is followed by either Slow, Normal or the Finish station.<br/><br/>",
      tips: "• The Judge is looking for the <i>dog</i> to noticeably change their pace. A jogging pace from the handler is recommended.<br/>• The fast pace must begin immediately from the sit.<br/>",
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of heel position",
          "Handler moves their feet during the stationary portion of the halt",
          "Dog out of heel position",
        ],
        nq: [
          "Dog sits 90-degrees or more out of heel position",
          "Dog and Handler do not move immediately into fast pace from the sit",
          "Dog does not noticeably change their pace",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise",
        ],
      },
      video: undefined,
    },
    {
      name: "504",
      icon: require("../../assets/slides/504.jpg"),

      title: "504. HALT - Leave Dog - Call to Heel while Running",
      description:
        "• With the <b>dog heeling on the right</b>, the team comes to a <b>halt</b> and <b>the dog sits in heel position.</b><br/>• The handler cues the <b>dog to stay</b> and moves forward at a <b>fast pace</b>.<br/> • <b>After the handler has completely passed the 5-foot line</b>, they call the dog to heel as they return to normal pace.<br/>• The handler may pause or stop once they have returned to normal pace and after passing the 5-foot line.<b/><br/>• The dog must hold the sit stay until called<b/>.<br/><br/>",
      tips: "• The handler must move at a <i>fast (ie. jogging or running)</i> pace for <i>at least</i> 5 feet. You can run beyond the 5 foot line to be sure you do not slow down too soon. If so, be sure your dog has enough time to return to heel position before the next station sign.<br/> • If you are physically unable to run from a stand still, request an accommodation at the time of entry.<br/>",
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of heel position",
          "Handler moves their feet during the stationary portion of the halt",
          "Dog out of heel position",
        ],
        nq: [
          "Dog sits 90-degrees or more out of heel position",
          "Handler does not move immediately into fast pace from the halt",
          "Handler does not maintain the fast pace for at least 5 feet (until crossing the line)",
          "Dog does not hold the sit stay while the handler runs (minor foot movement is ok)",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise",
        ],
      },
      video: undefined,
    },
    {
      name: "505",
      icon: require("../../assets/slides/505.jpg"),

      title: "505. Dog Circles Right",
      description:
        "• With the <b>dog heeling on the right</b>, the <b>dog spins in a circle in place to the right</b> beside the handler.<br/>• The handler may pause briefly as needed.<br/><br/>",
      tips: "• A 'pause' allows for a full stop of forward motion, however, you may incur a minor deduction if the pause is not interpreted by the judge as brief. The dog must not sit.<br/>• As with position changes, you may use a physical and a verbal cue simultaneously for the spin without incurring a deduction for a second cue.<br/>",
      deductions: {
        minor: [
          "Dog out of heel position",
          "Handler's pause (stop of forward motion) is not brief",
          "Dog stops forward motion",
        ],
        nq: [
          "Dog does not perform the spin or spins in the incorrect direction",
          "Dog assumes a position not required by the exercise",
        ],
      },
      video: undefined,
    },
    {
      name: "506",
      icon: require("../../assets/slides/506.jpg"),

      title: "506. Moving Down - Walk Around",
      description:
        "• With the <b>dog heeling on the right</b>, the handler cues the <b>dog to down and without pausing walks around the dog from head to tail</b> returning to heel position.<br>• The handler remains within arm’s length of the dog throughout the exercise.<br/>• The handler may choose to pause upon returning to heel position before heeling away from the station.<br/>• The handler cues the dog to <b>heel forward from the down position</b><br/><br/>",
      tips: "• The handler's path should flow smoothly and without interruption from heel position while walking around the dog.<br/>• The judge is looking for the dog to have at least <i>begun</i> the down by the time you cross in front of their paws (no deductions).<br/>• If the dog does not <i>complete</i> the down until you have returned to heel position, you will incur a substantial deduction for promptness, but can still meet the requirements of the exercise.<br/>• You may <i>slightly</i> slow your pace as you circle the dog so that they have time to complete the down but significantly slowing your pace is a substantial deduction<br/>• Walk a tight circle around the dog.<br/>",
      deductions: {
        minor: [
          "Dog downs more than 45-degrees out of heel position",
          "Handler is further than arm's length during the walk around",
          "Dog still in the process of completing the down when the handler passes by their tail (2 points)",
        ],

        substantial: [
          "Handler significantly slows their pace during the moving down",
          "Failure of the dog to assume the down promptly",
        ],
        nq: [
          "Down 90-degrees or more out of heel position",
          "Dog turns with the handler rather than performing a down",
          "Handler stops forward motion while performing the moving down",
          "Dog has not <i>begun<i/>the down by the time the handler passes their far shoulder",
          "Dog does not hold the down for the duration of the walk around and until cued to heel forward",
          "Dog assumes a position not required by the exercise",
        ],
      },
      video: undefined,
    },
    {
      name: "507",
      icon: require("../../assets/slides/507.jpg"),

      title: "507. Moving Sidestep Left",
      description:
        "• With the <b>dog heeling on the right</b>, the handler takes <b>one step sideways to their left</b> while cueing the dog to heel.<br/>• The dog <b>must move sideways to the left simultaneously with the handler</b>, remaining in heel position parallel to the handler.<br/>• The team heels forward along the newly established line.<br/><br/>",
      tips: "• The team will heel directly up to the station sign and perform the side step in front of the sign, then proceed along the new path with the sign to their left.<br/>• Ideally the dog's body position should remain completely parallel to the handler throughout.<br/>",
      deductions: {
        minor: [
          "During the side step, the dog’s shoulder remains in heel position but their body is at 45-degree angle (2 points)",
          "Dog out of heel position",
          "Dog stops forward motion",
        ],
        nq: [
          "The dog does not move simultaneously with the handler",
          "During the side step, the dog’s shoulders are in heel position but their body is more than 45-degrees out of position",
          "Dog assumes a position not required by the exercise",
        ],
      },
      video: undefined,
    },
    {
      name: "508",
      icon: require("../../assets/slides/508.jpg"),

      title: "508. Off-set Figure 8",
      description:
        "• Two cones (pylons) and two food bowls are arranged in a diamond pattern: the cones are placed 10 feet apart; the food bowls are securely covered and are placed 2.5 feet from the centre line.<br/>• With the <b>dog heeling on the right</b>, the team enters the pattern and <b>completes a continuous Figure 8 around the pylons, crossing through the middle at least three times</b>.<br/>• The team <b>exits the exercise as indicated by the placement of the next station.</b><br/>• Allowances can be made in the distance between the food bowls for large/giant breeds.<br/><br/>",
      tips: "• Unlike other cone exercises, you will not always enter with the first cone on the dog's left. The course map should indicate the intended entry and exit points by arrows.<br/>• A cue such as 'leave it' can be used without deductions if it is given before the dog leaves heel position. Cues must never be given in a corrective tone.<br/>• In the Brace class, dogs will have one extra foot between the cones and between the bowls.<br/>",
      deductions: {
        minor: [
          "Out of heel position",
          "Dog sniffs the bowls (2 points)",
          "Minor movement (bump) of a cone (no deduction if a cone is moved by a wagging tail)",
          "Handler or dog stop forward motion",
        ],
        substantial: [
          "Dog leaves another station to sniff the bowls",
          "Knocking over or substantial movement of a cone",
        ],
        nq: [
          "The dog knocks over the food bowls, tips them, bites at them or moves them out of position.",
        ],
      },
    },
    {
      name: "509",
      icon: require("../../assets/slides/509.jpg"),

      title: "509. Right Turn - Dog Circles Left",
      description:
        "• With the <b>dog heeling on the right</b>, the <b>handler turns right</b>.<br/>• Simultaneously the <b>dog circles around the handler to the left returning to heel position on the right</b>.<br/>• The handler may briefly pause to allow the dog to cross their path.<br/>• The team will be back in heel position as they face the new direction.<br/>• This sign results in a 90-degree change of direction to the right.<br/><br/>",
      tips: "• The dog will circle in front of the handler, before returning to heel position.<br/>•  You may come to a full stop (briefly) while the dog passes in front of you.<br/>•  Your right turn can be either a sharp 90-degree turn or a soft 90-degree turn.",
      deductions: {
        minor: [
          "Dog stops forward motion",
          "Out of heel position (exception while circling)",
          "Initiation of the sign outside of a radius of two feet from the station sign",
        ],
        nq: [
          "The team does not make a 90-degree turn to the right",
          "The dog does not circle the handler and in the correct direction",
          "The dog does not return to the right side",
          "The dog assumes a position not required by the exercise (eg. a sit)",
        ],
      },
    },
    {
      name: "510",
      icon: require("../../assets/slides/510.jpg"),

      title: "510. Right About Turn",
      description:
        "• With the <b>dog heeling on the right</b>, the <b>handler performs a 180-degree right turn</b>, while the <b>dog simultaneously performance a 180-degree left turn moving around the handler</b>.<br/>• The team will be back in heel position as they face the new direction.<br/>• This station results in a 180-degree change of direction.<br/><br/>",
      tips: "• The dog and handler do <i>opposite</i> 180-degree turns.<br/>• Note that this station does not allow the handler to pause (stop forward motion).<br/>",
      deductions: {
        minor: [
          "Dog or handler stop forward motion",
          "Out of heel position (exception while performing the about turn)",
          "Initiation of the sign outside of a radius of two feet from the station sign",
        ],
        nq: [
          "The team does not make 180-degree turns simultaneously",
          "The dog and handler do not perform opposite about turns in the correct directions",
          "The dog assumes a position not required by the exercise (eg. a sit)",
        ],
      },
    },
    {
      name: "511",
      icon: require("../../assets/slides/511.jpg"),

      title: "511. HALT - 180 Pivot Right - HALT",
      description:
        "• The team comes to a <b>halt</b> and the <b>dog sits in heel position, on the right.<br/>• The handler cues the dog to heel and pivots in place 180 degrees to their right then halts.<br/>• The dog must move simultaneously with the handler and sit when the handler stops</b>.<br/>• The handler cues the dog to <b>heel forward from the sit position</b>.• This station results in a 180-degree change of direction.<br/><br/>",
      tips: "• This sign is typically executed by using the heel of the <i>right</i> foot as a pivot point, pivoting 180-degrees to the right, and then bringing the left foot into alignment with the right.<br/>",
      deductions: {
        minor: [
          "Handler moves their feet during the stationary portion of the halt",
          "Dog sits more than 45-degrees out of heel position",
        ],
        nq: [
          "Handler takes a step rather than a pivot",
          "Dog does not move simultaneously with the handler",
          "Failure of the dog to sit at both halts",
          "Dog assumes a position not required by the exercise",
          "Dog sits 90-degrees or more out of heel position",
        ],
      },
    },
    {
      name: "512",
      icon: require("../../assets/slides/512.jpg"),

      title: "512. HALT - 180 Pivot Left - HALT",
      description:
        "• With the <b>dog heeling on the right</b>, the team comes to a <b>halt</b> and the <b>dog sits in heel position.<br/>• The handler cues the dog to heel and pivots in place 180 degrees to their left then halts.<br/>• The dog must move simultaneously with the handler and sit when the handler stops</b>.<br/>• The handler cues the dog to <b>heel forward from the sit position</b>.• This station results in a 180-degree change of direction.<br/><br/>",
      tips: "• This sign is typically executed by using the heel of the <i>left</i> foot as a pivot point, pivoting 180-degrees to the left, and then bringing the right foot into alignment with the left.<br/>",
      deductions: {
        minor: [
          "Handler moves their feet during the stationary portion of the halt",
          "Dog sits more than 45-degrees out of heel position",
        ],
        nq: [
          "Handler takes a step rather than a pivot",
          "Dog does not move simultaneously with the handler",
          "Failure of the dog to sit at both halts",
          "Dog assumes a position not required by the exercise",
          "Dog sits 90-degrees or more out of heel position",
        ],
      },
    },
    {
      name: "513",
      icon: require("../../assets/slides/513.jpg"),

      title: "513. HALT - From Sit 180 Right",
      description:
        "• With the <b>dog heeling on the right</b>, the team comes to a <b>halt</b> and the dog <b>sits in heel position</b>.<br/>• The handler cues the dog to heel, <b>turns 180 degrees to their right</b> and heels forward.<br/>• This station results in a 180-degree change of direction.<br/><br/>",
      tips: "• This station does not call for a pivot - you should step forward to perform the 180-degree right turn. Perform the turn immediately from the sit.<br/>• Ensure you halt within two feet of the station sign.",
      deductions: {
        minor: [
          "Handler moves their feet during the stationary portion of the halt",
          "Dog sits more than 45 degrees out of heel position",
        ],
        nq: [
          "Dog does not move simultaneously with the handler",
          "Failure of the dog to sit at the halt",
          "Dog sits 90-degrees or more out of heel position",
          "Team does not make a 180-degree turn to the right",
          "Dog assumes a position not required by the exercise",
        ],
      },
    },
    {
      name: "514",
      icon: require("../../assets/slides/514.jpg"),

      title: "514. HALT - From Sit 180 Left",
      description:
        "• With the <b>dog heeling on the right</b>, the team comes to a <b>halt</b> and the dog <b>sits in heel position</b>.<br/>• The handler cues the dog to heel, <b>turns 180 degrees to their left</b> and heels forward.<br/>• This station results in a 180-degree change of direction.<br/><br/>",
      tips: "• This station does not call for a pivot - you should step forward to perform the 180-degree left turn (dog on the inside of the turn). Perform the turn immediately from the sit.<br/>• Ensure you halt within two feet of the station sign.",
      deductions: {
        minor: [
          "Handler moves their feet during the stationary portion of the halt",
          "Dog sits more than 45 degrees out of heel position",
        ],
        nq: [
          "Dog does not move simultaneously with the handler",
          "Failure of the dog to sit at the halt",
          "Dog sits 90-degrees or more out of heel position",
          "Team does not make a 180-degree turn to the left",
          "Dog assumes a position not required by the exercise",
        ],
      },
    },
    {
      name: "515",
      icon: require("../../assets/slides/515.jpg"),

      title: "515. HALT - Stand Leave for Walk Around",
      description:
        "• With the <b>dog heeling on the right</b>, the team comes to a <b>halt</b> and the dog <b>sits in heel position</b>.<br/>• The handler cues the <b>dog to stand</b>.<br/>• The handler cues the <b>dog to stay, walks forward 5 feet</b> to station sign 516 and <b>turns to face the dog</b>.<br/>• The judge, starting from the right side of the handler, and walking approximately an arm’s length away from the dog, circles the dog and returns to pause by the handler’s side before moving away.<br/><br/>",
      tips: "• This station will always be followed by station 516 (Return and Forward from Stand).<br/>• During the walk through, the judge will be able to tell you where they will be standing for the walk around.<br/>• This station is not used in virtual trials.<br/>• Note that you may no longer touch the dog to stabalize or position them after the stand has been performed.",
      deductions: {
        minor: [
          "Dog sits or stands more than 45-degrees out of heel position",
          "Handler moves their feet during the stationary portion of the halt",
        ],
        nq: [
          "The dog does not hold the stand for the duration of the exercise (eg. takes steps forward or sits)",
          "Dog sits or stands more than 90-degrees out of heel position",
          "Handler does not walk to station 516",
          "Handler does not turn to face the dog",
          "Dog exhibits signs of aggression during the walk around, at the discretion of the Judge",
        ],
      },
    },
    {
      name: "516",
      icon: require("../../assets/slides/516.jpg"),

      title: "516. Return to Heel",
      description:
        "• The handler <b>returns to heel position by moving around the dog in a clockwise direction into heel position, on the right</b>.<br/>• The handler may choose to pause in heel position before moving forward.<br/>• The handler cues the dog to <b>heel forward from the stand position</b>.<br/><br/>",
      tips: "• There will be no communication from the Judge about when you may return to your dog. Instead, wait for the Judge to have completed their Walk Around, returned to you, and moved away.<br/>• This sign always follows sign 515 and is not used elsewhere.<br/>• This station is not used in virtual trials.<br/>",
      deductions: {
        nq: [
          "The dog does not hold the stand for the duration of the exercise (eg. circles to watch the handler was they walk around, takes steps forward or sits)",
          "Dog stands more than 90-degrees out of heel position",
          "Handler returns to their dog too soon",
        ],
      },
    },
    {
      name: "517",
      icon: require("../../assets/slides/517.jpg"),

      title: "517. HALT - Leave Dog Turn Call Front",
      description:
        "• With the <b>dog heeling on the right</b>,the team comes to a <b>halt</b> and the <b>dog sits in heel position</b>.<br/>• The handler cues the <b>dog to stay, walks forward 5 feet</b> to one of station signs 519, 520, 521 or 522 and <b>turns to face the dog</b>.<br/>• The handler calls the <b>dog to front position</b>.<br/>• This exercise results in a 180-degree change of direction.<br/><br/>",
      tips: "• This sign will always be followed by a finish or forward sign.<br/>• Minor paw movement is permitted during the stay, provided the dog does not change positions.<br/>• Keep your feet still during the halt and the front.<br/><br/>",
      deductions: {
        minor: [
          "Handler moves their feet during the stationary portion of the or and front",
          "Dog sits more than 45 degrees out of heel position",
        ],
        substantial: [
          "Handler moves left or right to position themselves in front of the dog to create a straight front.",
        ],
        nq: [
          "Dog sits 90-degrees or more out of heel or front positions",
          "Dog does not sit at the halt or front positions when cued",
          "Dog does not maintain the sit-stay as the handler walks away (minor paw movement ok)",
          "Handler does not walk the required distance away or does not turn to face the dog",
          "Dog assumes a position not required by the exercise",
        ],
      },
    },
    {
      name: "518",
      icon: require("../../assets/slides/518.jpg"),

      title: "518. Call Front - 1, 2, 3 Steps Backwards",
      description:
        "• With the <b>dog heeling on the right</b>, the handler stops forward motion and calls the dog directly to the front position.<br/>• The handler may take up to four steps backward as the <b>dog turns and sits in front position.<br/>• From the sit</b> the handler takes 1 step backward and <b>halts</b>, the <b>dog moves with the handler sits in front position.<br/>• From the sit</b> the handler takes 2 steps backward and <b>halts</b>, the <b>dog moves with the handler and sits in front position.<br/>• From the sit</b> the handler takes 3 steps backward and <b>halts</b>, the <b>dog moves with the handler and sits in front position</b>.<br/>• This station is followed by one of 519, 520, 521 or 522.<br/><br/>",
      tips: "• This sign will always be followed by a finish or forward sign.<br/>• The dog must move with the handler as the handler steps backwards.<br/>• Depending on your stride length, you may not end up at the correct location for the next sign (front or finish) - this is ok, but do make a point of remembering what the next sign is, so that you can perform it correctly",
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of front position",
          "Handler moves their feet during the stationary portion of the front",
        ],
        substantial: [
          "Handler takes more than the required number of steps in the 1, 2, 3 Exercises (3 points for each part of the exercise where extra steps are taken)",
          "handler moves left or right to position themselves in front of the dog to create a straight front",
        ],
        nq: [
          "Dog does not move with handler during the steps backwards",
          "Dog does not come to front at each halt",
          "Dog sits more than 90-degrees out of front position",
        ],
      },
    },
    {
      name: "519",
      icon: require("../../assets/slides/519.jpg"),

      title: "519. Finish Right",
      description:
        "• With the <b>dog sitting in front position</b> the handler cues the <b>dog to move directly to their right</b> to <b>sit in heel position</b>.<br/>• The handler’s feet should remain stationary while the dog moves around them.<br/>• The handler cues the dog to <b>heel forward from the sit position</b>.<br/><br/>",
      tips: "• This is not a stand alone sign. It will always follow another sign in which the dog finishes the exercise in the front position, such as 517 (Halt- Leave Dog - Turn and Call front) or 518 (Call Front - 1,2,3 Steps Backwards).<br/>• Unlike other stations, this sign does <i>not</i> need to be performed within a 2-foot radius of the station sign. This is because the space required for the previous sign may vary",
      deductions: {
        minor: [
          "Handler moves their feet during the finish",
          "Dogs sits more than 45-degrees out of heel position",
        ],
        nq: [
          "Dog sits 90-degrees or more out of heel position",
          "Handler walks into the dog to force the dog to move (this is considered a physical correction).",
          "Dog assumes a position not required by the exercise",
        ],
      },
    },
    {
      name: "520",
      icon: require("../../assets/slides/520.jpg"),

      title: "520. Finish Left",
      description:
        "• With the <b>dog sitting in front position</b> the handler cues the <b>dog to move to the handler's left</b> and <b>around their body</b> to <b>sit in right side heel position</b>.<br/>• The handler’s feet should remain stationary while the dog moves around them.<br/>• The handler cues the dog to <b>heel forward from the sit position</b>.<br/><br/>",
      tips: "• This is not a stand alone sign. It will always follow another sign in which the dog finishes the exercise in the front position, such as 517 (Halt- Leave Dog - Turn and Call front) or 518 (Call Front - 1,2,3 Steps Backwards).<br/>• Unlike other stations, this sign does <i>not</i> need to be performed within a 2-foot radius of the station sign. This is because the space required for the previous sign may vary.",
      deductions: {
        minor: [
          "Handler moves their feet during the finish",
          "Dogs sits more than 45-degrees out of heel position",
        ],
        nq: [
          "Dog sits 90-degrees or more out of heel position",
          "Handler walks into the dog to force the dog to move (this is considered a physical correction).",
          "Dog assumes a position not required by the exercise",
        ],
      },
    },
    {
      name: "521",
      icon: require("../../assets/slides/521.jpg"),

      title: "521. Forward Right",
      description:
        "• With the <b>dog sitting in front position</b> the handler cues the <b>dog to move to the handler’s right</b> and <b> to heel position</b>.<br/>• As the dog is returning to heel position, the handler cues the dog to heel and moves forward. <b>The dog does not sit in heel position</b>.<br/><br/>",
      tips: "• This is not a stand alone sign. It will always follow another sign in which the dog finishes the exercise in the front position, such as 517 (Halt- Leave Dog - Turn and Call front) or 518 (Call Front - 1,2,3 Steps Backwards).<br/>• You may begin to heel forward as soon as the dog is approaching heel position.<br/>",
      deductions: {
        minor: ["Handler moves their feet to perform the forward"],
        nq: [
          "Handler walks into the dog to force the dog to move (this is considered a physical correction)",
          "Dog assumes a position not required by the exercise (eg. a sit in heel position)",
          "Dog does not return to heel position (traveling right, around the handler's body)",
        ],
      },
    },
    {
      name: "522",
      icon: require("../../assets/slides/522.jpg"),

      title: "521. Forward Left",
      description:
        "• With the <b>dog sitting in front position</b> the handler cues the <b>dog to move to the handler’s left</b> and <b>around their body toward heel position</b>.<br/>• As the dog is returning to heel position, the handler cues the dog to heel and moves forward. <b>The dog does not sit in heel position</b>.<br/><br/>",
      tips: "• This is not a stand alone sign. It will always follow another sign in which the dog finishes the exercise in the front position, such as 517 (Halt- Leave Dog - Turn and Call front) or 518 (Call Front - 1,2,3 Steps Backwards).<br/>• You may begin to heel forward as soon as the dog has started to return to heel position and is no longer on your line of travel.<br/>",
      deductions: {
        minor: ["Handler moves their feet to perform the forward"],
        nq: [
          "Handler walks into the dog to force the dog to move (this is considered a physical correction)",
          "Dog assumes a position not required by the exercise (eg. a sit in heel position)",
          "Dog does not return to heel position (directly to the handler's left)",
        ],
      },
    },
    {
      name: "523",
      icon: require("../../assets/slides/523.jpg"),

      title: "523. HALT - Stand - Down",
      description:
        "• With the <b>dog heeling on the right</b>, the team comes to a <b>halt</b> and the dog <b>sits in the heel position</b>.<br/>• The handler cues the <b>dog to stand</b>.<br/>• The handler cues the <b>dog to down</b>.<br/>• The handler cues the dog to <b>heel forward from the down position</b>.",
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
      name: "524",
      icon: require("../../assets/slides/524.jpg"),

      title: "524. HALT - Stand - Sit",
      description:
        "• With the <b>dog heeling on the right</b>, the team comes to a <b>halt</b> and the dog <b>sits in the heel position</b>.<br/>• The handler cues the <b>dog to stand</b>.<br/>• The handler cues the <b>dog to sit</b>.<br/>• The handler cues the dog to <b>heel forward from the down position</b>.",
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
      name: "525",
      icon: require("../../assets/slides/525.jpg"),

      title: "525. Moving Stand - Walk Around",
      description:
        "• With the <b>dog heeling on the right</b>, the handler cues the <b>dog to stand and without pausing walks around the dog from head to tail</b> returning to heel position.<br/>• The handler remains within arm’s length of the dog throughout the exercise.<br/>• The handler may choose to pause upon returning to heel position before heeling away from the station.<br/>• The handler cues the dog to <b>heel forward from the stand position</b>.",
      deductions: {
        minor: [
          "Dog stands more than 45-degrees out of heel position",
          "Handler is further than arm's length during the walk around",
        ],

        substantial: [
          "Handler significantly slows their pace on moving position change exercises",
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
      name: "526",
      icon: require("../../assets/slides/526.jpg"),

      title: "526. Moving Sit Walk Around",
      description:
        "• With the <b>dog heeling on the right</b>, the handler cues the <b>dog to sit and without pausing walks around the dog from head to tail </b>returning to heel position.<br/>• The handler remains within arm’s length of the dog throughout the exercise.<br/>• The handler may choose to pause upon returning to heel position before heeling away from the station.<br/>• The handler cues the dog to <b>heel forward from the sit position</b><br/><br/>.",
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of heel position",
          "Handler is further than arm's length during the walk around",
        ],

        substantial: [
          "Handler significantly slows their pace on moving position change exercises",
          "Failure of the dog to assume the requested position promptly",
        ],

        nq: [
          "Dog sits 90-degrees or more out of heel position",
          "Handler stops forward motion at any point before they have completed the walk around and returned to heel position",
          "Dog does not hold the sit (eg. turns with the handler as the walk around is performed)",
          "Dog assumes a position not required by the exercise (eg. stands)",
        ],
      },
    },
    {
      name: "527",
      icon: require("../../assets/slides/527.jpg"),

      title: "527. Moving Stand - Call to Heel",
      description:
        "• With the <b>dog heeling on the right</b>, the handler cues the <b>dog to stand and without pausing continues forward.<br/>• The dog must hold the stand until called.<br/>• After the handler has completely passed over the 5-foot line and while continuing to walk</b>, the handler calls the dog to heel and the team continues to the next station.<br/>• <b>The dog must be in heel position before the team arrives at the next station.</b>",
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
      name: "528",
      icon: require("../../assets/slides/528.jpg"),

      title: "528. Moving Down - Call to Heel",
      description:
        "• With the <b>dog heeling on the right</b>, the handler cues the <b>dog to down and without pausing continues forward.<br/>• The dog must hold the down until called.<br/>• After the handler has completely passed over the 5-foot line and while continuing to walk</b>, the handler calls the dog to heel and the team continues to the next station.<br/>• <b>The dog must be in heel position before the team arrives at the next station.</b>",
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
      name: "529",
      icon: require("../../assets/slides/529.jpg"),

      title: "529. Back Up 3 Steps",
      description:
        "• With the <b>dog heeling on the right</b>, the handler will cue the dog to heel backwards.<br/>• The handler will <b>walk backwards continuously a minimum of 3 complete steps with the dog moving simultaneously and remaining in heel position parallel to the handler</b>.<br/><br/>",
      tips: "• Three complete steps are required. This means that the third step can't consist of rocking back on one foot and heeling forward. Rather, both feet must move backwards for the final step. See the video for examples.<br/>• If in doubt, take additional steps, as there are no deductions for additional steps or the dog being out of position once the three steps have been completed.",
      deductions: {
        minor: [
          "Dog backs up at an angle of up to 45-degrees out of alignment",
          "Dog’s shoulders in heel position but their body at a 45-degree angle (2 points)",
        ],
        substantial: [
          "Dog's shoulders in heel position but their body at a greater than 45-degree angle but not more than 90 degrees (5 points)",
        ],

        nq: [
          "The handler does not take 3 complete steps backwards",
          "The dog does not move simultaneously with the handler",
          "The dog does not remain in heel position",
        ],
      },
      video: undefined,
    },
    {
      name: "530",
      icon: require("../../assets/slides/530.jpg"),

      title: "530. HALT - Stand - Leave",
      description:
        "• With the <b>dog heeling on the right</b>, the team comes to a <b>halt</b> and the <b>dog sits in heel position</b>.<br/>• The handler cues the <b>dog to stand</b>.<br/>• The handler cues the dog to <b>stay, walks forward 5 feet</b> to one of station signs 307,308,309 or 310 and <b>turns to face the dog</b>.",
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
      name: "531",
      icon: require("../../assets/slides/531.jpg"),

      title: "531. Sit Dog - Return to Heel",
      description:
        "• The handler cues the <b>dog to sit directly from the stand</b>.<br/>• The <b>handler returns to right-side heel position by walking around the dog and back to heel.</b><br/>• The dog <b>must remain in a sit</b> until cued to heel.<br/>• The handler may choose to pause upon returning to heel position before heeling away from the station.<br/>• The handler cues the dog to <b>heel forward from the sit position</b>.<br/><br/>",
      tips: "• This is not a stand alone station. It will always follow station 530.",
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
      name: "532",
      icon: require("../../assets/slides/532.jpg"),

      title: "532. Down Dog - Return to Heel",
      description:
        "• The handler cues the <b>dog to down directly from the stand</b>.<br/>• The <b>handler returns to right-side heel position by walking around the dog and back to heel.</b><br/>• The dog <b>must remain in a down</b> until cued to heel.<br/>• The handler may choose to pause upon returning to heel position before heeling away from the station.<br/>• The handler cues the dog to <b>heel forward from the down position</b>.<br/><br/>",
      tips: "• This is not a stand alone station. It will always follow station 530.",
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
      name: "533",
      icon: require("../../assets/slides/533.jpg"),

      title: "533. Sit Dog - Call to Heel - Forward",
      description:
        "• The handler cues the <b>dog to sit directly from the stand</b>.<br/>• The handler calls the <b>dog to return to right-sie heel position</b>.<br/>• The dog may return to heel position either directly to heel position or by going around the handler.<br/>• The team <b>heels forward before the dog sits</b>.<br>• This station results in a 180-degree change of direction.<br/><br/>",
      tips: "• This is not a stand alone station. It will always follow station 530.",
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
      name: "534",
      icon: require("../../assets/slides/534.jpg"),

      title: "534. Down Dog - Call to Heel - Forward",
      description:
        "• The handler cues the <b>dog to down directly from the stand</b>.<br/>• The handler calls the <b>dog to return to right-side heel position</b>.<br/>• The dog may return to heel position either directly to heel position or by going around the handler.<br/>• The team <b>heels forward before the dog sits</b>.<br>• This station results in a 180-degree change of direction.<br/><br/>",
      tips: "• This is not a stand alone station. It will always follow station 530.",
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
  ],
};

export default VersatilityExcellent;
