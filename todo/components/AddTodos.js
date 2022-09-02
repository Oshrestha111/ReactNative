import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View style={styles.inputBar}>
      <TextInput
        placeholder="new todo...."
        style={styles.input}
        onChangeText={changeHandler}
      />

      <TouchableOpacity onPress={() => submitHandler(text)}>
        <Text style={{ paddingTop: 8 }}>
          <AntDesign name="pluscircle" size={32} color="green" />
        </Text>
      </TouchableOpacity>

      {/* <Button
        title="add todo"
        color="#018749"
        onPress={() => submitHandler(text)}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  inputBar: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignContent: "flex-end",
  },
  input: {
    flex: 4,
    marginBottom: 10,
    padding: 8,
    // color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    // backgroundColor: "#FFDAC1",
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
  },
});
