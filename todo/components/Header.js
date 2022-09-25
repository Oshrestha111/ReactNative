import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppContext } from "../App";

export default function Header() {
  const { headerData } = useContext(AppContext);

  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos </Text>
      {/* <Text style={styles.title}>{headerData}</Text>  learning context*/}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 18,
    backgroundColor: "#018749",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
