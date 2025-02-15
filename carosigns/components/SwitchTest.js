import React, { useState } from "react";
import { View } from "react-native";
import { Switch } from "react-native-paper";

export default function SwitchTest() {
  const [switchA, setSwitchA] = useState(false);
  const [switchB, setSwitchB] = useState(false);
  const [switchC, setSwitchC] = useState(false);
  const [switchD, setSwitchD] = useState(false);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Switch
        label="Audio"
        value={switchA}
        onValueChange={() => {
          setSwitchA(!switchA);
        }}
      />
      <Switch
        label="Audio"
        value={switchB}
        onValueChange={() => {
          setSwitchB(!switchB);
        }}
      />
      <Switch
        label="Audio"
        value={switchC}
        onValueChange={() => {
          setSwitchC(!switchC);
        }}
      />
      <Switch
        label="Audio"
        value={switchD}
        onValueChange={() => {
          setSwitchD(!switchD);
        }}
      />
    </View>
  );
}
