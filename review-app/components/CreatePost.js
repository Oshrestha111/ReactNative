import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { globalStyles } from "../styles/global";

const CreatePost = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.heading}>Home</Text> */}
      <TextInput
        multiline
        placeholder="Whats on you mind?"
        value={text}
        onChangeText={(val) => setText(val)}
        style={{ height: 100, padding: 10, backgroundColor: "white" }}
      />
      <Button
        title="Done"
        onPress={() =>
          navigation.navigate({
            name: "Home",
            params: {
              post: text,
            },
            merge: true,
          })
        }
      />
    </View>
  );
};

export default CreatePost;
