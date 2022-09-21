import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Registration from "../assets/images/misc/registration.svg";
import Login from "../assets/images/misc/login.svg";
import { MaterialIcons } from "@expo/vector-icons";

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#101010", paddingTop: 10 }}>
      {/* <Registration
        width={300}
        height={300}
        fill="black"
        // style={{ transform: [{ rotate: "-15deg" }] }}
      /> */}
      <View style={{ paddingHorizontal: 40 }}>
        <Login width={300} height={300} />
        <Text
          style={{
            color: "#fff",
            fontFamily: "robotoRegular",
            fontSize: 26,
            paddingBottom: 14,
          }}
        >
          Login
        </Text>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            alignItems: "center",
            marginBottom: 18,
          }}
        >
          <MaterialIcons name="alternate-email" size={20} color="#fff" />
          <TextInput
            placeholder="Email ID"
            placeholderTextColor="#ccc"
            style={{
              marginLeft: 8,
              color: "#fff",
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            alignItems: "center",
          }}
        >
          <MaterialIcons name="lock-outline" size={20} color="#fff" />
          <TextInput
            placeholder="Email ID"
            placeholderTextColor="#ccc"
            style={{
              marginLeft: 8,
              color: "#fff",
            }}
          />
          {/* <TouchableOpacity style={{ alignItems: "right" }}>
            <Text>Forgot?</Text>
          </TouchableOpacity> */}
        </View>
      </View>

      <View></View>
    </View>
  );
}
