import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddTodo from "./components/AddTodos";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "make a project reactNative", key: "1" },
    { text: "create an app", key: "2" },
    { text: "watch something", key: "3" },
    { text: "take meds", key: "4" },
    { text: "baff liu", key: "5" },
  ]);

  const pressHandler = (key) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prev) => {
        return [{ text: text, key: Math.random().toString() }, ...prev];
      });
    } else {
      Alert.alert("OOPS!!", "Todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("pressed") },
        // {
        //   text: "Cancel",
        //   onPress: () => console.log("canceled"),
        // },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
