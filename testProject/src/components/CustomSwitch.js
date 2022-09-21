import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View
      style={{
        height: 44,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#101010",
        borderRadius: 10,
        borderColor: "#AD40AF",
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 1 ? "#1C6758" : "#e4e4e4",
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: getSelectionMode == 1 ? "white" : "#1C6758",
            fontSize: 14,
            fontFamily: "robotoMedium",
          }}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 2 ? "#1C6758" : "#e4e4e4",
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: getSelectionMode == 2 ? "white" : "#1C6758",
            fontSize: 14,
            fontFamily: "robotoMedium",
          }}
        >
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
