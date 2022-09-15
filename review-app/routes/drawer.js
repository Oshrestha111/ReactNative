import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../components/home";
import Review from "../components/review";
import About from "../components/about";
import Header from "../shared/header";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          // options={{ headerTitle: () => <Header /> }}
        />
        <Drawer.Screen
          name="Movie Review"
          component={Review}
          options={{ drawerLabel: "Reviews" }} //changes drawer ma vako label (name)
        />
        <Drawer.Screen
          name="Movie About"
          component={AboutStack}
          options={{ drawerLabel: "About" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MyDrawer;
