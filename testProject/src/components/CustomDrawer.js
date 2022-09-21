import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

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
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 8 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="share-social-outline" size={20} color="black" />
            <Text
              style={{
                marginLeft: 5,
                fontSize: 15,
                fontFamily: "robotoMedium",
              }}
            >
              Share
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 8 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={20} color="black" />
            <Text
              style={{
                marginLeft: 5,
                fontSize: 15,
                fontFamily: "robotoMedium",
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
