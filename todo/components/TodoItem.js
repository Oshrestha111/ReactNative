import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <View style={styles.item}>
      <Text>{item.text}</Text>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <MaterialIcons name="delete" size={24} color="grey" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginTop: 16,
    // borderColor: "#ddd",
    // borderWidth: 1,
    // borderStyle: "dashed",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderRightColor: "#ccc",
    borderRadius: 10,
    borderLeftColor: "#ADFF2F",
    borderLeftWidth: 6,
  },
});

export default TodoItem;
