const Advanced = {
  name: "Advanced",
  type: "normal",
  signs: [
    {
      name: "200",
      icon: require("../../assets/slides/200.jpg"),
      title: "200. HALT - Fast From Sit",
      practiceNextRestriction: ["120"],
      description:
        "• The team comes to a <b>halt</b> and <b>the dog sits in heel position.</b><br/>• The handler cues the dog to heel and moves <b> immediately into a fast pace from the halt</b>.<br/>• This station is followed by either Slow, Normal or the Finish station.<br/><br/>",
      tips: "• The Judge is looking for the <i>dog</i> to move at a fast pace. A jogging or running pace from the handler is recommended.<br/>• The fast pace must begin immediately from the sit.<br/>",
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of heel position",
          "Handler moves their feet during the stationary portion of the halt",
          "Dog out of heel position",
        ],
        nq: [
          "Dog sits 90-degrees or more out of heel position",
          "Dog and handler do not move immediately into fast pace from the sit",
          "Dog does not noticeably change their pace",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise",
        ],
      },
      video: undefined,
    },
    {
      name: "201",
      icon: require("../../assets/slides/201.jpg"),
      title: "201. HALT - Leave Dog - Call to Heel while Running",
      practiceNextRestriction: ["223"],
      description:
        "• The team comes to a <b>halt</b> and <b>the dog sits in heel position.</b><br/>• The handler cues the <b>dog to stay</b> and <b>moves forward at a fast pace.<br/> • The dog must remain in a sit until called.<br/>• After the handler has passed the Call Dog sign</b> (#223), they call the dog to heel as they return to normal pace.<br/>• After passing the Call Dog sign the handler may pause or stop until the dog reaches heel position.<br/><br/>",
      tips: "• The handler must move at a <i>fast (ie. jogging or running)</i> pace. You can run just beyond the Call Dog sign to be sure you do not slow down too soon. If so, be sure your dog has enough time to return to heel position before the next station sign.<br/> • If you are physically unable to run from a stand still, request an accommodation at the time of entry.<br/>",
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of heel position",
          "Handler moves their feet during the stationary portion of the halt",
          "Dog out of heel position",
        ],
        nq: [
          "Dog sits 90-degrees or more out of heel position",
          "Handler does not move immediately into fast pace from the halt",
          "Handler does not maintain the fast pace until passing the Call Dog sign",
          "Dog does not hold the sit stay while the handler runs (minor foot movement is ok)",
          "Failure of the dog to assume a cued position",
          "Dog assumes a position not required by the exercise",
        ],
      },
      video: undefined,
    },
    {
      name: "202",
      icon: require("../../assets/slides/202.jpg"),
      title: "202. Dog Circles Left",
      description:
        "• While heeling the <b>dog spins in a circle in place to the left</b> beside the handler.<br/>• The handler may pause briefly as needed.<br/><br/>",
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
      name: "203",
      icon: require("../../assets/slides/203.jpg"),
      title: "203. Moving Down - Walk Around",
      description:
        "• While heeling, the handler cues the <b>dog to down and without pausing walks around the dog from nose to tail</b> returning to heel position.<br>• The <b> dog must remain in a down</b> while the handler walks around the dog.<br/>• The handler remains within arm’s length of the dog throughout the exercise.<br/>• The handler may pause upon returning to heel position before heeling away from the station.<br/>• The handler cues the dog to <b>heel forward from the down position</b><br/><br/>",
      tips: "• The handler's path should flow smoothly and without interruption from heel position while walking around the dog.<br/>• The judge is looking for the dog to have at least <i>begun</i> the down by the time you cross in front of their paws (no deductions).<br/>• If the dog does not <i>complete</i> the down until you have returned to heel position, you will incur a substantial deduction for promptness, but can still meet the requirements of the exercise.<br/>• You may <i>slightly</i> slow your pace as you circle the dog so that they have time to complete the down but significantly slowing your pace is a substantial deduction<br/>• Walk a tight circle around the dog.<br/>",
      reward: true,
      deductions: {
        minor: [
          "Dog performs the down more than 45-degrees out of heel position",
          "Minor movement of the dog while remaining in the required position",
          "Dog is still in the process of assuming the down as the handler passes in front of their paws",
          "Handler is further than arm's length during the walk around",
          "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
        ],

        substantial: [
          "Handler significantly slows their pace during the moving down",
          "Dog has not begun to assume the down position as the handler passes their paws",
          "Dog is in the process assumming the sit as the handler passes their far shoulder.",
        ],

        nq: [
          "Down 90-degrees or more out of heel position",
          "Dog has not begun to down by the time the handler passes their far shoulder",
          "Dog has not completed the down by the time the handler passes by their tail",
          "Down is 90-degrees or more out of heel position",
          "Dog turns with the handler rather than maintaining a sit",
          "Handler stops forward motion while performing the moving down",
          "Dog assumes a position not required by the exercise",
          "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket",
        ],
      },
      video: undefined,
    },
    {
      name: "204",
      icon: require("../../assets/slides/204.jpg"),
      title: "204. Moving Side Step Right",
      description:
        "• While heeling, the handler takes <b>one step sideways to their right</b> while cueing the dog to heel.<br/>• The dog <b>must move sideways to the right simultaneously with the handler</b>, remaining in heel position parallel to the handler.<br/>• The team heels forward along the newly established line.<br/><br/>",
      tips: "• The team will heel directly up to the station sign and perform the side step in front of the sign, then proceed along the new path with the sign to their left.<br/>• You are only permitted to take one step to the side. To be sure that you have enough space to get around the sign with only one side step, try to line the dog up with the sign as you approach it, rather than the handler.<br/>• Ideally the dog's body position should remain completely parallel to the handler throughout.<br/>",
      deductions: {
        minor: [
          "During the side step, the dog's shoulder remains in heel position but their body is at 45-degree angle (2 points)",
          "Dog out of heel position",
          "Dog stops forward motion",
        ],
        nq: [
          "The dog does not move simultaneously with the handler",
          "The hanlder takes more than one step sideways",
          "During the side step, the dog's shoulders are in heel position but their body is more than 45-degrees out of position",
          "Dog assumes a position not required by the exercise",
        ],
      },
      video: undefined,
    },
    {
      name: "205",
      icon: require("../../assets/slides/205.jpg"),
      title: "205. Off-set Figure 8",
      excludeFromPractice: true,
      description:
        "• Two cones (pylons) and two food bowls are arranged in a diamond pattern; the cones are placed 10 feet apart and the food bowls are securely covered and placed 2.5 feet from the centre line.<br/>• The team enters the pattern and <b>completes a continuous Figure 8 around the pylons, crossing through the middle at least three times</b>.<br/>• The team <b>exits the exercise as indicated by the placement of the next station.</b><br/>• Allowances can be made in the distance between the food bowls for large/giant breeds.<br/><br/>",
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
      name: "206",
      icon: require("../../assets/slides/206.jpg"),
      title: "206. Left Turn - Dog Circles Right",
      description:
        "• While heeling, the <b>handler turns left</b>.<br/>• Simultaneously the <b>dog circles around the handler to the right returning to heel position</b>.<br/>• The handler may briefly pause to allow the dog to cross their path.<br/>• The team will be back in heel position as they face the new direction.<br/>• This sign results in a 90-degree change of direction to the left.<br/><br/>",
      tips: "• The dog will circle in front of the handler, before returning to heel position.<br/>•  You may come to a full stop (briefly) while the dog passes in front of you.<br/>•  Your left turn can be either a sharp 90-degree turn or a soft 90-degree turn.",
      deductions: {
        minor: [
          "Dog stops forward motion",
          "Out of heel position (exception while circling)",
          "Initiation of the sign outside of a radius of two feet from the station sign",
        ],
        nq: [
          "The team does not make a 90-degree turn to the left",
          "The dog does not circle the handler and in the correct direction",
          "The dog assumes a position not required by the exercise (eg. a sit)",
        ],
      },
    },
    {
      name: "207",
      icon: require("../../assets/slides/207.jpg"),
      title: "207. Left About Turn",
      description:
        "• While heeling, the <b>handler performs a 180-degree left turn</b>, while the <b>dog simultaneously performance a 180-degree right turn moving around the handler</b>.<br/>• The team will be back in heel position as they face the new direction.<br/>• This station results in a 180-degree change of direction.<br/><br/>",
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
      name: "208",
      icon: require("../../assets/slides/208.jpg"),
      title: "208. HALT - 180 Degree Pivot Right - HALT",
      description:
        "• The team comes to a <b>halt</b> and the <b>dog sits in heel position.<br/>• The handler pivots in place 180 degrees to their right then halts.<br/>• The dog must move simultaneously with the handler and sit when the handler stops</b>.<br/>• The handler cues the dog to <b>heel forward from the sit position</b>.<br/>• This station results in a 180-degree change of direction.<br/><br/>",
      tips: "• This sign is typically executed by using the heel of the <i>right</i> foot as a pivot point, pivoting 180-degrees to the right, and then bringing the left foot into alignment with the right.<br/>",
      reward: true,
      deductions: {
        minor: [
          "Handler moves their feet during the stationary portion of the halt",
          "Dog sits more than 45-degrees out of heel position",
          "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
        ],
        nq: [
          "Handler takes a step rather than a pivot",
          "Dog does not move simultaneously with the handler",
          "Failure of the dog to sit at both halts",
          "Dog assumes a position not required by the exercise",
          "Dog sits 90-degrees or more out of heel position",
          "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket",
        ],
      },
    },
    {
      name: "209",
      icon: require("../../assets/slides/209.jpg"),
      title: "209. HALT - 180-Degree Pivot Left - HALT",
      description:
        "• The team comes to a <b>halt</b> and the <b>dog sits in heel position.<br/>• The handler pivots in place 180 degrees to their left then halts.<br/>• The dog must move simultaneously with the handler and sit when the handler stops</b>.<br/>• The handler cues the dog to <b>heel forward from the sit position</b>.<br/>• This station results in a 180-degree change of direction.<br/><br/>",
      tips: "• This sign is typically executed by using the heel of the <i>left</i> foot as a pivot point, pivoting 180-degrees to the left, and then bringing the right foot into alignment with the left.<br/>",
      reward: true,
      deductions: {
        minor: [
          "Handler moves their feet during the stationary portion of the halt",
          "Dog sits more than 45-degrees out of heel position",
          "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
        ],
        nq: [
          "Handler takes a step rather than a pivot",
          "Dog does not move simultaneously with the handler",
          "Failure of the dog to sit at both halts",
          "Dog assumes a position not required by the exercise",
          "Dog sits 90-degrees or more out of heel position",
          "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket",
        ],
      },
    },
    {
      name: "210",
      icon: require("../../assets/slides/210.jpg"),
      title: "210. HALT - From Sit - 180 right",
      description:
        "• The team comes to a <b>halt</b> and the dog <b>sits in heel position</b>.<br/>• The handler cues the dog to heel, <b>turns 180 degrees to their right</b> and heels forward.<br/>• This station results in a 180-degree change of direction.<br/><br/>",
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
      name: "211",
      icon: require("../../assets/slides/211.jpg"),
      title: "211. HALT - From Sit - 180 left",
      description:
        "• The team comes to a <b>halt</b> and the dog <b>sits in heel position</b>.<br/>• The handler cues the dog to heel, <b>turns 180 degrees to their left</b> and heels forward.<br/>• This station results in a 180-degree change of direction.<br/><br/>",
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
      name: "212",
      icon: require("../../assets/slides/212.jpg"),
      title: "212. HALT - Stand - Leave for Walk Around",
      excludeFromPractice: true,
      description:
        "• The team comes to a <b>halt</b> and the <b>dog sits in heel position</b>.<br/>• The handler cues the <b>dog to stand</b>.<br/>• The <b>dog must remain in a stand while the handler walks forward 5 feet to the Return to Heel station sign</b>(#213) and <b>turns to face the dog</b>.<br/>• The judge, starting from the right side of the handler, and walking approximately an arm’s length away from the dog, circles the dog and returns to pause by the handler’s side before moving away.<br/>• <b>The dog remains in a stand while the judge circles the dog</b>.<br/><br/>",
      tips: "• This station will always be followed by station 213 (Return To Heel).<br/>• While this station is not a reinforcement station, note that station 213 is. This means that you can reinforce your dog once you have returned to heel position after performing the stand-stay (in Intermediate and Advanced A/B).<br/>• During the walk through, the judge will be able to tell you where they will be standing for the walk around.<br/>• This station is not used in virtual trials.<br/>• Note that you may no longer touch the dog to stabalize or position them after the stand has been performed.",
      deductions: {
        minor: [
          "Dog sits or stands more than 45-degrees out of heel position",
          "Handler moves their feet during the stationary portion of the halt",
        ],
        nq: [
          "The dog does not hold the stand for the duration of the exercise (eg. takes steps forward or sits)",
          "Dog sits or stands more than 90-degrees out of heel position",
          "Handler does not walk to station 213",
          "Handler does not turn to face the dog",
          "Dog exhibits signs of aggression during the walk around, at the discretion of the Judge",
        ],
      },
    },
    {
      name: "213",
      icon: require("../../assets/slides/213.jpg"),
      title: "213. Return To Heel",
      excludeFromPractice: true,
      description:
        "• The handler <b>returns to heel position by moving around the dog in a counterclockwise direction into heel position</b>.<br/>• The <b>dog must remain in a stand whle the handler returns to heel</b>.<br/>• The handler may pause in heel position before moving forward.<br/>• The handler cues the dog to <b>heel forward from the stand position</b>.<br/>• Must follow station 212.<br/><br/>",
      tips: "• There will be no communication from the Judge about when you may return to your dog. Instead, wait for the Judge to have completed their Walk Around, returned to you, and moved away.<br/>• This sign always follows sign 212 and is not used elsewhere.<br/>• This station is not used in virtual trials.<br/>",
      reward: true,
      deductions: {
        minor: [
          "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
        ],
        nq: [
          "The dog does not hold the stand for the duration of the exercise (eg. circles to watch the handler was they walk around, takes steps forward or sits)",
          "Dog stands more than 90-degrees out of heel position",
          "Handler returns to their dog too soon",
          "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station, uses the food as a lure, or stores the food in their left pocket",
        ],
      },
    },
    {
      name: "214",
      icon: require("../../assets/slides/214.jpg"),
      title: "214. HALT - Leave Dog - Turn Call Front",
      practiceNextRestriction: ["216", "217", "218", "219"],
      description:
        "• The team comes to a <b>halt</b> and the <b>dog sits in heel position.<br/>• The handler walks forward to one of the station signs 216, 217, 218 or 219 and turns to face the dog.<br/>• The dog must remain in a sit until called by the handler to assume a front position</b>.<br/>• This sign results in a 180-degree change of direction.<br/><br/>",
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
      name: "215",
      icon: require("../../assets/slides/215.jpg"),
      title: "215. Call Front - 1, 2, 3 Steps Backward",
      practiceNextRestriction: ["216", "217", "218", "219"],
      description:
        "• The handler stops forward motion and calls the dog directly to the front position.<br/>• The handler may take up to four steps backward as the <b>dog turns and moves to sit in the front position.<br/>• From the sit</b> the handler takes 1 step backward and <b>halts</b>, the <b>dog moves with the handler sits in front position.<br/>• From the sit</b> the handler takes 2 steps backward and <b>halts</b>, the <b>dog moves with the handler and sits in front position.<br/>• From the sit</b> the handler takes 3 steps backward and <b>halts</b>, the <b>dog moves with the handler and sits in front position.<br/>• The team must meet the minimum required steps</b>.<br/>• This station is followed by one of 216, 217, 218 or 219.<br/><br/>",
      tips: "• This sign will always be followed by a finish or forward sign.<br/>• The dog must move with the handler as the handler steps backwards.<br/>• Depending on your stride length, you may not end up at the correct location for the next sign (front or finish) - this is ok, but do make a point of remembering what the next sign is, so that you can perform it correctly even if you cannot see the sign.",
      deductions: {
        minor: [
          "Dog sits more than 45-degrees out of front position",
          "Handler moves their feet during the stationary portion of the front",
          "",
        ],
        substantial: [
          "Handler takes more than the required number of steps in the 1,2,3 Exercises (3 points for each part of the exercise where extra steps are taken)",
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
      name: "216",
      icon: require("../../assets/slides/216.jpg"),
      title: "216. Finish Right",
      practiceOnlyAfter: ["214", "215"],
      description:
        "• With the <b>dog sitting in front position</b> the handler cues the <b>dog to move to the handler's right</b> and <b>around their body</b> to <b>sit in heel position</b>.<br/>• The handler’s feet should remain stationary while the dog moves around them.<br/>• The handler cues the dog to <b>heel forward from the sit position</b>.<br/><br/>",
      tips: "• This is not a stand alone sign. It will always follow a sign that ends with the dog in front position, such as 214 (Halt- Leave Dog - Turn and Call front) or 215 (Call Front - 1,2,3 Steps Backwards).<br/>• Unlike other stations, this sign does <i>not</i> need to be performed within a 2-foot radius of the station sign. This is because the space required for the previous sign may vary.<br/>• If rewarding, do not reach for reinforcement before the halt is comeplete and the dog has stopped moving.",
      reward: true,
      deductions: {
        minor: [
          "Handler moves their feet during the finish",
          "Dogs sits more than 45-degrees out of heel position",
          "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
        ],
        nq: [
          "Dog sits 90-degrees or more out of heel position",
          "Handler walks into the dog to force the dog to move (this is considered a physical correction).",
          "Dog assumes a position not required by the exercise",
          "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station",
        ],
      },
    },
    {
      name: "217",
      icon: require("../../assets/slides/217.jpg"),
      title: "217. Finish Left",
      practiceOnlyAfter: ["214", "215"],
      description:
        "• With the <b>dog sitting in front position</b> the handler cues the <b>dog to move to the handler's left</b> to <b>sit in heel position</b>.<br/>• The handler’s feet should remain stationary while the dog moves around them.<br/>• The handler cues the dog to <b>heel forward from the sit position</b>.<br/><br/>",
      tips: "• This is not a stand alone sign. It will always follow a sign that ends with the dog in front position, such as 214 (Halt- Leave Dog - Turn and Call front) or 215 (Call Front - 1,2,3 Steps Backwards).<br/>• Unlike other stations, this sign does <i>not</i> need to be performed within a 2-foot radius of the station sign. This is because the space required for the previous sign may vary.<br/>• If rewarding, do not reach for reinforcement before the halt is comeplete and the dog has stopped moving.",
      reward: true,
      deductions: {
        minor: [
          "Handler moves their feet during the finish",
          "Dogs sits more than 45-degrees out of heel position",
          "Reinforcement (dropped): dog leaves position to go to food that has been dropped (2 points)",
        ],
        nq: [
          "Dog sits 90-degrees or more out of heel position",
          "Handler walks into the dog to force the dog to move (this is considered a physical correction).",
          "Dog assumes a position not required by the exercise",
          "Reinforcement: handler puts their hand into the pocket where the food is located before the dog has completed the station",
        ],
      },
    },
    {
      name: "218",
      icon: require("../../assets/slides/218.jpg"),
      title: "218. Forward Right",
      practiceOnlyAfter: ["214", "215"],
      description:
        "• With the <b>dog sitting in front position</b> the handler cues the <b>dog to move to the handler’s right</b> and <b>around their body toward heel position</b>.<br/>• As the dog is returning to heel position, the handler cues the dog to heel and moves forward. <b>The dog does not sit in heel position</b>.<br/><br/>",
      tips: "• This is not a stand alone sign. It will always follow a sign that ends with the dog in front position, such as 214 (Halt- Leave Dog - Turn and Call front) or 215 (Call Front - 1,2,3 Steps Backwards).<br/>• You may begin to heel forward as soon as the dog is approaching heel position.<br/>• Unlike other stations, this sign does <i>not</i> need to be performed within a 2-foot radius of the station sign. This is because the space required for the previous sign may vary.",
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
      name: "219",
      icon: require("../../assets/slides/219.jpg"),
      title: "219. Forward Left",
      practiceOnlyAfter: ["214", "215"],
      description:
        "• With the <b>dog sitting in front position</b> the handler cues the <b>dog to move to the handler’s left</b> and to heel position</b>.<br/>• As the dog is returning to heel position, the handler cues the dog to heel and moves forward. <b>The dog does not sit in heel position</b>.<br/><br/>",
      tips: "• This is not a stand alone sign. It will always follow a sign that ends with the dog in front position, such as 214 (Halt- Leave Dog - Turn and Call front) or 215 (Call Front - 1,2,3 Steps Backwards).<br/>• You may begin to heel forward as soon as the dog has started to return to heel position and is no longer on your line of travel.<br/>• Unlike other stations, this sign does <i>not</i> need to be performed within a 2-foot radius of the station sign. This is because the space required for the previous sign may vary.",
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
      name: "220",
      icon: require("../../assets/slides/220.jpg"),
      title: "220. Jump",
      excludeFromPractice: true,
      description:
        "• The jump may be either a solid or bar jump.<br/>• <b>The team enters the send zone where the dog is sent to the jump</b>.<br/>• Once the dog has been sent, the handler may stay in the send zone or proceed <b>along the right of 3-foot line</b>.<br/>• The sign will be placed at the top of the send zone and the handler will not be required to be wtihin 2 feet of the sign for this station.<br/>• Handlers may move at whatever speed they wish.<br/>• <b>The handler must remain on the outside of the 3-foot line when proceeding past the jump</b>.<br/>• Upon completion of the jump the dog returns to heel position.<br/>• The dog may be cued to return to heel regardless of where the handler is along the line of travel.<br/><br/>",
      tips: "• The jump may be either a solid or bar jump. The broad jump is not used at this station.<br/>• The jump sign must be used in all Advanced courses.<br/>• Handlers may give multiple cues to the dog (without a deduction) as long as the dog is heading towards the jump. If the dog turns back to the handler or passes the plane of the jump, the handler must return to the send zone for a retry (when a retry is permitted).<br/>• No retry is permitted if the handler steps into the NQ Zone (training in the ring).",
      deductions: {
        substantial: ["Dog touches the jump (5 points)"],
        nq: [
          "Dog is sent to the jump before entering the send zone",
          "Handler steps inside the NQ Zone at any point",
          "Dog knocks the bar off or pushes off of the jump bar",
          "Dog fails to take the jump",
        ],
      },
    },
    {
      name: "221",
      icon: require("../../assets/slides/221.jpg"),
      title: "221. Diagonal Loop Right",
      description:
        "•	While heeling, the <b>team loops diagonally right crossing over their original path</b>.<br/>•	The handler’s path while turning must be within a diameter of 2 feet and should be in a straight line after turning.<br/>• The station results in a change of direction diagonally to the left. <br/><br/>",
      deductions: {
        substantial: ["TODO"],
        nq: ["TODO"],
      },
    },
    {
      name: "222",
      icon: require("../../assets/slides/222.jpg"),
      title: "222. Diagonal Loop Left",
      description:
        "•	While heeling, the <b>team loops diagonally left crossing over their original path</b>.<br/>•	The handler’s path while turning must be within a diameter of 2 feet and should be in a straight line after turning.<br/>• The station results in a change of direction diagonally to the right. <br/><br/>",
      deductions: {
        substantial: ["TODO"],
        nq: ["TODO"],
      },
    },
    {
      name: "223",
      icon: require("../../assets/slides/223.jpg"),
      title: "223. Call Dog",
      practiceOnlyAfter: ["201", "303", "304", "317"],
      description:
        "•	Upon passing this sign, the handler calls the dog to heel <b>while continuing to move forward</b>.<br/><br/>",
      deductions: {
        substantial: ["TODO"],
        nq: ["TODO"],
      },
    },
  ],
};

export default Advanced;
