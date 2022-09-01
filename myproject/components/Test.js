import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Form from "./Form";
import List from "./List";

const Test = () => {
  const [text, setText] = useState("");
  const [isClicked, setIsClicked] = useState();

  const clickHandler = () => {
    // setIsClicked(true);
    alert(`Namaste ${text} !`);
  };

  return (
    <View style={styles.container}>
      {/* <List /> */}
      {/* <Form /> */}
      <View style={{ backgroundColor: "#E2F0CB", display: "none" }}>
        <Text style={styles.boldText}>pizza language translator</Text>

        {/* <Text style={styles.boldText}>
          {isClicked ? `Namaste ${text} !!` : ""}
        </Text> */}
        {/* <Text style={styles.boldText}>
          {text
            .split(" ")
            .map((word) => word && "🍕")
            .join(" ")}
        </Text> */}

        <View>
          <TextInput
            placeholder="tero naam k ho bey?"
            style={styles.input}
            onChangeText={(currentText) => setText(currentText)}
            defaultValue={text}
          ></TextInput>
        </View>
      </View>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: "100%",
    backgroundColor: "#E0BBE4",
    // alignItems: "center",
    // justifyContent: "center",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  // input: {
  //   backgroundColor: "#fff",
  //   width: 300,
  //   padding: 10,
  //   fontSize: 19,
  //   marginBottom: 20,
  // },
});
