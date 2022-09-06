import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../components/home";
import Review from "../components/review";
import About from "../components/about";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          //   options={{ title: "Overview" }}
        />
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
// const screens = {
//   Home: {
//     screen: Home,
//   },
//   Review: {
//     screen: Review,
//   },
// };

// const HomeStack = createNativeStackNavigator(screens);

// export default NavigationContainer(HomeStack);
