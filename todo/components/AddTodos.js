import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholder="new todo...."
        style={styles.input}
        onChangeText={changeHandler}
      />
      <Button
        title="add todo"
        color="#B5EAD7"
        onPress={() => submitHandler(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
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
