import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
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

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* add todo form */}
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
