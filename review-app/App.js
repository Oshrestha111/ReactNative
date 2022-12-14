import "./ignoreWarnings";
import { registerRootComponent } from "expo";
import { StyleSheet, Text, View } from "react-native";
import About from "./components/about";
import Home from "./components/home";
import Review from "./components/review";
import { useFonts } from "expo-font";
import { globalStyles } from "./styles/global";
import Navigation from "./routes/homeStack";
import NavigationDrawer from "./routes/drawer";

function App() {
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
    // <Navigation />
    <NavigationDrawer />
    // <View style={globalStyles.container}>
    //   <Home />
    //   <Review />
    //   <About />
    // </View>
  );
}

AppRegistry.registerComponent("main", () => App);
export default App;
