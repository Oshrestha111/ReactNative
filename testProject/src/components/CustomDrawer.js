import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { FontAwesome5 } from "@expo/vector-icons";

export default function CustomDrawer(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#8200d6" }}
      >
        <ImageBackground
          source={require("../assets/images/menu-bg.jpeg")}
          style={{ padding: 20 }}
        >
          <Image
            source={require("../assets/images/user-profile.jpg")}
            style={{
              height: 80,
              width: 80,
              marginBottom: 10,
              borderRadius: 50,
            }}
          />

          <Text
            style={{
              color: "#fff",
              fontFamily: "robotoBold",
              fontSize: 18,
              marginBottom: 4,
            }}
          >
            {" "}
            Sohan Pratap Stha
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#fff",
                fontFamily: "robotoRegular",
                marginRight: 5,
              }}
            >
              280 coins
            </Text>
            <FontAwesome5 name="coins" size={16} color="white" />
          </View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View>
        <Text>Custom drawer</Text>
      </View>
    </View>
  );
}
