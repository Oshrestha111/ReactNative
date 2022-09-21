import { StyleSheet } from "react-native";
import ReactNative from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AuthStack from "./src/navigation/AuthStack";
import AppStack from "./src/navigation/AppStack";
import React from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    robotoRegular: require("./src/assets/fonts/Roboto-Regular.ttf"),
    robotoBold: require("./src/assets/fonts/Roboto-Bold.ttf"),
    robotoMedium: require("./src/assets/fonts/Roboto-Medium.ttf"),
    RobotoMediumItallic: require("./src/assets/fonts/Roboto-MediumItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthStack />
      {/* <AppStack /> */}
    </NavigationContainer>
  );
}

ReactNative.AppRegistry.registerComponent("testProject", () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
