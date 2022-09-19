import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { windowWidth } from "../utils/Dimensions";

export default function ListItem({ source, title, subtitle, price }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <Image
          source={source}
          style={{ width: 55, height: 55, borderRadius: 10, marginRight: 6 }}
        />
        <View style={{ width: windowWidth - 220 }}>
          <Text
            numberOfLines={1}
            style={{
              color: "#333",
              fontFamily: "robotoMedium",
              fontSize: 14,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: "#333",
              fontFamily: "robotoMedium",
              fontSize: 12,
              textTransform: "uppercase",
            }}
          >
            {subtitle}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#0aada8",
          padding: 10,
          borderRadius: 10,
          width: 80,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontFamily: "robotoMedium",
            fontSize: 14,
          }}
        >
          {price ? price : "play"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
