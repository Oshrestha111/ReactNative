import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Review = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>this is review</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "blue",
  },
  text: {
    fontFamily: "nanum-Bold",
    fontSize: 30,
    // fontWeight: "bold",
  },
});

export default Review;
