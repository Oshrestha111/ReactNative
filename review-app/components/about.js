import React from "react";
import { View, Text, StyleSheet } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Text>about</Text>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
        sapiente dolor veritatis enim mollitia explicabo quia ratione ea? Esse
        repellat nisi inventore iure nobis quibusdam tenetur ex aliquid
        doloremque officia?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "green",
  },
});

export default About;
