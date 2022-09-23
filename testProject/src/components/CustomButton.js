import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function CustomButton({ label, onPress }) {
  return (
    <View style={{ marginTop: 18 }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: "#3D8361",
          borderRadius: 8,
          // height: 50,
          justifyContent: "center",
          paddingTop: 12,
          paddingBottom: 12,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#ccc",
            fontFamily: "robotoRegular",
            fontSize: 18,
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
