import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

const Home = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.heading}>Home</Text> */}
      <Button
        title="Go to Review"
        onPress={() => navigation.navigate("Review")}
      />
    </View>
  );
};

export default Home;
