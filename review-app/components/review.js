import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Review = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>this is review page</Text>
      <Button
        title="Go to Review again.."
        onPress={() => navigation.push("Review")}
      />
      <Button title="Goback" onPress={() => navigation.goBack()} />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      {/* or  onPress={() => navigation.popToTop()} */}
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
