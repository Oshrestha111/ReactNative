import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AppContext } from "../App";

const TodoItem = ({ item, pressHandler }) => {
  const { test } = useContext(AppContext);

  return (
    <View style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <MaterialIcons name="delete" size={24} color="grey" />
      </TouchableOpacity>
      {/* <Text>{test}</Text> learning context */}
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
  text: {
    maxWidth: "90%",
  },
});

export default TodoItem;
