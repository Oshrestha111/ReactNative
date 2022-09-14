import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Review = ({ navigation, route }) => {
  // const { itemId, otherParam } = route.params;
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>this is review page</Text>
      <Text style={styles.text}>Id:{itemId}</Text>
      <Text style={styles.text}>parameters:{otherParam}</Text> */}
      <Text>This is review</Text>
      <Button
        title="Go to Review again.."
        onPress={() => navigation.push("Review")}
      />
      <Button title="Goback" onPress={() => navigation.goBack()} />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      {/* or  onPress={() => navigation.popToTop()} */}
      <Button
        title="Create post"
        onPress={() => navigation.navigate("CreatePost")}
      />
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
