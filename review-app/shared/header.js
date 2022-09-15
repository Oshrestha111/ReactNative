import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Movie</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "green",
    letterSpacing: 1.8,
  },
});

export default Header;
