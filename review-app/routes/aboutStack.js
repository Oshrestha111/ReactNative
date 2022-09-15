import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "../components/about";
import React from "react";

const Stack = createNativeStackNavigator(); //creates a stack for navigation

const AboutStack = () => {
  return (
    // <NavigationContainer initialRouteName="Home">
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: "About",
          headerStyle: {
            backgroundColor: "#957DAD",
            // height: 50, didnt work
          },
        }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AboutStack;
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
