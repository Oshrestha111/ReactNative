import { StyleSheet } from "react-native";
import ReactNative from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import { AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/navigation/AppNav";

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
    <AuthProvider>
      <AppNav />
    </AuthProvider>
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
