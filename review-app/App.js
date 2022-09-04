import { StyleSheet, Text, View } from "react-native";
import About from "./components/about";
import Home from "./components/home";
import Review from "./components/review";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "nanum-regular": require("./assets/fonts/NanumMyeongjo-Regular.ttf"),
    "nanum-Bold": require("./assets/fonts/NanumMyeongjo-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Home />
      <Review />
      <About />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
