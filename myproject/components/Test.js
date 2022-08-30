import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Test = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Namaste {text} !!</Text>
        <Text style={styles.boldText}>How was your day {text}?</Text>
      </View>
      <View>
        <TextInput
          placeholder="enter your name"
          style={styles.input}
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        ></TextInput>
      </View>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0BBE4",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#D291BC",
    position: "absolute",
    top: 20,
    width: "100%",
    height: 50,
    display: "flex",
    alignItems: "center",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 22,
  },
  input: {
    backgroundColor: "#fff",
    width: 300,
    padding: 10,
    fontSize: 19,
  },
});
