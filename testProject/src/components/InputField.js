import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

export default function InputField({
  label,
  icon,
  keyboardType,
  inputType,
  fieldButtonLabel,
  fieldButtonFunction,
}) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
          alignItems: "center",
          marginBottom: 18,
          paddingBottom: 4,
        }}
      >
        {icon}
        {/* <MaterialIcons name="alternate-email" size={20} color="#fff" /> */}
        {inputType == "password" ? (
          <TextInput
            placeholder={label}
            placeholderTextColor="#ccc"
            style={{
              marginLeft: 8,
              color: "#fff",
              flex: 1,
            }}
            keyboardType={keyboardType}
            secureTextEntry={true}
          />
        ) : (
          <TextInput
            placeholder={label}
            placeholderTextColor="#ccc"
            style={{
              marginLeft: 8,
              color: "#fff",
              flex: 1,
            }}
            keyboardType={keyboardType}
          />
        )}
        <TouchableOpacity onPress={fieldButtonFunction}>
          <Text
            style={{ color: "#3D8361", fontFamily: "robotoBold", fontSize: 16 }}
          >
            {fieldButtonLabel}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
