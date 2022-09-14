import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import Ionicons from "@expo/vector-icons/Ionicons";

const Home = ({ navigation, route }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>
        {/* Home <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
        <MaterialCommunityIcons
          name="home-circle-outline"
          size={44}
          color="black"
        />
      </Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
      <Button
        title="Go to Review"
        onPress={() =>
          navigation.navigate("Review", {
            itemId: 99,
            otherParam: "anything...... param",
          })
        }
      />
      <Button
        title="create sth"
        onPress={() => navigation.navigate("CreatePost")}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      {/* <Text>{route.param ? `post Created:${route.params?.post}` : null}</Text> */}
    </View>
  );
};

export default Home;
