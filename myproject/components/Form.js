import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Form = () => {
  const [name, setName] = useState("no face");
  const [age, setAge] = useState("22");

  return (
    <View>
      <Text style={styles.boldText}>Name:</Text>
      <TextInput
        multiline
        autoComplete="name"
        style={styles.input}
        placeholder="e.g. John Doe"
        onChangeText={(currentVal) => setName(currentVal)}
      />
      <Text>{name}</Text>
      <Text style={styles.boldText}>Age:</Text>
      <TextInput
        autoFocus
        // blurOnSubmit
        windowSoftInputMode
        style={styles.input}
        keyboardType="numeric"
        placeholder="e.g. 88"
        onChangeText={(age) => setAge(age)}
      />
      <View style={{ marginBottom: 10 }}>
        <Button
          title="submit"
          onPress={() => alert(`Hello ${name}. you are ${age} years old.`)}
          color="#841584"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boldText: {
    fontSize: 20,
  },
  input: {
    backgroundColor: "#fff",
    width: 300,
    padding: 10,
    fontSize: 19,
    marginBottom: 20,
  },
});

export default Form;
