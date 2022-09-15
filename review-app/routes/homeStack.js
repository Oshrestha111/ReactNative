import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../components/home";
import Review from "../components/review";
import About from "../components/about";
import CreatePost from "../components/CreatePost";
import React from "react";
import Header from "../shared/header";

const Stack = createNativeStackNavigator(); //creates a stack for navigation

const HomeStack = () => {
  return (
    // <NavigationContainer initialRouteName="Home">
    <Stack.Navigator
      mode="modal"
      // screenOptions={{
      //   headerStyle: {
      //     backgroundColor: "#f4511e",
      //   },
      //   headerTintColor: "#fff",
      // }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={
          {
            // title: "Movie ",
            // headerTitle: () => <Header />,
            // headerStyle: {
            //   backgroundColor: "#E0BBE4",
            // },
          }
        }
      />
      <Stack.Screen
        name="Review"
        component={Review}
        options={{
          title: "Review Details ",
          // headerStyle: {
          //   backgroundColor: "#D291BC",
          // },
        }}
      />
      {/* <Stack.Screen
          name="About"
          component={About}
          options={{
            title: "About",
            headerStyle: {
              backgroundColor: "#957DAD",
              // height: 50, didnt work
            },
          }}
        /> */}
      <Stack.Screen name="CreatePost" component={CreatePost} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default HomeStack;
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
