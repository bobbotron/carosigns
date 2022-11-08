import { Text } from "react-native";

const Novice = [
  {
    name: "Start",
    icon: require("../assets/slides/start.jpg"),
    category: "Novice",
    description:
      "Start<br/> • While heeling, the <b>team heels past the Start station.</b><br/> • Timing begins.<br/> • There are no other commands from the Judge throughout the course.",
  },
  {
    name: "Finish",
    icon: require("../assets/slides/finish.jpg"),
    category: "Novice",
  },
  {
    name: "100",
    icon: require("../assets/slides/100.jpg"),
    category: "Novice",
    title: "100. HALT – Stand",
    description: "100. HALT – Stand",
    reward: true,
    deductions: {
      minor: [
        "Too cute, distracts judges and makes everyone jealous. Not cool.",
        "Insane aussie",
        "Drooly",
      ],
      substantial: ["Newf Drool"],
      nq: ["Pees in ring"],
    },
    video: undefined,
  },
  {
    name: "101",
    icon: require("../assets/slides/101.jpg"),
    category: "Novice",
    title: "101. HALT – Down",
    description: () => {
      return (
        <>
          <Text>101. HALT – Down</Text>
        </>
      );
    },
  },
  {
    name: "102",
    icon: require("../assets/slides/102.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>102. HALT – Down - Sit</Text>
        </>
      );
    },
  },
  {
    name: "103",
    icon: require("../assets/slides/103.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>103. HALT – Walk Around</Text>
        </>
      );
    },
  },
  {
    name: "104",
    icon: require("../assets/slides/104.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>104. HALT – Down - Walk Around</Text>
        </>
      );
    },
  },
  {
    name: "105",
    icon: require("../assets/slides/105.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>105. HALT – 1,2,3 Steps Forward</Text>
        </>
      );
    },
  },
  {
    name: "106",
    icon: require("../assets/slides/106.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>106. HALT – Sidestep Right - HALT</Text>
        </>
      );
    },
  },
  {
    name: "107",
    icon: require("../assets/slides/107.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>107. HALT – 90 Pivot Right - HALT</Text>
        </>
      );
    },
  },
  {
    name: "108",
    icon: require("../assets/slides/108.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>108. HALT – 90 Pivot Left - HALT</Text>
        </>
      );
    },
  },
  {
    name: "109",
    icon: require("../assets/slides/109.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>109. HALT – Turn Right 1 Step - HALT</Text>
        </>
      );
    },
  },
  {
    name: "110",
    icon: require("../assets/slides/110.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>111. Right Turn</Text>
        </>
      );
    },
  },
  {
    name: "111",
    icon: require("../assets/slides/111.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>111. Left Turn</Text>
        </>
      );
    },
  },
  {
    name: "112",
    icon: require("../assets/slides/112.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>112. 180 Right</Text>
        </>
      );
    },
  },
  {
    name: "113",
    icon: require("../assets/slides/113.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>113. 180 Left</Text>
        </>
      );
    },
  },
  {
    name: "114",
    icon: require("../assets/slides/114.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>114. 270 Right</Text>
        </>
      );
    },
  },
  {
    name: "115",
    icon: require("../assets/slides/115.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>115. 270 Left</Text>
        </>
      );
    },
  },
  {
    name: "116",
    icon: require("../assets/slides/116.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>116. 360 Right</Text>
        </>
      );
    },
  },
  {
    name: "117",
    icon: require("../assets/slides/117.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>117. 360 Left</Text>
        </>
      );
    },
  },
  {
    name: "118",
    icon: require("../assets/slides/118.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>118. Slow</Text>
        </>
      );
    },
  },
  {
    name: "119",
    icon: require("../assets/slides/119.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>119. Fast</Text>
        </>
      );
    },
  },
  {
    name: "120",
    icon: require("../assets/slides/120.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>120. Normal</Text>
        </>
      );
    },
  },
  {
    name: "121",
    icon: require("../assets/slides/121.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>121. Call Front Finish Right</Text>
        </>
      );
    },
  },
  {
    name: "122",
    icon: require("../assets/slides/122.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>122. Call Front Finish Left</Text>
        </>
      );
    },
  },
  {
    name: "123",
    icon: require("../assets/slides/123.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>123. Call Front Forward Right</Text>
        </>
      );
    },
  },
  {
    name: "124",
    icon: require("../assets/slides/124.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>124. Call Front Forward Left</Text>
        </>
      );
    },
  },
  {
    name: "125",
    icon: require("../assets/slides/125.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>125. Call Front Handler Returns to Heel</Text>
        </>
      );
    },
  },
  {
    name: "126",
    icon: require("../assets/slides/126.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>126. Spiral Right</Text>
        </>
      );
    },
  },
  {
    name: "127",
    icon: require("../assets/slides/127.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>127. Spiral Left</Text>
        </>
      );
    },
  },
  {
    name: "128",
    icon: require("../assets/slides/128.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>Weave Once</Text>
        </>
      );
    },
  },
  {
    name: "129",
    icon: require("../assets/slides/129.jpg"),
    category: "Novice",
    description: () => {
      return (
        <>
          <Text>Weave Twice</Text>
        </>
      );
    },
  },
];

export default Novice;
